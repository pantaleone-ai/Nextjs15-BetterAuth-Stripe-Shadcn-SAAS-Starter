import { auth } from '@/lib/auth/config'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return await auth.handler(request)
}

export async function POST(request: NextRequest) {
  return await auth.handler(request)
}
