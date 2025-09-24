import path from 'path'
import createMDX from '@next/mdx'
import withBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Add bundle analyzer support
  pageExtensions: ['js','jsx','md','mdx','ts','tsx'],
  // Theme-aware webpack aliases
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const activeTheme = process.env.THEME || 'base'
    config.resolve.alias['@theme'] = path.join(__dirname, 'themes', activeTheme)
    return config
  },
  // Enhanced image optimization
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com', 'pantaleone-ai-saas-starter.vercel.app'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Enhanced security headers
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        // CSP will be added after testing content
        // { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' *.vercel-analytics.com *.vercel-speed-insights.com *.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: *.unsplash.com *.githubusercontent.com; font-src 'self' data:;" },
      ],
    }]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-slug','rehype-autolink-headings'],
  },
})

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(withMDX(nextConfig))
