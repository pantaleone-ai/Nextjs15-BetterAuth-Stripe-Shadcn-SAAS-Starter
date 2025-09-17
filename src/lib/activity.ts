import 'server-only'
import { db } from '@/db/client'
import { activityEvents } from '@/db/schema'
import { headers } from 'next/headers'

export async function logActivity({
  action,
  userId,
  teamId,
  entity,
  entityId,
  metadata
}: {
  action: string
  userId?: string
  teamId?: string
  entity?: string
  entityId?: string
  metadata?: Record<string, unknown>
}) {
  try {
    const h = await headers()
    const ipAddress = h.get('x-forwarded-for') || h.get('x-real-ip') || null
    const userAgent = h.get('user-agent') || null
    await db.insert(activityEvents).values({
      action,
      userId: userId || null,
      teamId: teamId || null,
      entity: entity || null,
      entityId: entityId || null,
      metadata: metadata || null,
      ipAddress,
      userAgent
    } as any)
  } catch {
    // Log errors silently
  }
}
