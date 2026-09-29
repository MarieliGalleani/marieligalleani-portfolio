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
      /**
       * Optional looping walkthrough shown in the case hero instead of the static cover.
       * Files live in public/media/ (Astro doesn't process video). Paths are root-relative.
       */
      video: z
        .object({ mp4: z.string(), webm: z.string().optional(), poster: z.string(), label: z.string() })
        .optional(),
      /** Framed screens shown in the "Screens" section of the case page. */
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      /** Public source code, if any. */
      repo: z.url().optional(),
      /** Sort order on the home page (1 = first). */
      order: z.number(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { cases };
