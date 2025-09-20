import Link from "next/link";
import { ArrowRight, Shield, Zap, Users, Sparkles } from "lucide-react";
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
                    Build Your Next{" "}
                    <span className="block text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                      SaaS Application
                    </span>
                  </h1>
                  <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                    Professional starter template with modern UI,
                    authentication, payments, and everything you need.
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
                    <Link href="/pricing">View Pricing</Link>
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
                Everything You Need
              </h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Built with modern technologies and best practices for
                professional SaaS.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Secure Authentication</CardTitle>
                  <CardDescription>
                    JWT-based authentication with secure cookies and RBAC
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    User management with HttpOnly cookies, bcrypt hashing, and
                    RBAC support.
                  </p>
                </CardContent>
              </Card>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Stripe Integration</CardTitle>
                  <CardDescription>
                    Subscriptions, billing portal, and webhooks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Checkout, customer portal, and subscription lifecycle
                    management.
                  </p>
                </CardContent>
              </Card>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Team Management</CardTitle>
                  <CardDescription>
                    Multi-tenant with role-based access control
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Owner/member roles, invitations, and activity logging.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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
    </SidebarProvider>
  );
}
