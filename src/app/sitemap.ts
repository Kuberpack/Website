import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.kuberpack.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/capabilities', '/products', '/careers', '/contact'];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
