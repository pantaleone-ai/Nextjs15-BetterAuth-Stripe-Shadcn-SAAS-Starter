import 'server-only'
import Stripe from 'stripe'
import { db } from '@/db/client'
import { prices, subscriptions } from '@/db/schema'
import { eq } from 'drizzle-orm'
if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY is required')
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-12-18.acacia', typescript: true })
export async function createCustomer(email: string, name?: string){ return stripe.customers.create({ email, name }) }
export async function createCheckoutSession(customerId: string, priceId: string, successUrl: string, cancelUrl: string){ return stripe.checkout.sessions.create({ customer: customerId, line_items:[{ price: priceId, quantity:1 }], mode:'subscription', success_url: successUrl, cancel_url: cancelUrl, billing_address_collection:'required' }) }
export async function createPortalSession(customerId: string, returnUrl: string){ return stripe.billingPortal.sessions.create({ customer: customerId, return_url: returnUrl }) }
export async function getPrices(){ try{ const rows = await db.query.prices.findMany({ where: eq(prices.active, true), with:{ product: true }, orderBy: (p,{asc})=>[asc(p.unitAmount)] }); return rows } catch { return [] } }
export async function getSubscription(userId: string){ try{ const row = await db.query.subscriptions.findFirst({ where: eq(subscriptions.userId, userId), with:{ price: { with: { product: true } } } }); return row } catch { return null } }
