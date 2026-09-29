import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Type of client, shown on the card (e.g. "Scientific software company"). */
      client: z.string(),
      role: z.string(),
      timeline: z.string(),
      tools: z.array(z.string()),
      /** One-line description used on the card, meta description and OG. */
      summary: z.string(),
      /** Headline result, highlighted on the card and case page. */
      outcome: z.string(),
      tags: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      /** Sort order on the home page (1 = first). */
      order: z.number(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { cases };
