import type { MetadataRoute } from 'next';

const SITE = 'https://www.lukan.dk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: '/', priority: 1.0 },
    { path: '/products', priority: 0.9 },
    { path: '/services', priority: 0.8 },
    { path: '/about', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
    { path: '/privacy', priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }));
}
