const { writeFileSync } = require('fs')
const { join } = require('path')

const siteUrl = process.env.SITE_URL || 'https://pantaleone-ai-saas-starter.vercel.app'
const currentDate = new Date().toISOString().split('T')[0]

// Generate sitemap XML
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/pricing</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`

// Write the sitemap to public/sitemap.xml
const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml')
writeFileSync(sitemapPath, sitemapContent, 'utf8')

console.log('✅ [next-sitemap] Sitemap generated successfully')
console.log('   Sitemap saved to public/sitemap.xml')
