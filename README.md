# Next.js SaaS Starter – Modern, Type-Safe, Production-Ready, Built by Pantaleone-ai

A production-grade SaaS starter built with Next.js 15, Tailwind CSS (shadcn/ui), Drizzle ORM (PostgreSQL), Stripe subscriptions, Google Analytics (via @next/third-parties), and a persistent, responsive app sidebar. Includes authentication with email/password and social logins (Google, GitHub), MDX, and polished UI components.

Use this template to launch your next SaaS faster with best practices, clean architecture, and sensible defaults.

## Table of Contents

- Features
- Tech Stack
- Screenshots
- Project Structure
- Getting Started
- Environment Variables
- Database and Migrations
- Authentication (Email, Google, GitHub)
- Payments (Stripe)
- UI and Theming (shadcn/ui + Tailwind)
- Sidebar (Persistent App Layout)
- Content (MDX)
- Analytics (Google Analytics 4)
- SEO (Sitemap/Robots)
- Development Scripts
- Customization Guide
- Troubleshooting
- Contributing
- License


## Features

- Next.js 15 App Router, Server Components, Turbopack dev
- TypeScript everywhere with strict types
- Tailwind CSS v3 + shadcn/ui components
- Persistent responsive sidebar (shadcn/ui sidebar-07)
- Authentication: email/password + social (Google, GitHub)
- Stripe subscriptions, billing portal, webhooks
- PostgreSQL with Drizzle ORM and migrations
- MDX support with custom component mapping
- Google Analytics 4 via @next/third-parties
- Dark mode (class-based) with next-themes
- SEO: next-sitemap for sitemap and robots.txt
- Linting and best-practice configs (ESLint)
- Clean, scalable folder structure


## Tech Stack

- Framework: Next.js 15 (App Router, RSC)
- Language: TypeScript
- Styling: Tailwind CSS v3, shadcn/ui
- State/UX: Radix Primitives, class-variance-authority, tailwindcss-animate
- Database: PostgreSQL (Supabase-compatible), Drizzle ORM, drizzle-kit
- Auth: Email/password + OAuth (Google, GitHub)
- Payments: Stripe (subscriptions, portal, webhooks)
- Content: MDX with custom components
- Analytics: Google Analytics 4 (@next/third-parties)
- Build tools: Turbopack (dev), PostCSS, Autoprefixer, pnpm


## Screenshots

- Marketing homepage (hero + features)
- Auth pages (login-03 split layout)
- Dashboard with persistent sidebar
- Settings/profile forms

Add screenshots to public/screenshots and reference them here.

## Project Structure

```
src/
  app/
    (app)/
      layout.tsx         # App layout WITH persistent sidebar
      dashboard/page.tsx
      settings/page.tsx
      profile/page.tsx
    (marketing)/
      layout.tsx         # Optional marketing layout (no sidebar)
    layout.tsx           # Root layout (providers, fonts, Toaster)
    page.tsx             # Homepage (no sidebar)
  components/
    app-sidebar.tsx
    nav-main.tsx
    nav-projects.tsx
    nav-user.tsx
    team-switcher.tsx
    ui/
      sidebar.tsx
      button.tsx
      input.tsx
      dropdown-menu.tsx
      tooltip.tsx
      sheet.tsx
      separator.tsx
      avatar.tsx
      ...shadcn components
  hooks/
    use-mobile.ts
  lib/
    utils.ts
    stripe/config.ts
    db/
      schema.ts
      index.ts
  styles/
    globals.css
mdx-components.tsx
```


## Getting Started

Prerequisites

- Node 18+ (Node 20 recommended)
- pnpm 9+
- PostgreSQL database (local or Supabase)

Install

- pnpm install

Environment

- Copy .env.example to .env.local and fill in your values

Database

- pnpm db:push

Seed (optional)

- pnpm db:seed

Run Dev

- pnpm dev

Build

- pnpm build
- pnpm start

Generate Sitemap (optional)

- pnpm sitemap


## Environment Variables

Core

- NEXT_PUBLIC_WEBSITE_URL=https://your-domain.com
- DATABASE_URL=postgresql://user:pass@host:5432/dbname

Auth (Google + GitHub)

- NEXT_PUBLIC_GOOGLE_CLIENT_ID=...
- GOOGLE_CLIENT_SECRET=...
- NEXT_PUBLIC_GITHUB_CLIENT_ID=...
- GITHUB_CLIENT_SECRET=...

Stripe

- STRIPE_SECRET_KEY=sk_live_or_test_...
- STRIPE_PUBLISHABLE_KEY=pk_live_or_test_...
- STRIPE_WEBHOOK_SECRET=whsec_...
- STRIPE_PRICING_TABLE_ID=prt_... (optional if using pricing table)

Analytics

- NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

Sitemap (optional)

- NEXT_PUBLIC_WEBSITE_URL is used by next-sitemap


## Database and Migrations

Drizzle ORM + drizzle-kit handle schema and migrations.

Scripts

- pnpm db:generate     \# Generate SQL from schema changes
- pnpm db:push         \# Push schema to DB (use in development)
- pnpm db:migrate      \# Apply migrations (use in CI/prod)
- pnpm db:studio       \# Visualize DB

Schema

- Edit src/lib/db/schema.ts to add tables, enums, relations.

DB Client

- src/lib/db/index.ts exports the drizzle instance for use in routes/actions.


## Authentication

Features

- Email/password authentication
- OAuth: Google and GitHub
- Secure sessions (HttpOnly cookies), password hashing, email verification support
- Sign-in and sign-up pages using shadcn/login-03 pattern
- Social buttons on both sign-in and sign-up

