import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import { db } from '@/db/client'
import { users } from '@/db/schema'
import { createSession } from '@/lib/auth'
import { eq } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error || !code) {
    return NextResponse.redirect('/sign-in?error=oauth_cancelled')
  }

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }, {
      headers: {
        Accept: 'application/json',
      },
    })

    const accessToken = tokenResponse.data.access_token

    // Get user profile data
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })

    const profile = userResponse.data

    // Get user email - GitHub may have primary and secondary emails
    const emailResponse = await axios.get('https://api.github.com/user/emails', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })

    const emails = emailResponse.data
    const primaryEmail = emails.find((email: any) => email.primary)?.email

    if (!primaryEmail) {
      return NextResponse.redirect('/sign-in?error=no_email')
    }

    // Check if user exists or create new one
    let user = await db.query.users.findFirst({
      where: eq(users.email, primaryEmail)
    })

    if (!user) {
      const [newUser] = await db.insert(users).values({
        email: primaryEmail,
        name: profile.name || profile.login,
        passwordHash: '', // Empty for social login
        emailVerified: true,
        provider: 'github',
        providerId: profile.id.toString(),
        avatar: profile.avatar_url,
      }).returning()
      user = newUser
    } else if (user.provider !== 'github') {
      // Update existing email user with GitHub info
      await db.update(users)
        .set({
          provider: 'github',
          providerId: profile.id.toString(),
          avatar: profile.avatar_url,
          emailVerified: true,
        })
        .where(eq(users.id, user.id))
    }

    // Create session using your existing JWT system
    await createSession(user.id, user.email)

    return NextResponse.redirect('/dashboard')
  } catch (error) {
    console.error('GitHub OAuth error:', error)
    return NextResponse.redirect('/sign-in?error=oauth_error')
  }
}
