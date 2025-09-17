module.exports = {
  siteUrl: process.env.BASE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.5,
  sitemapSize: 5000,
  gzip: false,
  // exclude: ['/protected-page'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
