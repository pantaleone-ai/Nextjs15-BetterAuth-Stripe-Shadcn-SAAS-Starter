import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata = {
  title: "Legal - Terms of Service & Privacy Policy",
  description: "Terms of Service, Privacy Policy, and legal information for our SaaS platform",
};

export default function LegalPage() {
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
          <h1>Legal Information</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 id="terms">Terms of Service</h2>
          
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using this service (&quot;Service&quot;) provided by Pantaleone AI (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
            you (&quot;User&quot; or &quot;you&quot;) agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, 
            do not use the Service.
          </p>

          <h3>2. Description of Service</h3>
          <p>
            The Service provides a software-as-a-service platform and related tools. Pantaleone AI reserves the right to 
            modify, suspend, or discontinue any aspect of the Service at any time without prior notice.
          </p>

          <h3>3. User Accounts and Registration</h3>
          <ul>
            <li>You must provide accurate, current, and complete information during registration</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You are responsible for all activities that occur under your account</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
            <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
          </ul>

          <h3>4. Acceptable Use Policy</h3>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Violate any applicable laws, regulations, or third-party rights</li>
            <li>Transmit harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Use automated means to access the Service without permission</li>
            <li>Reverse engineer, decompile, or attempt to extract source code</li>
            <li>Resell or redistribute the Service without explicit written permission</li>
          </ul>

          <h3>5. Subscription and Payment Terms</h3>
          <ul>
            <li>Subscription fees are billed in advance and are non-refundable except as required by law</li>
            <li>We use third-party payment processors and are not responsible for their failures</li>
            <li>We reserve the right to change pricing with 30 days notice to existing subscribers</li>
            <li>Failure to pay may result in Service suspension or termination</li>
            <li>You authorize us to charge your payment method for all fees incurred</li>
          </ul>

          <h3>6. Intellectual Property Rights</h3>
          <p>
            All content, features, functionality, and intellectual property of the Service are owned by Pantaleone AI 
            or its licensors and are protected by copyright, trademark, and other laws. You may not copy, modify, distribute, 
            sell, or lease any part of our Service without explicit written permission.
          </p>

          <h3>7. User Content and Data</h3>
          <ul>
            <li>You retain ownership of content you submit to the Service</li>
            <li>You grant us a license to use, store, and process your content to provide the Service</li>
            <li>You are responsible for ensuring you have rights to any content you submit</li>
            <li>We may remove content that violates these Terms or applicable laws</li>
          </ul>

          <h3>8. Service Availability and Support</h3>
          <ul>
            <li>We strive for high availability but do not guarantee uninterrupted service</li>
            <li>Scheduled maintenance may temporarily interrupt service</li>
            <li>Support is provided on a best-effort basis according to your subscription level</li>
            <li>We are not liable for data loss due to service interruptions</li>
          </ul>

          <h3>9. Termination</h3>
          <p>
            Either party may terminate this agreement at any time. We may suspend or terminate your access immediately 
            for violations of these Terms. Upon termination, your right to use the Service ceases immediately.
          </p>

          <h3>10. Disclaimers and Limitation of Liability</h3>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. PANTALEONE AI DISCLAIMS ALL WARRANTIES, 
            EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            IN NO EVENT SHALL PANTALEONE AI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
            DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF YOUR USE OF THE SERVICE.
          </p>

          <h3>11. Indemnification</h3>
          <p>
            You agree to indemnify, defend, and hold harmless Pantaleone AI and its officers, directors, employees, 
            and agents from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
          </p>

          <h3>12. Governing Law and Dispute Resolution</h3>
          <p>
            These Terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved through binding 
            arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h3>13. Changes to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of material changes via email 
            or through the Service. Continued use of the Service constitutes acceptance of modified Terms.
          </p>

          <h2 id="privacy">Privacy Policy</h2>

          <h3>1. Information We Collect</h3>
          <h4>Personal Information</h4>
          <ul>
            <li>Account information (name, email address, password)</li>
            <li>Payment information (processed by third-party payment processors)</li>
            <li>Profile information you voluntarily provide</li>
            <li>Communication records (support tickets, emails)</li>
          </ul>
          
          <h4>Usage Information</h4>
          <ul>
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage analytics (pages visited, features used, time spent)</li>
            <li>Performance data (load times, errors, crashes)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>Provide and maintain the Service</li>
            <li>Process payments and prevent fraud</li>
            <li>Communicate with you about the Service</li>
            <li>Improve and optimize the Service</li>
            <li>Comply with legal obligations</li>
            <li>Protect our rights and prevent abuse</li>
          </ul>

          <h3>3. Information Sharing and Disclosure</h3>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who help us operate the Service</li>
            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

          <h3>4. Data Security</h3>
          <ul>
            <li>We implement industry-standard security measures to protect your data</li>
            <li>Data is encrypted in transit and at rest</li>
            <li>Access to personal data is limited to authorized personnel</li>
            <li>We regularly review and update our security practices</li>
            <li>Despite our efforts, no system is completely secure</li>
          </ul>

          <h3>5. Data Retention</h3>
          <p>
            We retain personal information for as long as necessary to provide the Service and comply with legal obligations. 
            When you delete your account, we will delete or anonymize your personal information within 30 days, except 
            where retention is required by law.
          </p>

          <h3>6. Your Privacy Rights</h3>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct or update your information</li>
            <li>Delete your information</li>
            <li>Export your data</li>
            <li>Opt out of certain data processing</li>
            <li>Object to processing based on legitimate interests</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@pantaleone.net</p>

          <h3>7. Cookies and Tracking</h3>
          <p>
            We use cookies and similar technologies to improve your experience, analyze usage, and provide personalized content. 
            You can control cookie settings through your browser, though some features may not function properly if cookies are disabled.
          </p>

          <h3>8. Third-Party Services</h3>
          <p>
            Our Service integrates with third-party services (payment processors, analytics providers, etc.). 
            These services have their own privacy policies, which we encourage you to review.
          </p>

          <h3>9. International Data Transfers</h3>
          <p>
            Your information may be processed in countries other than your country of residence. We ensure appropriate 
            safeguards are in place to protect your data during international transfers.
          </p>

          <h3>10. Children&apos;s Privacy</h3>
          <p>
            Our Service is not intended for children under 13 (or 16 in the EU). We do not knowingly collect personal 
            information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h3>11. Changes to Privacy Policy</h3>
          <p>
            We may update this Privacy Policy periodically. We will notify you of material changes via email or through 
            the Service. The updated policy will be effective when posted.
          </p>

          <h2 id="contact">Contact Information</h2>
          <p>
            If you have questions about these Terms or Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Email: legal@pantaleone.net</li>
            <li>Website: <Link href="https://pantaleone.net" className="text-primary hover:underline">pantaleone.net</Link></li>
            <li>Address: [Your Business Address]</li>
          </ul>

          <hr className="my-8" />
          
          <p className="text-sm text-muted-foreground">
            This document was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}. 
            These terms are effective immediately for new users and will be effective for existing users on the date specified above.
          </p>
        </div>
      </main>
    </div>
  );
}
