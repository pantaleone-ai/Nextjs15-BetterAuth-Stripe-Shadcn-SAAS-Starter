import { NextResponse } from 'next/server'

export async function GET() {
  const authUrl = `https://github.com/login/oauth/authorize?` +
    `client_id=${process.env.GITHUB_CLIENT_ID}&` +
    `redirect_uri=${encodeURIComponent(`${process.env.BASE_URL}/api/auth/github/callback`)}&` +
    `scope=user:email`

  return NextResponse.redirect(authUrl)
}
