import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const activities = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string().optional(),
    status: z.enum(['upcoming', 'completed']),
    coverImage: z.string().optional(),
    description: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    coverPhoto: z.string(),
    photos: z.array(z.string()),
  }),
});

export const collections = { activities, gallery };
