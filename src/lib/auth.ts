import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { db } from '@/db/client'
import { users, teamMembers } from '@/db/schema'
import { eq, and } from 'drizzle-orm'

const secretKey = process.env.AUTH_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function hashPassword(password: string){ return bcrypt.hash(password, 10) }
export async function verifyPassword(password: string, hash: string){ return bcrypt.compare(password, hash) }
export async function createSession(userId: string, email: string){ const expiresAt = new Date(Date.now()+7*24*60*60*1000); const session = await new SignJWT({ userId, email, expiresAt }).setProtectedHeader({ alg:'HS256' }).setIssuedAt().setExpirationTime('7d').sign(encodedKey); const cookieStore = await cookies(); cookieStore.set('session', session, { httpOnly: true, secure: process.env.NODE_ENV==='production', expires: expiresAt, sameSite:'lax', path:'/' }) }
type JWTPayload = {
  userId: string
  email: string
  expiresAt: string
  iat: number
  exp: number
}

export async function decrypt(session: string | undefined = ''): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, { algorithms: ['HS256'] })
    return payload as JWTPayload
  } catch {
    return null
  }
}
export async function verifySession(){ const cookieStore = await cookies(); const cookie = cookieStore.get('session')?.value; const session = await decrypt(cookie); if(!session?.userId) return null; return { userId: session.userId, email: session.email } }
export async function deleteSession(){ const cookieStore = await cookies(); cookieStore.delete('session') }
export async function requireAuth(){ const s = await verifySession(); if(!s) redirect('/sign-in'); return s }
export async function getCurrentUser(){ const s = await verifySession(); if(!s) return null; return db.query.users.findFirst({ where: eq(users.id, s.userId), columns:{ id:true, email:true, name:true, createdAt:true } }) }
export async function requireUser(){ const u = await getCurrentUser(); if(!u) redirect('/sign-in'); return u }
export async function checkTeamPermission(userId: string, teamId: string, requiredRole: 'owner'|'member'='member'){ const membership = await db.query.teamMembers.findFirst({ where: and(eq(teamMembers.userId, userId), eq(teamMembers.teamId, teamId)) }); if(!membership) return false; if(requiredRole==='owner') return membership.role==='owner'; return ['owner','member'].includes(membership.role) }
export async function requireTeamPermission(userId: string, teamId: string, requiredRole: 'owner'|'member'='member'){ const ok = await checkTeamPermission(userId, teamId, requiredRole); if(!ok) throw new Error('Insufficient permissions'); return true }
