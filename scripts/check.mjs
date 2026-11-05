// npm run check (also runs after every build).
// Fails on anything Josh's hard rules forbid in the built site:
//   em dashes, naming Predictive Index (or "PI"), the old Hyannis office, the brand magenta,
//   internal assessment names, and (preview builds) a page without noindex.
// Launch builds (PUBLIC_PREVIEW=false) also fail on any placeholder left on a page.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, extname } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const PREVIEW = process.env.PUBLIC_PREVIEW !== 'false';

if (!existsSync(DIST)) {
  console.error('check: no dist/ folder. Run `npm run build` first.');
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const RULES = [
  { name: 'em dash', re: /—|&mdash;|&#8212;|&#x2014;/gi, in: ['.html', '.js', '.css', '.txt', '.xml', '.json'] },
  { name: '"Predictive Index"', re: /predictive\s+index/gi, in: ['.html', '.js', '.txt', '.xml', '.json'] },
  { name: '"PI" as a word', re: /\bPI\b/g, in: ['.html', '.txt', '.xml'] },
  { name: 'Hyannis (old office)', re: /hyannis/gi, in: ['.html', '.js', '.txt', '.xml', '.json'] },
  { name: 'brand magenta #EA0C67', re: /ea0c67/gi, in: ['.html', '.js', '.css'] },
  { name: 'internal assessment name "EQ-i"', re: /EQ-i\b/g, in: ['.html', '.js', '.txt', '.xml'] },
];

const errors = [];
const files = walk(DIST);
for (const file of files) {
  const ext = extname(file);
  const rel = '/' + relative(DIST, file);
  if (!['.html', '.js', '.css', '.txt', '.xml', '.json'].includes(ext)) continue;
  const text = readFileSync(file, 'utf8');
  for (const rule of RULES) {
    if (!rule.in.includes(ext)) continue;
    for (const m of text.matchAll(rule.re)) {
      const start = Math.max(0, m.index - 50);
      const ctx = text.slice(start, m.index + m[0].length + 50).replace(/\s+/g, ' ');
      errors.push(`${rel}: ${rule.name}: ...${ctx}...`);
    }
  }
  if (ext === '.html') {
    if (PREVIEW && !/<meta name="robots" content="noindex, nofollow">/.test(text)) {
      errors.push(`${rel}: preview page is missing <meta name="robots" content="noindex, nofollow">`);
    }
    if (!PREVIEW) {
      const n = (text.match(/\bdata-ph=/g) || []).length;
      if (n) errors.push(`${rel}: ${n} placeholder(s) on a launch build. Fill them or cut the section.`);
    }
  }
}

const pages = files.filter((f) => f.endsWith('.html')).length;
if (errors.length) {
  console.error(`\ncheck: ${errors.length} problem(s) in ${pages} page(s):\n`);
  for (const e of errors) console.error('  - ' + e);
  console.error('');
  process.exit(1);
}
console.log(`check: ${pages} page(s) pass (${PREVIEW ? 'preview' : 'launch'} rules).`);
