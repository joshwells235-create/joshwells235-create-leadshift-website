# LeadShift website: Claude Code starter kit

Everything from the design phase, packaged so Claude Code can pick up where the Claude app left off (2026-11-05).

## How to start

1. Unzip this folder where you keep projects and open it in Claude Code. If you use GitHub, make it a new private repository first so every change is saved with history.
2. Paste this as your first message:

   > Read CLAUDE.md, memory.md and every file in docs/. Then summarize the project in a few lines, list the decisions you need from me before you build the preview, and propose how you'll set up the project. Don't write code until I confirm.

3. Answer its questions, then let it build the clickable preview.

## What's inside

| Path | What it is |
|---|---|
| `CLAUDE.md` | Project instructions Claude Code loads automatically: rules, voice, safety, the plan |
| `memory.md` | Dated log of every decision so far |
| `docs/01-build-brief.md` | Goal, phases, every page and its Endless Customers job, the interactive tools |
| `docs/02-endless-customers-check.md` | The four pillars, what the demo covers, the gaps in priority order |
| `docs/03-facts.md` | Facts allowed on the site: firm, people, programs, prices, proof |
| `docs/04-open-decisions.md` | Decisions still open, what each one blocks, and the closed list |
| `docs/05-design-system.md` | Colors, type, components and motion from your homepage concept |
| `docs/06-migration-and-launch.md` | What's live today, the redirect map, the switch plan, the launch checklist |
| `docs/07-content-tracker.md` | Every video, article, story and fact still to produce |
| `reference/homepage-concept.html` | Your homepage concept, the main design reference |
| `reference/demo-canvas/` | The demo's 16 pages and 3 shared parts (structure and copy reference) |
| `assets/` | Fonts, logos, sample report pages, the executive photo, 24 client logos |

## Working on the site

The preview is an Astro project at the root of this folder. It builds plain static HTML.

| Command | What it does |
|---|---|
| `npm install` | Install the one dependency (Astro), once |
| `npm run dev` | Local site with live reload at http://localhost:4321 |
| `npm run build` | Build to `dist/`, then run `npm run check` |
| `npm run check` | Fail on an em dash, "Predictive Index" or "PI", Hyannis, the brand magenta, "EQ-i", or a page without noindex. With `PUBLIC_PREVIEW=false` (the launch build) it also fails on any placeholder |
| `npm run placeholders` | Write every open placeholder, page by page, to `docs/placeholders.md` |

Where things live: `src/data/site.js` holds every fact the pages use (from `docs/03-facts.md`); `src/styles/concept.css` is the concept's CSS, copied verbatim; `src/styles/site.css` holds the additions; `src/components/` has one file per shared part; `src/pages/` has one file per page.

## Links (for you; Claude Code can't open these)

- Website demo canvas: https://claude.ai/artifact/CXUMVN4ngTQswTxTcqXKgH
- Homepage concept: https://claude.ai/artifact/7pvDcne1HJw6rnhFJePWNy
