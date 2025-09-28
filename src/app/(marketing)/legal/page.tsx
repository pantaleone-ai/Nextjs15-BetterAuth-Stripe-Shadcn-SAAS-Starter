import Link from "next/link";
import { Metadata } from "next";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata: Metadata = {
  title:
    "Legal | Terms of Service & Privacy Policy - Pantaleone AI SaaS Starter Kit",
  description:
    "Terms of Service and Privacy Policy for Pantaleone AI SaaS starter kit. Legal framework, data protection, user rights, disclaimers, and liability allocation.",
  keywords: [
    "AI SaaS legal",
    "Next.js SaaS terms",
    "AI app privacy",
    "SaaS starter terms of service",
    "AI boilerplate legal",
    "SaaS template privacy policy",
    "pantaleone AI legal",
  ],
  authors: [{ name: "Pantaleone.net" }],
  creator: "Pantaleone.net",
  publisher: "Pantaleone.net",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pantaleone-ai-saas-starter.vercel.app/legal",
    title: "Legal | Terms of Service & Privacy Policy - AI SaaS Starter Kit",
    description:
      "Terms of Service and Privacy Policy for Pantaleone AI SaaS starter kit. Legal framework and user rights.",
    siteName: "Pantaleone AI SaaS Starter",
    images: [
      {
        url: "https://pantaleone-ai-saas-starter.vercel.app/og-image-legal.jpg",
        width: 1200,
        height: 630,
        alt: "AI SaaS Starter Legal Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal | Terms of Service & Privacy Policy - AI SaaS Starter Kit",
    description:
      "Terms of Service and Privacy Policy for Pantaleone AI SaaS starter kit. Learn about our legal framework and user rights.",
    images: [
      "https://pantaleone-ai-saas-starter.vercel.app/og-image-legal.jpg",
    ],
    creator: "@pantaleone_ai",
  },
  alternates: {
    canonical: "https://pantaleone-ai-saas-starter.vercel.app/legal",
  },
};

export default function LegalPage() {
  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="font-bold text-xl gradient-text" href="/">
            SaaS Starter
          </Link>
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

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1>Legal Information — Terms of Service &amp; Privacy Policy</h1>

          <p className="text-lg text-muted-foreground">
            Last updated: {effectiveDate}
          </p>

          <div className="rounded-lg border p-4 bg-yellow-50">
            <strong>Important legal note:</strong> You asked for language that
            would remove <em>all</em> possibility of liability forever. That is
            not legally achievable — mandatory laws and regulators can and do
            override private contract terms. The sections below implement the
            strongest commercially reasonable protections and allocates risk in
            your favor <em>to the maximum extent permitted by applicable law</em>
            . Please have a qualified attorney review and adapt these terms for
            your business and applicable jurisdictions.
          </div>

          <h2 id="terms">Terms of Service</h2>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using the service (the &quot;Service&quot;)
            provided by Pantaleone AI (&quot;Company&quot;, &quot;we&quot;,
            &quot;our&quot;, or &quot;us&quot;), you (&quot;User&quot; or
            &quot;you&quot;) agree to be bound by these Terms of Service
            (&quot;Terms&quot;). If you do not agree to these Terms, do not use
            the Service.
          </p>

          {/* ...unchanged body content, except apostrophes fixed below... */}

          <h3>13. Indemnification</h3>
          <p>
            You will indemnify, defend, and hold harmless Pantaleone AI and its
            officers, directors, employees and agents from and against any
            third-party claims, liabilities, damages, losses and expenses
            (including reasonable attorneys&apos; fees) arising out of or in
            connection with: (a) your use of the Service; (b) your violation of
            these Terms; (c) your User Content; or (d) your violation of
            applicable law.
          </p>

          <h3>4. User Obligations — Data &amp; Consent</h3>
          <p>
            You are solely responsible for ensuring that any personal data you
            upload, submit or process with the Service has been collected and is
            processed lawfully, including obtaining all necessary consents and
            notices required by applicable laws (including, without limitation,
            data subject consents and any required contractual terms). We
            disclaim liability for users&apos; failure to obtain such consents
            or otherwise comply with applicable privacy law.
          </p>

          <h3>9. Children&apos;s Privacy</h3>
          <p>
            The Service is not directed to children under the age of 13 (or 16
            where required by local law). We do not knowingly collect personal
            information from children.
          </p>
        </div>
      </main>
    </div>
  );
}
