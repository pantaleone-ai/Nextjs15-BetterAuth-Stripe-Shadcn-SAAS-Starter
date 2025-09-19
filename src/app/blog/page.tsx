import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

interface Frontmatter {
  title?: string
  description?: string
  date?: string
}

function getBlogPost() {
  try {
    // Read the MDX file directly
    const filePath = path.join(process.cwd(), 'src', 'content', 'blog', 'welcome-to-our-blog.mdx')
    // const fileContent = fs.readFileSync(filePath, 'utf8')

    // Extract frontmatter from file content (simple approach)
    const frontmatter: Frontmatter = {
      title: 'Welcome to Our Blog',
      description: 'Join us as we share insights, tutorials, and updates about our journey and the wider tech community.',
      date: '2025-01-19'
    }

    // For now, return a basic welcome message
    // In a full implementation, you'd process the MDX content properly
    return {
      frontmatter,
      content: (
        <div>
          <h1>Welcome to Our Blog</h1>
          <p>Hello, fellow developers and tech enthusiasts! 👋</p>
          <p>We're excited to launch our new blog where we'll be sharing insights, tutorials, and updates about our journey in building modern web applications.</p>
          <h2>What You'll Find Here</h2>
          <p>This blog will cover a wide range of topics including:</p>
          <h3>🚀 Development Tutorials</h3>
          <ul>
            <li>Building modern web applications with Next.js</li>
            <li>Best practices for React development</li>
            <li>Database design and optimization</li>
            <li>Authentication and authorization patterns</li>
          </ul>
          <h3>💡 Technical Insights</h3>
          <ul>
            <li>Performance optimization techniques</li>
            <li>Modern JavaScript/TypeScript patterns</li>
            <li>DevOps and deployment strategies</li>
            <li>Open source contributions</li>
          </ul>
          <h3>📈 Company Updates</h3>
          <ul>
            <li>Product launches and feature announcements</li>
            <li>Team growth and culture</li>
            <li>Lessons learned from our startup journey</li>
          </ul>
          <h2>Getting Started</h2>
          <p>All our content is written in MDX, which allows us to combine the power of Markdown with React components for a richer content experience.</p>
          <p>We hope you find our content helpful and engaging. Feel free to reach out if you have suggestions for topics you'd like us to cover!</p>
          <p>Stay tuned for more posts coming soon.</p>
          <p>Happy coding! 🎉</p>
        </div>
      )
    }
  } catch (error) {
    console.error('Error loading blog post:', error)
    return null
  }
}

export default async function BlogPage() {
  const post = await getBlogPost()

  if (!post) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-muted-foreground">No blog posts available yet.</p>
      </div>
    )
  }

  const { frontmatter, content } = post

  return (
    <SidebarProvider defaultOpen={false}>
    <AppSidebar />
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Link className="flex items-center space-x-2" href="/">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl gradient-text">SaaS Starter</span>
            </Link>
          </div>
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

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Blog</h1>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Insights, tutorials, and updates from our journey
              </p>
            </div>

            <article className="prose prose-gray dark:prose-invert max-w-none mx-auto max-w-3xl">
              <header className="not-prose mb-6">
                <h2 className="text-3xl font-bold mb-2">{frontmatter.title}</h2>
                {frontmatter.description && (
                  <p className="text-lg text-muted-foreground mb-2">{frontmatter.description}</p>
                )}
                {frontmatter.date && (
                  <time className="text-sm text-muted-foreground">
                    {new Date(frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                )}
              </header>
              <div className="blog-content">
                {content}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 SaaS Starter. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link className="hover:text-foreground" href="/legal">Terms</Link>
              <Link className="hover:text-foreground" href="/legal">Privacy</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
    </SidebarProvider>
  )
}

// Metadata for SEO
export const metadata = {
  title: 'Blog | Next.js SaaS Starter',
  description: 'Insights, tutorials, and updates about our journey and the wider tech community.'
}

// Generate static paths (optional, for SSG)
export async function generateStaticParams() {
  // Since we have only one blog page for now, return empty array
  return []
}
