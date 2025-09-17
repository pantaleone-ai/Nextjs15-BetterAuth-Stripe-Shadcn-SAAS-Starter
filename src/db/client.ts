import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
if (!process.env.POSTGRES_URL) throw new Error('POSTGRES_URL environment variable is required')
const client = postgres(process.env.POSTGRES_URL, { prepare: false })
export const db = drizzle(client, { schema })
