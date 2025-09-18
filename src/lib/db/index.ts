import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required')
}

// Create postgres client
const client = postgres(process.env.DATABASE_URL, {
  prepare: false,
})

// Create drizzle instance
export const db = drizzle(client, { schema })

// Export schema for use in other files
export * from './schema'