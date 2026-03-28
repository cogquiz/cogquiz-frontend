import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://cogquiz.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const testRoutes = [
    'nback-test',
    'stroop-effect',
    'trail-making-test',
    'card-sort-test',
    'syllogisms-test',
    'tower-of-hanoi',
    'tower-of-london-test',
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...testRoutes.map((route) => ({
      url: `${BASE_URL}/tests/${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
