import Link from "next/link";
import { Metadata } from 'next';
import {
  ArrowRight,
  Shield,
  Zap,
  Database,
  Paintbrush,    // Instead of Palette
  Sparkles,      // Instead of Rocket
  Code2          // Instead of Code
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI SaaS Starter Kit: Next.js AI App Templates & Boilerplates for Startups',
  description: 'Launch an AI SaaS starter kit built on Next.js to ship auth, subscriptions, and chat/RAG templates fast—production‑ready and developer‑first. Best AI starter kits 2025.',
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
    url: 'https://pantaleone-ai-saas-starter.vercel.app/',
    title: 'AI SaaS Starter Kit: Next.js AI App Templates & Boilerplates for Startups',
    description: 'Launch an AI SaaS starter kit built on Next.js to ship auth, subscriptions, and chat/RAG templates fast—production‑ready and developer‑first. Best AI starter kits 2025.',
    siteName: 'Pantaleone AI SaaS Starter',
    images: [
      {
        url: 'https://pantaleone-ai-saas-starter.vercel.app/og-image.jpg', // TODO: replace with actual image
        width: 1200,
        height: 630,
        alt: 'AI SaaS Starter Kit Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SaaS Starter Kit: Next.js AI App Templates & Boilerplates for Startups',
    description: 'Launch an AI SaaS starter kit built on Next.js to ship auth, subscriptions, and chat/RAG templates fast—production‑ready and developer‑first.',
    images: ['https://pantaleone-ai-saas-starter.vercel.app/og-image.jpg'], // TODO: replace
    creator: '@pantaleone_ai',
  },
  alternates: {
    canonical: 'https://pantaleone-ai-saas-starter.vercel.app/',
  },
};

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MotionWrapper,
  StaggerContainer,
} from "@/components/ui/motion-wrapper";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function HomePage() {
  const currentYear = new Date().getFullYear();

    return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 glass border-b">
          <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Link className="flex items-center space-x-2" href="/">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl gradient-text">
                  SaaS Starter
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="text-muted-foreground hover:text-foreground"
                href="/sign-in"
              >
                Sign In
              </Link>
              <ThemeToggle />
            </nav>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </header>
       <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
  <div className="container relative mx-auto px-4 md:px-6">
    <StaggerContainer className="flex flex-col items-center space-y-4 text-center">
      <MotionWrapper variant="fadeInUp" delay={0.2}>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Modern SaaS{" "}
            <span className="block text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Starter Template
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Production-ready Next.js 15 template with authentication, payments, 
            database, UI components, and everything you need to launch fast.
          </p>
        </div>
      </MotionWrapper>
      <MotionWrapper variant="fadeInUp" delay={0.3}>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="group" asChild>
            <Link href="/sign-up">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/dashboard">
              View Demo
            </Link>
          </Button>
        </div>
      </MotionWrapper>
    </StaggerContainer>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
        Everything You Need to Launch
      </h2>
      <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
        Built with the latest technologies and best practices. Skip months of setup 
        and focus on building your unique features.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
      <Card variant="glass" className="text-center">
        <CardHeader>
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <CardTitle>Authentication & Security</CardTitle>
          <CardDescription>
            Complete auth system with social login and security best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            Better Auth integration with Google & GitHub OAuth, email/password, 
            secure sessions, and password reset functionality.
          </p>
          <div className="text-xs text-muted-foreground/80">
            ✓ Social login (Google, GitHub) • ✓ Email verification • ✓ Secure sessions
          </div>
        </CardContent>
      </Card>
      
      <Card variant="glass" className="text-center">
        <CardHeader>
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <CardTitle>Payments & Billing</CardTitle>
          <CardDescription>
            Stripe integration with subscriptions and customer portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            Complete Stripe setup with pricing tables, checkout sessions, 
            subscription management, and webhook handling.
          </p>
          <div className="text-xs text-muted-foreground/80">
            ✓ Subscription billing • ✓ Customer portal • ✓ Webhook integration
          </div>
        </CardContent>
      </Card>
      
      <Card variant="glass" className="text-center">
        <CardHeader>
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Database className="w-6 h-6 text-white" />
          </div>
          <CardTitle>Database & Backend</CardTitle>
          <CardDescription>
            PostgreSQL with Drizzle ORM and type-safe queries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            Supabase PostgreSQL database with Drizzle ORM, migrations, 
            and full TypeScript support for type-safe development.
          </p>
          <div className="text-xs text-muted-foreground/80">
            ✓ PostgreSQL database • ✓ Drizzle ORM • ✓ Database migrations
          </div>
        </CardContent>
      </Card>
      
      <Card variant="glass" className="text-center">
        <CardHeader>
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Paintbrush className="w-6 h-6 text-white" />
          </div>
          <CardTitle>Modern UI Components</CardTitle>
          <CardDescription>
            shadcn/ui components with persistent sidebar and responsive design
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            Beautiful UI with shadcn/ui, Tailwind CSS, collapsible sidebar, 
            dark/light mode, and mobile-responsive design.
          </p>
          <div className="text-xs text-muted-foreground/80">
            ✓ shadcn/ui components • ✓ Persistent sidebar • ✓ Dark/light mode
          </div>
        </CardContent>
      </Card>
      
      <Card variant="glass" className="text-center">
        <CardHeader>
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <CardTitle>Next.js 15 & Performance</CardTitle>
          <CardDescription>
            Latest Next.js with Turbopack, Server Components, and optimizations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            Built on Next.js 15 with App Router, Server Components, Turbopack dev mode, 
            and Google Analytics 4 integration.
          </p>
          <div className="text-xs text-muted-foreground/80">
            ✓ Next.js 15 App Router • ✓ Turbopack dev • ✓ Google Analytics
          </div>
        </CardContent>
      </Card>
      
      <Card variant="glass" className="text-center">
        <CardHeader>
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <CardTitle>Developer Experience</CardTitle>
          <CardDescription>
            TypeScript, ESLint, and development tools for productivity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            Full TypeScript setup with ESLint, type safety, MDX support, 
            and automated sitemap generation for SEO.
          </p>
          <div className="text-xs text-muted-foreground/80">
            ✓ Full TypeScript • ✓ ESLint config • ✓ MDX support • ✓ SEO ready
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
        Quick Customization Guide
      </h2>
      <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
        Get started in minutes with our simple setup process
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
          1
        </div>
        <h3 className="font-semibold">Clone & Install</h3>
        <p className="text-sm text-muted-foreground">
          Clone the repo and run <code className="bg-muted px-1 rounded">pnpm install</code>
        </p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
          2
        </div>
        <h3 className="font-semibold">Environment Setup</h3>
        <p className="text-sm text-muted-foreground">
          Copy <code className="bg-muted px-1 rounded">.env.example</code> and add your API keys
        </p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
          3
        </div>
        <h3 className="font-semibold">Database Setup</h3>
        <p className="text-sm text-muted-foreground">
          Run <code className="bg-muted px-1 rounded">pnpm db:push</code> to setup your database
        </p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
          4
        </div>
        <h3 className="font-semibold">Start Building</h3>
        <p className="text-sm text-muted-foreground">
          Run <code className="bg-muted px-1 rounded">pnpm dev</code> and start customizing!
        </p>
      </div>
    </div>
  </div>
</section>

        <footer className="border-t bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} <Link href="https://pantaleone.net" target="blank">Pantaleone.net</Link> All rights reserved.</p>
              <nav className="flex gap-6">
                <Link className="hover:text-foreground" href="/legal">
                  Terms
                </Link>
                <Link className="hover:text-foreground" href="/legal">
                  Privacy
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </SidebarProvider>
  );
}
