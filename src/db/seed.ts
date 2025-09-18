// Remove the dotenv import
// import { config } from 'dotenv'

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { hashPassword } from '../lib/auth'
import * as schema from '../lib/db/schema'

// Next.js automatically loads .env files, so no need to call config()
// config()

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required')
}

const client = postgres(process.env.DATABASE_URL)
const db = drizzle(client, { schema })

async function seed() {
  try {
    console.log('🌱 Seeding database...')
    
    // Example: Create a test user
    const hashedPassword = await hashPassword('password123')
    
    await db.insert(schema.users).values({
      email: 'test@example.com',
      name: 'Test User',
      emailVerified: true,
    })
    
    console.log('✅ Database seeded successfully!')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  } finally {
    await client.end()
  }
}

// Run the seed function
if (require.main === module) {
  seed().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

export { seed }
