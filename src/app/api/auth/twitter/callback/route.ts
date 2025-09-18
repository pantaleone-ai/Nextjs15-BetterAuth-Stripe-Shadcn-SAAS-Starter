import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { db } from '@/db/client'
import { users } from '@/db/schema'
import { createSession } from '@/lib/auth'
import { eq } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')

  // Get stored values from URL (in production, use secure storage)
  const codeVerifier = searchParams.get('code_verifier')
  const storedState = searchParams.get('stored_state')

  if (error || !code || !state || state !== storedState) {
    return NextResponse.redirect('/sign-in?error=oauth_cancelled')
  }

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post('https://api.twitter.com/2/oauth2/token', {
      code,
      grant_type: 'authorization_code',
      client_id: process.env.TWITTER_CLIENT_ID,
      redirect_uri: `${process.env.BASE_URL}/api/auth/twitter/callback`,
      code_verifier: codeVerifier,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${process.env.TWITTER_CLIENT_ID}:${process.env.TWITTER_CLIENT_SECRET}`).toString('base64')}`,
      },
    })

    const { access_token } = tokenResponse.data

    // Get user profile data
    const userResponse = await axios.get('https://api.twitter.com/2/users/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        'user.fields': 'id,name,username,profile_image_url,email',
      },
    })

    const profile = userResponse.data.data

    // Twitter doesn't provide email in the standard scope, so we'll use username@example.com
    // In production, you might need to request email scope or handle differently
    const pseudoEmail = `${profile.username}@twitter.com`

    // Check if user exists or create new one
    let user = await db.query.users.findFirst({
      where: eq(users.email, pseudoEmail)
    })

    if (!user) {
      const [newUser] = await db.insert(users).values({
        email: pseudoEmail,
        name: profile.name,
        passwordHash: '', // Empty for social login
        emailVerified: true,
        provider: 'twitter',
        providerId: profile.id,
        avatar: profile.profile_image_url,
      }).returning()
      user = newUser
    } else if (user.provider !== 'twitter') {
      // Update existing email user with Twitter info
      await db.update(users)
        .set({
          provider: 'twitter',
          providerId: profile.id,
          avatar: profile.profile_image_url,
          emailVerified: true,
        })
        .where(eq(users.id, user.id))
    }

    // Create session using your existing JWT system
    await createSession(user.id, user.email)

    return NextResponse.redirect('/dashboard')
  } catch (error) {
    console.error('Twitter OAuth error:', error)
    return NextResponse.redirect('/sign-in?error=oauth_error')
  }
}
