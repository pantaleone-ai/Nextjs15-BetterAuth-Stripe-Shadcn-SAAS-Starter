# Pantaleone AI SaaS Starter

A comprehensive SaaS starter template built with Next.js 15, designed to accelerate the development of AI-powered SaaS applications with modern best practices and scalable architecture.

![Logo](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.4-blue?style=for-the-badge&logo=postgresql)
![Stripe](https://img.shields.io/badge/Stripe-Fully%20Integrated-6772E5?style=for-the-badge&logo=stripe)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-412991?style=for-the-badge&logo=openai)
![Google Analytics](https://img.shields.io/badge/Google%20Analytics-4-E37400?style=for-the-badge&logo=google-analytics)

# SaaS Starter (Next.js 15 + BetterAuth + Stripe + shadcn/ui)

A Lean Starter Template for building a SaaS with authentication, payments, and AI.

---

## ✅ Quick Setup

```bash
git clone <your-repo-url>
cd <repo-folder>
pnpm install
cp .env.example .env.local
Fill in .env.local with your credentials:

DATABASE_URL

NEXTAUTH_SECRET

BETTER_AUTH_URL

OAuth: AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, etc.

OPENAI_API_KEY

Stripe: STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET

Optional: NEXT_PUBLIC_APP_URL, NEXT_PUBLIC_GA_MEASUREMENT_ID, SMTP settings, THEME, etc.

Then:

bash
Copy code
pnpm db:generate
pnpm db:migrate
pnpm seed   # optional
pnpm dev
App runs at http://localhost:3000.
```
## 🛠 Customization Cheatsheet
Feature	What to Edit	Path(s)
Brand & Theme	Copy themes/base → themes/your-brand, adjust CSS, update THEME env	themes/…, next.config.ts
Auth / OAuth Providers	Add provider in config & add env vars	src/lib/auth/config.ts
Database / Models	Add tables in schema, relations, then regenerate & migrate	src/db/schema.ts
Stripe / Payments	Create products in Stripe, sync or customize logic, webhook handlers	src/lib/stripe/, src/app/api/stripe/webhook/route.ts
AI / Chat	Edit model, system prompts, user context logic	src/app/api/chat/route.ts, chat UI files
SEO / Metadata / Analytics	Update metadata in layout & analytics logic	src/app/layout.tsx, src/lib/analytics.ts
Pages / Content	Add blog posts (MDX) or custom pages under src/app/	src/content/blog/, src/app/(marketing)/…

## ✅ Deployment Notes
Copy all .env.local variables into your production/hosting environment.

Ensure OAuth redirect URLs & Stripe webhook URLs reflect your production domain.

Run database migrations before starting.

For Vercel, you can use their dashboard or one-click deploy; ensure environment variables and functions are configured correctly.

## ⚠️ Troubleshooting Tips
OAuth redirect errors → ensure callback URLs match domain & env settings

Database connection issues → check DATABASE_URL, ensure DB is running

Stripe webhook failures → verify webhook secret & event handling

Chat / AI not working → check OPENAI_API_KEY is valid

## 🧩 Commands & Scripts
pnpm dev — start development

pnpm build && pnpm start — build & run

pnpm lint / pnpm check-types — linting / type checking

pnpm analyze — bundle analysis

pnpm db:studio — DB exploration tool
