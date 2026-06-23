import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // The buyer query this article is engineered to answer (for your own tracking).
    targetQuery: z.string().optional(),
  }),
});

const podcast = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    guest: z.string().optional(),
    episodeNumber: z.number().optional(),
    audioUrl: z.string().optional(),
  }),
});

export const collections = { writing, podcast };
