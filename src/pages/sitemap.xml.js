// sitemap.xml, built from the pages folder and the Learning Center collection, so a new page
// is listed without editing this file. The client story template is left out until a story is approved.
import { getCollection } from 'astro:content';

const files = Object.keys(import.meta.glob('./**/*.astro'));
const exclude = new Set(['/results/client-name']);

export async function GET({ site }) {
  const paths = files
    .filter((f) => !f.includes('['))
    .map((f) => f.replace(/^\./, '').replace(/\.astro$/, '').replace(/\/index$/, '/'))
    .filter((p) => !exclude.has(p));
  for (const e of await getCollection('learn')) paths.push(`/learn/${e.id}`);
  paths.sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
