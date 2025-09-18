import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from './src/lib/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const publicRoutes = ['/', '/pricing', '/legal', '/blog', '/sign-in', '/sign-up', '/api/stripe/webhook', '/robots.txt', '/sitemap.xml', '/og']
  const isPublic = publicRoutes.some(r => pathname === r || pathname.startsWith('/blog/') || pathname.startsWith('/_next') || pathname.startsWith('/api/'))
  if (isPublic) return NextResponse.next()
  const session = await verifySession()
  if (!session) return NextResponse.redirect(new URL('/sign-in', request.url))
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  runtime: 'nodejs' // Force Node.js runtime
}