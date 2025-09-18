import { NextRequest, NextResponse } from 'next/server'
import { OAuth2Client } from 'google-auth-library'
import { db } from '@/db/client'
import { users } from '@/db/schema'
import { createSession } from '@/lib/auth'
import { eq } from 'drizzle-orm'
import type { InsertUser } from '@/db/schema'

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.BASE_URL}/api/auth/google/callback`
)

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error || !code) {
    return NextResponse.redirect('/sign-in?error=oauth_cancelled')
  }

  try {
    // Exchange code for tokens
    const { tokens } = await client.getToken(code)
    client.setCredentials(tokens)

    // Verify and decode ID token
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()!

    if (!payload.email) {
      return NextResponse.redirect('/sign-in?error=no_email')
    }

    // Check if user exists or create new one
    let user = await db.query.users.findFirst({
      where: eq(users.email, payload.email)
    })

    if (!user) {
      const [newUser] = await (db.insert(users).values({
        email: payload.email,
        name: payload.name || payload.email.split('@')[0],
        passwordHash: '', // Empty for social login
        emailVerified: payload.email_verified || false,
        provider: 'google',
        providerId: payload.sub, // Google user ID
        avatar: payload.picture,
      } as Omit<InsertUser, 'id' | 'createdAt' | 'updatedAt'>)).returning()
      user = newUser
    } else if (user.provider !== 'google') {
      // Update existing email user with Google info
      await (db.update(users)
        .set({
          provider: 'google',
          providerId: payload.sub,
          avatar: payload.picture,
          emailVerified: true,
        }))
        .where(eq(users.id, user.id))
    }

    // Create session using your existing JWT system
    await createSession(user.id, user.email)

    return NextResponse.redirect('/dashboard')
  } catch (error) {
    console.error('Google OAuth error:', error)
    return NextResponse.redirect('/sign-in?error=oauth_error')
  }
}
