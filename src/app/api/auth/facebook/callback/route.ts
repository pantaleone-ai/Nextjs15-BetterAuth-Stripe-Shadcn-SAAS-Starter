import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { db } from '@/db/client'
import { users } from '@/db/schema'
import { createSession } from '@/lib/auth'
import { eq } from 'drizzle-orm'
import type { InsertUser } from '@/db/schema'

const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID!
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET!
const REDIRECT_URI = `${process.env.BASE_URL}/api/auth/facebook/callback`

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect('/sign-in?error=oauth_error')
  }

  try {
    // Exchange code for access token
    const tokenResponse = await axios.get(`https://graph.facebook.com/v18.0/oauth/access_token`, {
      params: {
        client_id: FACEBOOK_CLIENT_ID,
        client_secret: FACEBOOK_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code: code,
      }
    })

    const accessToken = tokenResponse.data.access_token

    // Get user profile data
    const profileResponse = await axios.get(`https://graph.facebook.com/v18.0/me`, {
      params: {
        fields: 'id,name,email,picture.type(large)',
        access_token: accessToken,
      }
    })

    const profile = profileResponse.data

    if (!profile.email) {
      return NextResponse.redirect('/sign-in?error=no_email')
    }

    // Check if user exists or create new one
    let user = await db.query.users.findFirst({
      where: eq(users.email, profile.email)
    })

    if (!user) {
      const [newUser] = await (db.insert(users).values({
        email: profile.email,
        name: profile.name,
        passwordHash: '', // Empty for social login
        emailVerified: true,
        provider: 'facebook',
        providerId: profile.id,
        avatar: profile.picture?.data?.url,
      } as Omit<InsertUser, 'id' | 'createdAt' | 'updatedAt'>)).returning()
      user = newUser
    } else if (user.provider !== 'facebook') {
      // Update existing email user with Facebook info
      await (db.update(users)
        .set({
          provider: 'facebook',
          providerId: profile.id,
          avatar: profile.picture?.data?.url,
          emailVerified: true,
        } as Partial<Omit<InsertUser, 'id' | 'createdAt' | 'updatedAt'>>))
        .where(eq(users.id, user.id))
    }

    // Create session using your existing JWT system
    await createSession(user.id, user.email)

    return NextResponse.redirect('/dashboard')
  } catch (error) {
    console.error('Facebook OAuth error:', error)
    return NextResponse.redirect('/sign-in?error=oauth_error')
  }
}
