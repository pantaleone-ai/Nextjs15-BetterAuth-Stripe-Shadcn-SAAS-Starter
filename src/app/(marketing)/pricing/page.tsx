import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Metadata } from 'next';
import { Button } from "@theme/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@theme/components/ui/card";
import { ThemeToggle } from "@theme/components/ui/theme-toggle";

export const metadata: Metadata = {
  title: 'Pricing | AI SaaS Starter Kit & Next.js Boilerplates',
  description: 'Affordable pricing plans for production-ready Next.js AI SaaS starter kits. Start free, scale with Professional and Enterprise plans—includes auth, payments & templates.',
  keywords: [
    'AI SaaS starter pricing',
    'Next.js SaaS pricing',
    'AI app template pricing',
    'SaaS starter kits pricing',
    'Next.js boilerplates pricing',
    'AI starter subscription',
    'SaaS template plans'
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
    url: 'https://pantaleone-ai-saas-starter.vercel.app/pricing',
    title: 'Pricing | AI SaaS Starter Kit & Next.js Boilerplates',
    description: 'Affordable pricing plans for production-ready Next.js AI SaaS starter kits. Start free, scale with Professional and Enterprise plans—includes auth, payments & templates.',
    siteName: 'Pantaleone AI SaaS Starter',
    images: [
      {
        url: 'https://pantaleone-ai-saas-starter.vercel.app/og-image-pricing.jpg', // TODO: replace
        width: 1200,
        height: 630,
        alt: 'AI SaaS Starter Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | AI SaaS Starter Kit & Next.js Boilerplates',
    description: 'Affordable pricing for production-ready AI SaaS starter kits. Start free & scale with auth, payments & templates.',
    images: ['https://pantaleone-ai-saas-starter.vercel.app/og-image-pricing.jpg'], // TODO
    creator: '@pantaleone_ai',
  },
  alternates: {
    canonical: 'https://pantaleone-ai-saas-starter.vercel.app/pricing',
  },
};

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals",
    price: "$9.99",
    interval: "month",
    features: ["Up to 3 projects", "Basic analytics", "Email support", "1GB storage"],
  },
  {
    name: "Professional",
    description: "For growing teams",
    price: "$29.99",
    interval: "month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    description: "For large orgs",
    price: "Custom",
    interval: null,
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "Unlimited storage",
      "SLA",
    ],
  },
];

export default async function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 glass border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link className="flex items-center space-x-2" href="/" aria-label="Go to home">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl gradient-text">SaaS Starter</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link className="text-muted-foreground hover:text-foreground" href="/pricing">
              Pricing
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="/blog">
              Blog
            </Link>
            <Link className="text-muted-foreground hover:text-foreground" href="/sign-in">
              Sign In
            </Link>
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4 text-balance">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Start free and scale as needs grow—no surprises.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => {
                const isFeatured = plan.name === "Professional";
                return (
                  <Card
                    key={plan.name}
                    variant={isFeatured ? "gradient" : "glass"}
                    className={[
                      "group relative flex flex-col justify-between h-full transition-all duration-300",
                      "border border-border/60",
                      isFeatured
                        ? [
                            "order-1 lg:order-none",
                            "ring-2 ring-primary",
                            "shadow-xl shadow-primary/10",
                            "lg:scale-[1.03] lg:-mt-2",
                            "bg-gradient-to-b from-primary/5 to-background dark:from-primary/10",
                            "z-10",
                          ].join(" ")
                        : "hover:-translate-y-0.5 hover:shadow-md hover:shadow-foreground/5",
                    ].join(" ")}
                  >
                    {isFeatured && (
                      <div
                        className="absolute -top-3 right-4 rounded-full bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 shadow-sm"
                        aria-label="Most popular"
                      >
                        Most popular
                      </div>
                    )}

                    <div>
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <CardDescription className="mt-2 text-balance">
                          {plan.description}
                        </CardDescription>
                        <div className="mt-6">
                          <span className="text-4xl font-bold tracking-tight">
                            {plan.price}
                          </span>
                          {plan.interval && (
                            <span className="text-muted-foreground ml-2">
                              /{plan.interval}
                            </span>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <ul className="space-y-3">
                          {plan.features.map((f) => (
                            <li key={f} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-sm text-foreground/90">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>

                    <CardFooter className="pt-6">
                      <Button
                        className={[
                          "w-full transition-colors duration-200",
                          isFeatured
                            ? "shadow-md shadow-primary/20"
                            : "shadow-sm hover:shadow-md",
                        ].join(" ")}
                        variant={isFeatured ? "default" : "secondary"}
                        size="lg"
                        asChild
                      >
                        <Link
                          href="/sign-up"
                          aria-label={
                            plan.name === "Enterprise"
                              ? "Contact Sales"
                              : `Get Started with ${plan.name}`
                          }
                        >
                          {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 SaaS Starter. All rights reserved.</p>
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
  );
}
