import type { MetadataRoute } from 'next';
import { sectors } from '@/content/sectors';

export const SITE_URL = 'https://www.veemap.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1 },
    { path: '/capabilities', priority: 0.8 },
    { path: '/industries', priority: 0.8 },
    ...sectors.map((sector) => ({ path: `/industries/${sector.slug}`, priority: 0.7 })),
    { path: '/company', priority: 0.5 },
    { path: '/careers', priority: 0.5 },
    { path: '/contact', priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly' as const,
    priority,
  }));
}
