# Pantaleone AI SaaS Starter

A comprehensive SaaS starter template built with Next.js 15, designed to accelerate the development of AI-powered SaaS applications with modern best practices and scalable architecture.

![Logo](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.4-blue?style=for-the-badge&logo=postgresql)
![Stripe](https://img.shields.io/badge/Stripe-Fully%20Integrated-6772E5?style=for-the-badge&logo=stripe)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-412991?style=for-the-badge&logo=openai)
![Google Analytics](https://img.shields.io/badge/Google%20Analytics-4-E37400?style=for-the-badge&logo=google-analytics)

## ✨ Features Overview

This starter provides a complete foundation for building AI-powered SaaS applications:

### 🎨 Frontend & UI
- **Next.js 15** with App Router and Server Components
- **TypeScript** with strict type checking
- **Tailwind CSS** with shadcn/ui component library
- **Dark/Light Mode** with next-themes
- **Responsive Design** with mobile-first approach
- **Theme System** with runtime theme switching

### 🔐 Authentication & Security
- **Better Auth** for multi-provider authentication
- **Email/Password** authentication with verification
- **OAuth Integration** (Google, GitHub, Twitter)
- **Session Management** with secure cookies
- **Role-based Access Control** (Owner/Member)

### 💳 Payments & Subscriptions
- **Stripe Integration** with full subscription management
- **Pricing Pages** with dynamic pricing tables
- **Webhook Handling** for payment events
- **Billing Portal** integration
- **Subscription Status** tracking

### 🤖 AI & Chat
- **GPT-4 Integration** via OpenAI API
- **Real-time Streaming** chat interface
- **AI SDK** for extensible AI functionality
- **Chat History** persistence (optional)

### 🗄️ Database & Backend
- **PostgreSQL** database with connection pooling
- **Drizzle ORM** with type-safe queries
- **Database Migrations** and seeding
- **Activity Logging** for audit trails
- **Team Management** with member invites

### 📝 Content Management
- **MDX Support** for rich content
- **Blog System** with automatic routing
- **SEO Optimization** with next-sitemap
- **LLM-friendly indexing** with llms.txt
- **Dynamic Metadata** generation

### 📊 Analytics & Performance
- **Google Analytics 4** integration
- **Vercel Analytics** and Speed Insights
- **Bundle Analysis** with @next/bundle-analyzer
- **Performance Monitoring** tools

### 🛠️ Development Tools
- **ESLint** with Next.js configuration
- **TypeScript** strict mode
- **Prettier** code formatting
- **Husky** pre-commit hooks (optional)
- **Database Studio** for data exploration

## 🚀 Quick Start Guide

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18 or later (Node 20 recommended)
- **pnpm** 9 or later
- **PostgreSQL** (local instance or Supabase)
- **Git** for version control

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/your-saas-template.git
cd your-saas-template

# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local
```

### 2. Environment Configuration

Configure your environment variables in `.env.local`:

#### Required Variables

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/your_db_name"

# Authentication Secrets
NEXTAUTH_SECRET="your-super-secret-key-32-chars-min"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers (choose what you need)
AUTH_GITHUB_ID="your_github_client_id"
AUTH_GITHUB_SECRET="your_github_client_secret"
AUTH_GOOGLE_ID="your_google_client_id"
AUTH_GOOGLE_SECRET="your_google_client_secret"

# AI Configuration
OPENAI_API_KEY="sk-your-openai-api-key"

# Stripe Configuration (for payments)
STRIPE_SECRET_KEY="sk_test_your_stripe_secret"
STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"
```

#### Optional Variables

```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID="GA4-MEASUREMENT-ID"

# Application URLs
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Email Configuration (for notifications)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Development
NODE_ENV="development"
THEME="base"
```

### 3. Database Setup

#### Option A: Local PostgreSQL

```bash
# Create database
createdb your_saas_db

# Generate schema
pnpm db:generate

# Run migrations
pnpm db:migrate

# (Optional) Seed with sample data
pnpm db:seed
```

#### Option B: Supabase Integration

```env
# Add to your .env.local
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

### 4. Authentication Setup

#### OAuth Provider Configuration

**GitHub OAuth:**
1. Go to [GitHub Settings > Developer Settings > OAuth Apps](https://github.com/settings/developers)
2. Create New OAuth App with:
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/github/callback`
3. Copy Client ID and Client Secret to your `.env.local`

**Google OAuth:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/api/auth/google/callback`

#### Email Verification Setup (Optional)

Configure SMTP settings for email verification:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-gmail-app-password"
```

### 5. AI Chat Configuration

The chat feature uses OpenAI's GPT-4 by default. To enable it:

1. Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Add to `.env.local`: `OPENAI_API_KEY="sk-your-key"`

### 6. Stripe Setup (Optional)

If you want subscription features:

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the dashboard
3. Set up webhook endpoints:
   - Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
   - Events: `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`
4. Add webhook secret to environment variables

### 7. Development Server

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Your application should now be running at `http://localhost:3000`!

## 🛠️ Customization Guide

This section details how to customize each major feature area.

### 🎨 Theming & Branding

The starter uses a theme system allowing runtime theme switching:

#### Current Theme Structure

```
themes/
└── base/
    ├── components/
    │   ├── ui/          # shadcn/ui component overrides
    │   └── layout/      # Layout components
    └── styles/
        └── globals.css  # Global styles and CSS variables
```

#### Creating a Custom Theme

1. **Create new theme directory:**
   ```bash
   mkdir -p themes/your-brand
   cp -r themes/base/* themes/your-brand/
   ```

2. **Update theme resolver in `next.config.ts`:**
   ```typescript
   const activeTheme = process.env.THEME || 'your-brand'
   ```

3. **Customize colors in your theme:**
   ```css
   /* themes/your-brand/styles/globals.css */
   :root {
     --primary: #your-primary-color;
     --secondary: #your-secondary-color;
   }
   ```

4. **Override components:**
   ```typescript
   // themes/your-brand/components/ui/button.tsx
   export const Button = ({ children, ...props }) => {
     // Your custom button implementation
   }
   ```

#### Font Customization

Update `next.config.ts` to include custom fonts:

```typescript
// next.config.ts
const nextConfig = {
  // ... existing config
  fonts: {
    google: [
      { name: 'Inter', weights: ['400', '500', '600', '700'] }
    ]
  }
}
```

### 🔐 Authentication Customization

#### Adding New OAuth Providers

The starter uses Better Auth for authentication. To add a new provider:

1. **Install provider package:**
   ```bash
   pnpm add @better-auth/google  # or other provider
   ```

2. **Update auth config (`src/lib/auth/config.ts`):**
   ```typescript
   export const auth = betterAuth({
     // ... existing config
     socialProviders: {
       // ... existing providers
       discord: {
         clientId: process.env.AUTH_DISCORD_ID!,
         clientSecret: process.env.AUTH_DISCORD_SECRET!,
       },
     },
   })
   ```

3. **Add environment variables:**
   ```env
   AUTH_DISCORD_ID="your_discord_client_id"
   AUTH_DISCORD_SECRET="your_discord_client_secret"
   ```

### 🗄️ Database Schema Customization

#### Adding Custom Data Models

1. **Update schema (`src/db/schema.ts`):**
   ```typescript
   export const yourCustomTable = pgTable('your_table', {
     id: uuid('id').primaryKey().defaultRandom(),
     userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
     name: text('name').notNull(),
     createdAt: timestamp('created_at').defaultNow(),
   })
   ```

2. **Add relations:**
   ```typescript
   export const yourCustomRelations = relations(yourCustomTable, ({ one }) => ({
     user: one(users, { fields: [yourCustomTable.userId], references: [users.id] }),
   }))
   ```

3. **Generate and run migration:**
   ```bash
   pnpm db:generate
   pnpm db:migrate
   ```

#### Database Indexing Strategy

For performance optimization, add indexes to frequently queried fields:

```typescript
export const yourTable = pgTable('your_table', {
  // ... existing fields
}, (table) => ({
  userIdIdx: index('user_id_idx').on(table.userId),
}))
```

### 💳 Stripe & Payments Integration

#### Custom Pricing Plans

1. **Create products in Stripe Dashboard:**
   - Go to Products section
   - Create products with prices

2. **Sync with database (optional):**
   ```typescript
   // src/lib/stripe/sync.ts
   export async function syncStripeProducts() {
     const products = await stripe.products.list()
     // Sync with your database
   }
   ```

#### Custom Webhook Handlers

Add custom logic for subscription events:

```typescript
// src/app/api/stripe/webhook/route.ts
export async function POST(req: Request) {
  const sig = headers().get('stripe-signature')!
  const body = await req.text()

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    return new Response('Webhook signature verification failed', { status: 400 })
  }

  switch (event.type) {
    case 'customer.subscription.created':
      // Handle subscription creation
      await handleSubscriptionCreated(event.data.object)
      break
    // ... other event types
  }

  return new Response('OK')
}
```

#### Billing Portal Customization

Customize the billing portal styling in your Stripe dashboard.

### 🤖 AI Chat Customization

#### Changing AI Models

Update the chat API to use different models:

```typescript
// src/app/api/chat/route.ts
import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  const { messages, model = 'gpt-4' } = await req.json()

  const result = await streamText({
    model: openai(model),  // Support multiple models
    messages,
    system: 'You are a helpful assistant...',  // Add system prompt
  })

  return result.toTextStreamResponse()
}
```

#### Adding Chat Context

Enhance chat responses with user context:

```typescript
export async function POST(req: Request) {
  const { messages, userId } = await req.json()

  // Fetch user context
  const user = await db.query.users.findFirst({
    where: eq(users.id, userId)
  })

  const result = await streamText({
    model: openai('gpt-4'),
    messages,
    system: `You are helping ${user?.name || 'a user'}...`,
  })
}
```

#### Chat UI Customization

Customize chat components in `src/components/chat-ui.tsx` and `themes/base/components/chat-ui.tsx`.

### 📝 Content Management

#### Adding Blog Posts

Create new blog posts in `src/content/blog/`:

```mdx
---
title: "Your Blog Post Title"
description: "Brief description of the post"
date: "2025-01-01"
author: "Your Name"
tags: ["tag1", "tag2"]
---

# Your Blog Post Title

Your content here...

## Section

More content...
```

#### Custom Pages

Add custom marketing pages in `src/app/(marketing)/`:

```typescript
// src/app/(marketing)/features/page.tsx
export default function FeaturesPage() {
  return (
    <div>
      <h1>Features</h1>
      {/* Your content */}
    </div>
  )
}
```

### 🔍 SEO & Analytics Customization

#### Meta Tags Configuration

Update metadata in layout files:

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Your SaaS Name',
    template: '%s | Your SaaS Name'
  },
  description: 'Your SaaS description',
  openGraph: {
    title: 'Your SaaS Name',
    description: 'Your SaaS description',
    url: 'https://yoursaas.com',
    siteName: 'Your SaaS Name',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your SaaS Name',
    description: 'Your SaaS description',
  },
}
```

#### Custom Analytics Events

Add tracking to key user actions:

```typescript
// src/lib/analytics.ts
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }

  // Vercel Analytics (if enabled)
  // Analytics.track(eventName, properties)
}
```

#### Sitemap Configuration

The template includes Next.js sitemap generation with customizable settings. Update `next-sitemap.config.js` to modify URLs, priorities, and change frequencies:

```typescript
// next-sitemap.config.js
const siteUrl = process.env.SITE_URL || 'https://your-saas-name.com'

