import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'

// Optimize Inter font loading for better performance
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
import "@theme/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AnnouncementBanner } from "@/components/ui/announcement-banner";
import { Toaster } from "@/components/ui/toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import dynamic from 'next/dynamic';

const DynamicChatEntryPoint = dynamic(() => import('@/components/chat-entrypoint').then(mod => ({ default: mod.ChatEntryPoint })));
export const metadata: Metadata = {
  title: {
    default: "AI SaaS Starter Kit | Next.js AI App Templates & Boilerplates",
    template: "%s | AI SaaS Starter Kit",
  },
  description: "Production-ready AI SaaS starter kits built on Next.js. Includes auth, subscriptions, payments, and chat/RAG templates—developer-first and production-ready.",
  keywords: [
    'AI SaaS starter kit',
    'Next.js AI starter kit',
    'Next.js SaaS starter',
    'AI app template',
    'AI SaaS boilerplate',
    'Next.js SaaS boilerplate',
    'AI starter kit for startups',
    'AI wrapper starter/template',
    'Best AI starter kits',
    'AI app templates (Vercel)',
    'Next.js SaaS starter templates',
    'AI boilerplates for startups'
  ],
  authors: [{ name: 'Pantaleone.net' }],
  creator: 'Pantaleone.net',
  publisher: 'Pantaleone.net',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Pantaleone AI SaaS Starter',
    images: [
      {
        url: 'https://pantaleone-ai-saas-starter.vercel.app/og-image.jpg', // TODO: replace
        width: 1200,
        height: 630,
        alt: 'AI SaaS Starter Kit Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://pantaleone-ai-saas-starter.vercel.app/og-image.jpg'], // TODO
    creator: '@pantaleone_ai',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AnnouncementBanner
            message="🚀 Welcome to our new site! Check out the latest features."
            href="/features"
          />
          {children}
          <Toaster />
          <DynamicChatEntryPoint />
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