Pages

- /sign-in
- /sign-up

OAuth Redirect URIs (configure in provider dashboards)

- https://your-domain.com/api/auth/google/callback
- https://your-domain.com/api/auth/github/callback
In development, replace domain with http://localhost:3000.

Customization

- Update social providers in your auth config
- Adjust UI in the sign-in/sign-up page components


## Payments (Stripe)

Included

- Server-side Stripe SDK configured in src/lib/stripe/config.ts
- API version pinned to your installed stripe package
- Subscription checkout and customer billing portal
- Webhook handler to react to subscription lifecycle events
- Pricing table support (optional)

Setup

- Add Stripe keys to .env.local
- Configure your products/prices in Stripe
- Set STRIPE_PRICING_TABLE_ID if using Stripe’s hosted tables
- Set webhook endpoint to /api/stripe/webhook in your Stripe dashboard and use STRIPE_WEBHOOK_SECRET


## UI and Theming

Tailwind CSS v3

- Preconfigured with base, components, utilities layers
- class-variance-authority for variants
- tailwindcss-animate for transitions

shadcn/ui

- Ready-to-use component set
- Consistent styling via Tailwind tokens
- Components placed under src/components/ui

Theme

- Design tokens defined in src/styles/globals.css using HSL variables
- Modern blue theme aligned with shadcn/ui defaults
- Dark mode via class strategy, controlled by next-themes

Global Styles

- Utilities for gradient backgrounds, glass cards, prose content


## Sidebar (Persistent App Layout)

- Implemented using shadcn/ui block “sidebar-07”
- Responsive: collapses to icons on desktop, Sheet on mobile
- Toggle via trigger button and keyboard shortcut (Ctrl/Cmd + B)
- Lives in src/components/app-sidebar.tsx and src/components/ui/sidebar.tsx

Route Groups Pattern

- App pages with sidebar live under src/app/(app)/
- Marketing pages without sidebar live under src/app/ or src/app/(marketing)/

To customize

- Edit menu items in app-sidebar.tsx, nav-main.tsx, nav-projects.tsx, nav-user.tsx
- Update icons and routes to match your app
- Tune sidebar CSS variables in globals.css


## Content (MDX)

- MDX enabled with custom component mapping in mdx-components.tsx
- Local MDXComponents type defined to avoid external type package issues
- Styled headings, paragraphs, lists, code, tables, and more

Use

- Put MDX content in content/ or app routes; import as needed


## Analytics (GA4)

- Integrated via @next/third-parties
- No manual script tags required
- Automatic client-side route tracking

Setup

- Install: pnpm add @next/third-parties
- Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local
- In src/app/layout.tsx, render:
    - <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />

Custom Events

- Optional helper in src/lib/ga.ts to call window.gtag('event', ...)


## SEO (Sitemap and Robots)

- next-sitemap configured to generate sitemap.xml and robots.txt
- Run manually after build, or in CI step after next build

Scripts

- pnpm sitemap

CI/Deploy

- Build command example: pnpm build \&\& pnpm sitemap


## Development Scripts

Common scripts (adjusted to your package.json)

- dev: next dev --turbopack
- build: next build
- start: next start
- lint: next lint
- type-check: tsc --noEmit
- db:generate, db:push, db:migrate, db:studio: drizzle-kit scripts
- sitemap: next-sitemap
- seed: tsx src/db/seed.ts (if seed file present)


## Customization Guide

Branding

- Update app name, logo, and metadata in src/app/layout.tsx
- Replace placeholder images in public/

Colors and Theme

- Edit HSL tokens in src/styles/globals.css (light/dark palettes)
- Tailwind config in tailwind.config.ts for radii, fonts, animations

Sidebar and Navigation

- Edit src/components/app-sidebar.tsx and nav-* components
- Add or remove groups, icons, links, and tooltips

Auth Pages

- Tweak copy, fields, and validation in /sign-in and /sign-up pages
- Add terms, privacy links, and marketing content as needed

MDX

- Extend mdx-components.tsx to style more elements
- Add custom components like alerts, callouts, code blocks

Stripe

- Replace placeholder pricing with your products/prices
- Wire your product gating in dashboard routes


## Troubleshooting

pnpm lockfile out of date

- pnpm install --fix-lockfile
- Or delete pnpm-lock.yaml and run pnpm install

MDX type import errors

- Use local type definition in mdx-components.tsx instead of external types

Stripe API version mismatch

- Align apiVersion in src/lib/stripe/config.ts with the installed stripe package
- Or omit apiVersion to use package default

dotenv not found

- Next.js loads .env automatically; remove dotenv import/calls from scripts

next-sitemap build-manifest error

- Run next build first, then next-sitemap
- Use separate script: pnpm build \&\& pnpm sitemap

Sidebar import paths

- Ensure imports use @/hooks/use-mobile and @/lib/utils (not under components)


## Contributing

Issues and PRs are welcome. Please:

- Stick to TypeScript and strict types
- Follow the existing code style and ESLint rules
- Keep components colocated and cohesive


## License

This project is licensed under the MIT License.

## Keywords (SEO)

Next.js SaaS Starter, Next.js 15, shadcn/ui, Tailwind CSS, Drizzle ORM, PostgreSQL, Stripe Subscriptions, Google Analytics 4, MDX, TypeScript, Dark Mode, App Router, Turbopack, Sidebar Layout, Authentication, Google OAuth, GitHub OAuth, SaaS Boilerplate, Modern UI Components, Production Ready Template

Use this starter to accelerate your development, keep your stack modern, and ship with confidence.

