// Learning Center articles: one Markdown file per article in src/content/learn/.
// Unfinished facts inside an article use the placeholder markup:
//   <span class="ph" data-ph="what is missing">[Placeholder text]</span>
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const learn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/learn' }),
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    topicKey: z.enum(['cost', 'problems', 'compare', 'results', 'best']),
    description: z.string(),
    // Shown in a box at the top, and used as the FAQ answer in structured data.
    shortAnswer: z.string().optional(),
    video: z.object({ kind: z.string(), duration: z.string(), heading: z.string(), note: z.string().optional() }).optional(),
    // Byline: leave out until the author and date are settled; the page shows placeholders.
    author: z.string().optional(),
    date: z.string().optional(),
    readMinutes: z.number().optional(),
    related: z.array(z.object({ topic: z.string(), title: z.string(), href: z.string().optional() })).default([]),
  }),
});

export const collections = { learn };
