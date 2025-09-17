import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]){ return twMerge(clsx(inputs)) }
export function formatPrice(price: number | string, options: { currency?: 'USD'|'EUR'|'GBP'|'BDT', notation?: Intl.NumberFormatOptions['notation'] } = {}){ const { currency='USD', notation='compact' } = options; const n = typeof price==='string'? parseFloat(price): price; return new Intl.NumberFormat('en-US', { style:'currency', currency, notation, maximumFractionDigits:2 }).format(n) }
export function formatDate(date: Date | string | number){ return new Intl.DateTimeFormat('en-US', { month:'long', day:'numeric', year:'numeric' }).format(new Date(date)) }
export function slugify(str: string){ return str.toLowerCase().replace(/[^a-z0-9 -]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-').trim() }
export function absoluteUrl(path: string){ return `${process.env.BASE_URL || 'http://localhost:3000'}${path}` }
