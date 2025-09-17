import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toast'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = { title:{ default:'Next.js SaaS Starter - Modernized', template:'%s | Next.js SaaS Starter' }, description:'Modern SaaS starter with enhanced UI' }
export default function RootLayout({ children }:{ children: React.ReactNode }){ return (<html lang='en' suppressHydrationWarning><head /><body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}><ThemeProvider attribute='class' defaultTheme='light' enableSystem><div className='relative flex min-h-screen flex-col'><div className='flex-1'>{children}</div></div><Toaster /></ThemeProvider></body></html>) }
