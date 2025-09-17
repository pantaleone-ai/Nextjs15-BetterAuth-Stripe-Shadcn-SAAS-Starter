import { config } from 'dotenv'
import postgres from 'postgres'

config({ path: '.env' })
if (!process.env.POSTGRES_URL) throw new Error('POSTGRES_URL environment variable is required')
const client = postgres(process.env.POSTGRES_URL, { prepare: false })
async function main() {
  try {
    console.log('🔄 Setting up database...')
    console.log('✅ Database setup complete!')
    console.log('📝 Run "pnpm db:migrate" then "pnpm db:seed"')
  } finally {
    await client.end()
  }
}
main()
