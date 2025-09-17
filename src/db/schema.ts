import { boolean, timestamp, pgTable, text, integer, pgEnum, uuid, jsonb } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { z } from 'zod'

export const roleEnum = pgEnum('role', ['owner','member'])
export const subscriptionStatusEnum = pgEnum('subscription_status', ['incomplete','incomplete_expired','trialing','active','past_due','canceled','unpaid','paused'])

export const users = pgTable('users', { id: uuid('id').primaryKey().defaultRandom(), email: text('email').unique().notNull(), passwordHash: text('password_hash').notNull(), name: text('name'), createdAt: timestamp('created_at').defaultNow().notNull(), updatedAt: timestamp('updated_at').defaultNow().notNull(), emailVerified: boolean('email_verified').default(false), stripeCustomerId: text('stripe_customer_id') })
export const teams = pgTable('teams', { id: uuid('id').primaryKey().defaultRandom(), name: text('name').notNull(), slug: text('slug').unique().notNull(), createdAt: timestamp('created_at').defaultNow().notNull(), updatedAt: timestamp('updated_at').defaultNow().notNull() })
export const teamMembers = pgTable('team_members', { id: uuid('id').primaryKey().defaultRandom(), userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(), teamId: uuid('team_id').references(() => teams.id, { onDelete: 'cascade' }).notNull(), role: roleEnum('role').default('member').notNull(), createdAt: timestamp('created_at').defaultNow().notNull() })
export const products = pgTable('products', { id: text('id').primaryKey(), name: text('name').notNull(), description: text('description'), active: boolean('active').default(true).notNull(), metadata: jsonb('metadata'), createdAt: timestamp('created_at').defaultNow().notNull(), updatedAt: timestamp('updated_at').defaultNow().notNull() })
export const prices = pgTable('prices', { id: text('id').primaryKey(), productId: text('product_id').references(() => products.id).notNull(), active: boolean('active').default(true).notNull(), currency: text('currency').notNull(), type: text('type').notNull(), unitAmount: integer('unit_amount'), interval: text('interval'), intervalCount: integer('interval_count').default(1), metadata: jsonb('metadata'), createdAt: timestamp('created_at').defaultNow().notNull(), updatedAt: timestamp('updated_at').defaultNow().notNull() })
export const subscriptions = pgTable('subscriptions', { id: text('id').primaryKey(), userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(), status: subscriptionStatusEnum('status').notNull(), metadata: jsonb('metadata'), priceId: text('price_id').references(() => prices.id), quantity: integer('quantity').default(1), cancelAtPeriodEnd: boolean('cancel_at_period_end').default(false), created: timestamp('created').notNull(), currentPeriodStart: timestamp('current_period_start').notNull(), currentPeriodEnd: timestamp('current_period_end').notNull(), endedAt: timestamp('ended_at'), cancelAt: timestamp('cancel_at'), canceledAt: timestamp('canceled_at'), trialStart: timestamp('trial_start'), trialEnd: timestamp('trial_end') })
export const activityEvents = pgTable('activity_events', { id: uuid('id').primaryKey().defaultRandom(), userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }), teamId: uuid('team_id').references(() => teams.id, { onDelete: 'cascade' }), action: text('action').notNull(), entity: text('entity'), entityId: text('entity_id'), metadata: jsonb('metadata'), ipAddress: text('ip_address'), userAgent: text('user_agent'), createdAt: timestamp('created_at').defaultNow().notNull() })

export const usersRelations = relations(users, ({ many }) => ({ teamMembers: many(teamMembers), subscriptions: many(subscriptions), activityEvents: many(activityEvents) }))
export const teamsRelations = relations(teams, ({ many }) => ({ teamMembers: many(teamMembers), activityEvents: many(activityEvents) }))
export const teamMembersRelations = relations(teamMembers, ({ one }) => ({ user: one(users, { fields: [teamMembers.userId], references: [users.id] }), team: one(teams, { fields: [teamMembers.teamId], references: [teams.id] }) }))
export const productsRelations = relations(products, ({ many }) => ({ prices: many(prices) }))
export const pricesRelations = relations(prices, ({ one, many }) => ({ product: one(products, { fields: [prices.productId], references: [products.id] }), subscriptions: many(subscriptions) }))
export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({ user: one(users, { fields: [subscriptions.userId], references: [users.id] }), price: one(prices, { fields: [subscriptions.priceId], references: [prices.id] }) }))
export const activityEventsRelations = relations(activityEvents, ({ one }) => ({ user: one(users, { fields: [activityEvents.userId], references: [users.id] }), team: one(teams, { fields: [activityEvents.teamId], references: [teams.id] }) }))

export type User = typeof users.$inferSelect; export type Team = typeof teams.$inferSelect; export type TeamMember = typeof teamMembers.$inferSelect; export type Product = typeof products.$inferSelect; export type Price = typeof prices.$inferSelect; export type Subscription = typeof subscriptions.$inferSelect; export type ActivityEvent = typeof activityEvents.$inferSelect

export type InsertUser = typeof users.$inferInsert
export type InsertTeam = typeof teams.$inferInsert
export type InsertTeamMember = typeof teamMembers.$inferInsert
export type InsertProduct = typeof products.$inferInsert
export type InsertPrice = typeof prices.$inferInsert
export type InsertActivityEvent = typeof activityEvents.$inferInsert

export const signUpSchema = z.object({ email: z.string().email(), password: z.string().min(8), name: z.string().min(1) })
export const signInSchema = z.object({ email: z.string().email(), password: z.string().min(1) })
export const createTeamSchema = z.object({ name: z.string().min(1).max(50), slug: z.string().min(1).max(50).regex(/^[a-z0-9-]+$/) })
export const updateTeamSchema = z.object({ name: z.string().min(1).max(50) })
export const inviteUserSchema = z.object({ email: z.string().email(), role: z.enum(['owner','member']) })