module.exports = {
  siteUrl,
  changefreq: 'weekly', // default changefreq
  priority: 0.7,        // default priority
  sitemapSize: 5000,    // split sitemap into multiple files if needed
  generateRobotsTxt: true, // generate robots.txt
  // Exclude certain routes
  exclude: ['/private/*', '/admin/*'],
  // Add additional paths
  additionalPaths: async (config) => {
    const result = []
    // Add dynamic paths here
    return result
  }
}
```

#### LLM Indexing (llms.txt)

The project includes `public/llms.txt` for large language model indexing. This file provides structured information about your site for better AI crawler discoverability:

```txt
# your-saas-name.com llms.txt

- [Your SaaS Name](https://your-saas-name.com): Description of your main product
- [Features](https://your-saas-name.com/features): List of key features
- [Pricing](https://your-saas-name.com/pricing): Subscription plans and pricing
- [AI Chat](https://your-saas-name.com/chat): AI-powered chat functionality
- [Blog](https://your-saas-name.com/blog): Technical articles and updates
```

To customize llms.txt, edit `public/llms.txt` with your site's specific URLs and descriptions, keeping each line as a markdown-style link with a brief description of the page's purpose.

## 🚀 Deployment Guide

### Vercel Deployment (Recommended)

#### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/your-saas-template)

#### Manual Deployment

1. **Connect GitHub Repository to Vercel**
2. **Configure Environment Variables:**
   - Copy all variables from `.env.local` to Vercel dashboard
3. **Database Setup:**
   - Use Neon.tech, Supabase, or PlanetScale for hosted PostgreSQL
4. **Custom Domain (Optional):**
   - Configure in Vercel dashboard
5. **Deploy**

#### Vercel-Specific Configuration

```json
// vercel.json
{
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "crons": [
    {
      "path": "/api/cron/cleanup",
      "schedule": "0 2 * * *"
    }
  ]
}
```

### Docker Deployment

#### Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://db:5432/saas
    depends_on:
      - db
  db:
    image: postgres:16
    environment:
      - POSTGRES_DB=saas
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
```

### Production Checklist

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] OAuth callbacks updated for production URLs
- [ ] Stripe webhooks configured
- [ ] Domain SSL configured
- [ ] Analytics tracking enabled
- [ ] SEO metadata optimized
- [ ] Performance testing completed

## 🧪 Testing & Quality Assurance

### Development Scripts

```bash
# Type checking
pnpm check-types

# Linting
pnpm lint

# Build analysis
pnpm analyze

# Database studio
pnpm db:studio
```

### Testing Strategy

#### Unit Tests (Recommended Addition)

```bash
# Install testing dependencies
pnpm add -D vitest @testing-library/react @testing-library/jest-dom

# Add test script to package.json
"test": "vitest",
"test:ui": "vitest --ui"
```

#### API Testing

Test your API endpoints:

```bash
# Example API tests
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hello"}]}'
```

### Performance Optimization

#### Bundle Analysis

```bash
pnpm analyze
```

This generates a bundle analysis report to help identify large dependencies.

#### Database Optimization

Enable query logging in development:

```typescript
// src/db/client.ts
const db = drizzle(client, {
  logger: process.env.NODE_ENV === 'development'
})
```

## 🐛 Troubleshooting

### Common Issues

#### Authentication Issues

- **Problem:** OAuth redirects not working
- **Solution:** Ensure callback URLs in OAuth provider settings match your domain

- **Problem:** Better Auth throwing errors
- **Solution:** Check `BETTER_AUTH_URL` environment variable matches your app URL

#### Database Issues

- **Problem:** Connection refused
- **Solution:** Verify `DATABASE_URL` and ensure PostgreSQL is running

- **Problem:** Migration errors
- **Solution:** Check schema changes and run `pnpm db:generate` after changes

#### Stripe Issues

- **Problem:** Webhooks not firing
- **Solution:** Verify webhook endpoint URL and events selected in Stripe dashboard

- **Problem:** Subscription status not updating
- **Solution:** Check webhook signature verification and handle all required events

#### AI Chat Issues

- **Problem:** Chat not responding
- **Solution:** Verify `OPENAI_API_KEY` is set and has sufficient credits

### Environment-Specific Issues

#### Development Issues

- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && pnpm install`

#### Production Issues

- Check server logs in hosting platform
- Verify environment variables are set correctly
- Test API endpoints manually with curl/Postman

## 📚 Advanced Configuration

### Custom Server Setup

For advanced use cases, you can add a custom server:

```typescript
// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
```

### Internationalization (i18n)

Add multi-language support:

```bash
pnpm add next-i18next
```

```typescript
// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
  },
}
```

### Rate Limiting

Add rate limiting for API routes:

```bash
pnpm add @upstash/ratelimit
```

```typescript
// src/lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/lib/redis'

export const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, '1 h'), // 100 requests per hour
})
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Better Auth](https://better-auth.com/) - Authentication library
- [Stripe](https://stripe.com/) - Payment processing
- [OpenAI](https://openai.com/) - AI models
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**

If you find this template helpful, please ⭐ the repository and share it with others!
