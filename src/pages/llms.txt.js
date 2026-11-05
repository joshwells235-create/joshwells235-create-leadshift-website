// llms.txt (llmstxt.org): a plain summary for AI assistants, built from src/data/site.js so it
// always matches the pages. Only confirmed facts go here: no placeholders.
import { getCollection } from 'astro:content';
import { firm, partners, staff, coaches, programs, cta } from '../data/site.js';

export async function GET({ site }) {
  const u = (path) => new URL(path, site).href;
  const price = (p) => p.amount + (p.schema.price.unitText ? ` ${p.schema.price.unitText}` : '');
  const people = (list) => list.map((p) => `${p.name}, ${p.title}`).join('; ');
  const articles = (await getCollection('learn')).map((e) => `- [${e.data.title}](${u(`/learn/${e.id}`)}): ${e.data.description}`);

  const lines = [
    `# ${firm.name}`,
    '',
    `> ${firm.descriptor}`,
    '',
    `Founded in ${firm.founded}. More than 200 organizations served, many of them for more than a decade. Clients are concentrated in ${firm.industries}. Headquarters: ${firm.address.street}, ${firm.address.city}, ${firm.address.region} ${firm.address.postal}. Phone: ${firm.phone}. Area served: ${firm.areaServed}.`,
    '',
    '## Programs and published price ranges (US dollars)',
    '',
    ...programs.map((p) => `- [${p.name}](${u(p.href)}): ${p.schema.description} ${price(p)}.`),
    `- [Pricing](${u('/pricing')}): every range on one page, with an estimator.`,
    '',
    '## Start here',
    '',
    `- [The Growth Index](${u(cta.gi.href)}): a complimentary assessment for CEOs. It shows whether the gap is how the team works together, how the leaders are growing, or both. A LeadShift partner walks the CEO through what it shows.`,
    `- [Talk to a partner](${u(cta.call.href)}): book a call, or call ${firm.phone}.`,
    `- [Is LeadShift right for you?](${u('/fit')})`,
    `- [Results](${u('/results')})`,
    '',
    '## People',
    '',
    `- Partners: ${people(partners)}`,
    `- Team: ${people(staff)}`,
    `- Coaches and facilitators: ${people(coaches)}`,
    '',
    '## Learning Center',
    '',
    `- [Learning Center](${u('/learn')}): the questions CEOs ask, answered in the open.`,
    ...articles,
    '',
    '## More',
    '',
    `- [About](${u('/about')})`,
    `- [For AI agents](${u('/for-ai-agents')}): the facts on this list, as a page, with the pages to link to.`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
