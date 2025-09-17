import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { hashPassword } from '../lib/auth'
import { users, teams, teamMembers, products, prices } from './schema'
config({ path: '.env' })
if (!process.env.POSTGRES_URL) throw new Error('POSTGRES_URL environment variable is required')
const client = postgres(process.env.POSTGRES_URL, { prepare: false })
const db = drizzle(client)
async function main(){ try{ console.log('🌱 Seeding database...')
  const passwordHash = await hashPassword('admin123')
  const [user] = await db.insert(users).values({ email: 'test@test.com', passwordHash, name: 'Test User', emailVerified: true }).returning()
  const [team] = await db.insert(teams).values({ name: 'Test Team', slug: 'test-team' }).returning()
  await db.insert(teamMembers).values({ userId: user.id, teamId: team.id, role: 'owner' })
  const [basicProduct] = await db.insert(products).values({ id: 'prod_basic', name: 'Basic Plan', description: 'Perfect for individuals', active: true }).returning()
  const [proProduct] = await db.insert(products).values({ id: 'prod_pro', name: 'Pro Plan', description: 'For growing teams', active: true }).returning()
  await db.insert(prices).values([
    { id: 'price_basic_monthly', productId: basicProduct.id, active: true, currency: 'usd', type: 'recurring', unitAmount: 999, interval: 'month', intervalCount: 1 },
    { id: 'price_basic_yearly', productId: basicProduct.id, active: true, currency: 'usd', type: 'recurring', unitAmount: 9999, interval: 'year', intervalCount: 1 },
    { id: 'price_pro_monthly', productId: proProduct.id, active: true, currency: 'usd', type: 'recurring', unitAmount: 2999, interval: 'month', intervalCount: 1 },
    { id: 'price_pro_yearly', productId: proProduct.id, active: true, currency: 'usd', type: 'recurring', unitAmount: 29999, interval: 'year', intervalCount: 1 },
  ])
  console.log('🎉 Seeded. Login test@test.com / admin123')
} finally { await client.end() } }
main()
