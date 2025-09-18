import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function GET() {
  // Generate PKCE code verifier and challenge
  const codeVerifier = crypto.randomBytes(32).toString('base64url')
  const codeChallenge = crypto.createHash('sha256').update(codeVerifier).digest('base64url')

  // Store code verifier in session/state (simplified - you might want to use cookies or database)
  const state = crypto.randomBytes(16).toString('hex')

  const authUrl = `https://twitter.com/i/oauth2/authorize?` +
    `response_type=code&` +
    `client_id=${process.env.TWITTER_CLIENT_ID}&` +
    `redirect_uri=${encodeURIComponent(`${process.env.BASE_URL}/api/auth/twitter/callback`)}&` +
    `scope=tweet.read%20users.read%20offline.access&` +
    `state=${state}&` +
    `code_challenge=${codeChallenge}&` +
    `code_challenge_method=S256`

  // In production, store state and codeVerifier securely
  // For now, we'll pass them as query params (not secure!)
  const redirectUrl = `${authUrl}&code_verifier=${codeVerifier}&stored_state=${state}`

  return NextResponse.redirect(redirectUrl)
}
