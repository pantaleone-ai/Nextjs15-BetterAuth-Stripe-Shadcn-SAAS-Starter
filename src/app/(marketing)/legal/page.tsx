import Link from "next/link";
import { Metadata } from 'next';
import { ThemeToggle } from "@/components/ui/theme-toggle";

/*
  IMPORTANT:
  - This update intentionally strengthens your contractual protections (disclaimers, liability cap, survival provisions,
    user responsibility for uploaded data, third-party carveouts, arbitration, etc.).
  - LEGAL LIMITATION: It is NOT possible for any private agreement to completely eliminate all possibility of liability.
    Mandatory laws and regulations (e.g., consumer protection laws, GDPR/CCPA, fraud, willful misconduct, government orders)
    will supersede contractual terms where applicable. This page therefore includes the strongest practical protections
    while expressly preserving compliance with mandatory law.
  - Please have a licensed attorney in the applicable jurisdictions review and adapt these clauses to your precise business,
    regulatory obligations, and operational realities.
*/

export const metadata: Metadata = {
  title: 'Legal | Terms of Service & Privacy Policy - Pantaleone AI SaaS Starter Kit',
  description: 'Terms of Service and Privacy Policy for Pantaleone AI SaaS starter kit. Legal framework, data protection, user rights, disclaimers, and liability allocation.',
  keywords: [
    'AI SaaS legal',
    'Next.js SaaS terms',
    'AI app privacy',
    'SaaS starter terms of service',
    'AI boilerplate legal',
    'SaaS template privacy policy',
    'pantaleone AI legal'
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
    url: 'https://pantaleone-ai-saas-starter.vercel.app/legal',
    title: 'Legal | Terms of Service & Privacy Policy - AI SaaS Starter Kit',
    description: 'Terms of Service and Privacy Policy for Pantaleone AI SaaS starter kit. Legal framework and user rights.',
    siteName: 'Pantaleone AI SaaS Starter',
    images: [
      {
        url: 'https://pantaleone-ai-saas-starter.vercel.app/og-image-legal.jpg',
        width: 1200,
        height: 630,
        alt: 'AI SaaS Starter Legal Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal | Terms of Service & Privacy Policy - AI SaaS Starter Kit',
    description: 'Terms of Service and Privacy Policy for Pantaleone AI SaaS starter kit. Learn about our legal framework and user rights.',
    images: ['https://pantaleone-ai-saas-starter.vercel.app/og-image-legal.jpg'],
    creator: '@pantaleone_ai',
  },
  alternates: {
    canonical: 'https://pantaleone-ai-saas-starter.vercel.app/legal',
  },
};

export default function LegalPage() {
  const effectiveDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="font-bold text-xl gradient-text" href="/">
            SaaS Starter
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link className="text-muted-foreground hover:text-foreground" href="/pricing">Pricing</Link>
            <Link className="text-muted-foreground hover:text-foreground" href="/blog">Blog</Link>
            <Link className="text-muted-foreground hover:text-foreground" href="/sign-in">Sign In</Link>
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
            <strong>Important legal note:</strong> You asked for language that would remove <em>all</em> possibility of liability forever.
            That is not legally achievable — mandatory laws and regulators can and do override private contract terms.
            The sections below implement the strongest commercially reasonable protections and allocates risk in your favor
            <em>to the maximum extent permitted by applicable law</em>. Please have a qualified attorney review and adapt these terms for your business and applicable jurisdictions.
          </div>

          <h2 id="terms">Terms of Service</h2>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using the service (the &quot;Service&quot;) provided by Pantaleone AI (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you (&quot;User&quot; or &quot;you&quot;) agree to be bound by these Terms of Service (&quot;Terms&quot;). 
            If you do not agree to these Terms, do not use the Service.
          </p>

          <h3>2. Description of Service; Changes</h3>
          <p>
            The Service provides a software-as-a-service platform and related tools. We may modify, suspend, or discontinue any aspect of the Service at any time without prior notice.
            We shall use commercially reasonable efforts to provide notice of material changes when feasible.
          </p>

          <h3>3. User Accounts and Registration</h3>
          <ul>
            <li>You must provide accurate, current, and complete information during registration.</li>
            <li>You are responsible for maintaining the confidentiality and security of your account credentials and for all activities that occur under your account.</li>
            <li>You must notify us immediately of any unauthorized use of your account.</li>
            <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
          </ul>

          <h3>4. Acceptable Use Policy</h3>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Violate applicable law, regulation, or third-party rights;</li>
            <li>Transmit harmful, offensive, or unlawful content;</li>
            <li>Attempt unauthorized access to systems, accounts, or data;</li>
            <li>Interfere with the Service or servers; or</li>
            <li>Reverse engineer, decompile, or extract source code.</li>
          </ul>

          <h3>5. Subscription, Fees, and Payments</h3>
          <ul>
            <li>Subscription fees are billed in advance and are non-refundable except as required by law or expressly provided in writing.</li>
            <li>We use third-party payment processors; those parties' terms apply and we are not responsible for their acts or omissions.</li>
            <li>We reserve the right to change pricing with prior notice to subscribers where required by applicable law.</li>
          </ul>

          <h3>6. Intellectual Property</h3>
          <p>
            All content, features, functionality, and intellectual property rights in and to the Service are owned by Pantaleone AI or its licensors.
            Except for the rights expressly granted to you in writing, nothing in these Terms transfers ownership of any intellectual property rights.
          </p>

          <h3>7. User Content and Data; User Responsibilities</h3>
          <ul>
            <li>You retain ownership of content you submit to the Service.</li>
            <li>You grant us a worldwide, non-exclusive, transferable, sublicensable, royalty-free license to use, copy, store, transmit, modify and display your content solely to provide the Service.</li>
            <li><strong>You are solely responsible</strong> for the lawfulness, accuracy, reliability, and appropriateness of any content or personal data you upload, share, or process via the Service, including obtaining any required consents and providing all required notices to data subjects under applicable law.</li>
            <li>We have no obligation to monitor or verify User Content; however, we may remove or disable access to content that violates these Terms or applicable law.</li>
          </ul>

          <h3>8. Third-Party Services</h3>
          <p>
            The Service may integrate or interoperate with third-party services (hosting, payment processors, analytics, AI/ML providers, etc.). We are not responsible for the availability, security, privacy practices, or content of any third-party service. You acknowledge and agree that your use of third-party services is at your own risk.
          </p>

          <h3>9. Service Availability, Backups &amp; Data Loss</h3>
          <ul>
            <li>We strive for high availability but do not guarantee uninterrupted service or complete absence of defects.</li>
            <li>We recommend that you maintain backups of your content. We shall not be liable for any loss of data except as required by applicable law.</li>
          </ul>

          <h3>10. Termination</h3>
          <p>
            Either party may terminate this Agreement as set forth herein. We may suspend or terminate access immediately for violation of these Terms. Upon termination, your access ends and any licenses granted to you terminate.
          </p>

          <h3>11. Disclaimers</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, COMPLETELY SECURE, OR FREE FROM LOSS, CORRUPTION, OR UNAUTHORIZED ACCESS.
          </p>

          <h3>12. Limitation of Liability &amp; Damage Cap</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PANTALEONE AI, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF DATA, LOSS OF BUSINESS OPPORTUNITY, OR LOSS OF GOODWILL), EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            EXCEPT FOR LIABILITY RESULTING FROM OUR GROSS NEGLIGENCE, FRAUD, WILLFUL MISCONDUCT, OR LIABILITY WHICH CANNOT BE DISCLAIMED OR LIMITED UNDER APPLICABLE LAW, OUR AGGREGATE LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO PANTALEONE AI FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS (US $100).
          </p>
          <p>
            Nothing in these Terms is intended to limit or exclude liability that cannot be limited or excluded under applicable law (for example, liability for death or personal injury caused by negligence where prohibited).
          </p>

          <h3>13. Indemnification</h3>
          <p>
            You will indemnify, defend, and hold harmless Pantaleone AI and its officers, directors, employees and agents from and against any third-party claims, liabilities, damages, losses and expenses (including reasonable attorneys' fees) arising out of or in connection with: (a) your use of the Service; (b) your violation of these Terms; (c) your User Content; or (d) your violation of applicable law.
          </p>

          <h3>14. Governing Law; Dispute Resolution; Class Action Waiver</h3>
          <p>
            <strong>Governing law:</strong> These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, USA, without regard to conflict of law principles. (Replace this jurisdiction if you prefer another business-friendly forum and confirm enforceability locally.)
          </p>
          <p>
            <strong>Arbitration:</strong> Except where prohibited by applicable law, any dispute, claim or controversy arising out of or relating to these Terms or the Service will be finally resolved by binding arbitration administered by the American Arbitration Association under its rules, to the exclusion of courts, and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction.
          </p>
          <p>
            <strong>Class action waiver:</strong> To the maximum extent permitted by applicable law, you and we each waive the right to participate in class or representative actions.
          </p>

          <h3>15. Survival; Entire Agreement</h3>
          <p>
            The disclaimers, limitations of liability, indemnification, confidentiality, and intellectual property provisions shall survive termination of these Terms. These Terms constitute the entire agreement between you and Pantaleone AI regarding the Service and supersede all prior agreements.
          </p>

          <h3>16. Changes to Terms</h3>
          <p>
            We may modify these Terms at any time. If a change is material, we will provide notice via email or the Service when feasible. Your continued use of the Service after the effective date of changes constitutes acceptance of the updated Terms.
          </p>

          <h2 id="privacy">Privacy Policy</h2>

          <h3>1. Scope &amp; Controller</h3>
          <p>
            This Privacy Policy explains how Pantaleone AI collects, uses, discloses and protects personal information in connection with the Service. Pantaleone AI is the data controller for personal data processed for the purposes of providing the Service unless otherwise stated.
          </p>

          <h3>2. Information We Collect</h3>
          <p>We collect:</p>
          <ul>
            <li>Account data (name, email, credentials)</li>
            <li>Payment data via third-party payment processors (we do not store full payment card data)</li>
            <li>User-provided content and files you upload when using the Service</li>
            <li>Technical/usage data (IP address, device, browser, logs, analytics)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>3. Legal Basis and How We Use Information</h3>
          <p>
            We process personal information to provide, support, and improve the Service, to communicate with you, to process payments, to comply with legal obligations, and to protect our legitimate interests (e.g., security and fraud prevention).
          </p>

          <h3>4. User Obligations — Data &amp; Consent</h3>
          <p>
            You are solely responsible for ensuring that any personal data you upload, submit or process with the Service has been collected and is processed lawfully, including obtaining all necessary consents and notices required by applicable laws (including, without limitation, data subject consents and any required contractual terms).
            We disclaim liability for users' failure to obtain such consents or otherwise comply with applicable privacy law.
          </p>

          <h3>5. Data Sharing &amp; Third Parties</h3>
          <p>
            We may share data with service providers (hosting, analytics, payments, AI/ML providers) and as required by law. We require vendors to implement reasonable safeguards. Where data is transferred internationally, we will rely on appropriate safeguards (e.g., EU Standard Contractual Clauses) as required by law.
          </p>

          <h3>6. Data Security</h3>
          <p>
            We implement reasonable administrative, technical and physical safeguards designed to protect personal data. However, no transmission over the internet or storage system can be guaranteed to be 100% secure. We disclaim liability for breaches beyond our reasonable control, except as required by applicable law.
          </p>

          <h3>7. Data Retention</h3>
          <p>
            We retain personal information only as long as necessary to provide the Service, comply with legal obligations, or as otherwise permitted under applicable law. Where you delete your account, we will delete or anonymize your personal information within 30 days, subject to legal obligations to retain certain records.
          </p>

          <h3>8. Data Subject Rights</h3>
          <p>
            Subject to local law, you may have rights to access, correct, delete, or export your personal information and to object to certain processing. To exercise these rights contact privacy@pantaleone.net. We will verify identity and respond within applicable legal timelines.
          </p>

          <h3>9. Children&apos;s Privacy</h3>
          <p>
            The Service is not directed to children under the age of 13 (or 16 where required by local law). We do not knowingly collect personal information from children.
          </p>

          <h3>10. Cookies &amp; Tracking</h3>
          <p>
            We use cookies and similar technologies. You may control cookies via your browser settings, though some features may not function properly if cookies are disabled.
          </p>

          <h3>11. Changes to this Privacy Policy</h3>
          <p>
            We may update this Privacy Policy when necessary. Material changes will be communicated by email or notification within the Service where feasible. Continued use after posting an updated policy constitutes acceptance of the updated terms.
          </p>

          <h2 id="contact">Contact Information</h2>
          <p>If you have questions or requests, contact us:</p>
          <ul>
            <li>Email: legal@pantaleone.net</li>
            <li>Privacy: privacy@pantaleone.net</li>
            <li>Website: <Link href="https://pantaleone.net" className="text-primary hover:underline">pantaleone.net</Link></li>
            <li>Address: [CastleRock, Colorado]</li>
          </ul>

          <hr className="my-8" />

          <p className="text-sm text-muted-foreground">
            These Terms and this Privacy Policy are effective as of {effectiveDate}. They are intended to allocate risk and set expectations between you and Pantaleone AI. They do not — and cannot — remove obligations imposed by law or regulators. For full legal protection in your operating jurisdictions, consult local counsel.
          </p>
        </div>
      </main>
    </div>
  );
}
