import { NextResponse } from 'next/server'

const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID!
const REDIRECT_URI = `${process.env.BASE_URL}/api/auth/facebook/callback`

export async function GET() {
  const authUrl = `https://www.facebook.com/v18.0/dialog/oauth?` +
    `client_id=${FACEBOOK_CLIENT_ID}&` +
    `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
    `scope=email,public_profile&` +
    `state=${Math.random().toString(36).substring(7)}&` +
    `response_type=code`

  return NextResponse.redirect(authUrl)
}
