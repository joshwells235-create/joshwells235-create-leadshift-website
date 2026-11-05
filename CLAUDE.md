# LeadShift website rebuild: project instructions

You are helping Josh Wells, one of LeadShift's three partners, rebuild leadshift.com around Marcus Sheridan's Endless Customers model, combined with StoryBrand. This folder is the handoff from the design phase. Read this file, then `memory.md`, then everything in `docs/` before writing code.

## Where things stand

- The design phase is done. Two references exist:
  - `reference/homepage-concept.html`: Josh's homepage concept, as real HTML/CSS/JS. **This is the primary design reference.** Copy its tokens, spacing, radii, type scale, components, interactions and copy from the source; never round or approximate them.
  - `reference/demo-canvas/*.dc.html`: the design canvas: 16 pages plus 3 shared parts (header, footer, video placeholder). It uses a canvas component format (`<x-dc>`, `{{holes}}`, `<sc-for>`, `<sc-if>`, `<dc-import>`). Use it for page structure, section order and copy. Do not copy its markup as production code.
- Next deliverable: a **clickable preview site** on a private link that Josh can share with Joe Cundall and Kailyn Graham (partners), the team who will fill in content, and outside reviewers. It becomes the start of the real build.
- The final hosting platform is **not decided** (see `docs/04-open-decisions.md`). Build the preview so it can go either way.

## Preview build (confirmed by Josh 2026-11-05)

- Stack: Astro with static HTML output, one shared layout, components for each section pattern, and Markdown content collections for Learning Center articles. Plain CSS with custom properties taken from the concept. Vanilla JS only for the interactive tools.
- Why: plain static HTML ports cleanly to a custom WordPress theme (each component becomes a template part) or deploys as-is on Vercel.
- Deploy: Vercel preview deployments in Josh's existing Vercel team (the Growth Index app `leadshift-cci` already lives there). **Ask Josh before the first deploy.** Previews only. Vercel Authentication stays on and reviewers get a Vercel shareable link; every preview page is noindex.
- Every unfinished fact goes through one placeholder component (for example `<Ph>[Client name]</Ph>`), styled like the concept's `.ph` class. Add a script (`npm run placeholders`) that lists every open placeholder by page, so `docs/07-content-tracker.md` can be regenerated from the code.

## Hard rules

**Truth**
- Never invent facts, numbers, clients, quotes, reviews, credentials, dates or claims. Anything not in `docs/03-facts.md`, the concept or the demo becomes a bracketed placeholder. When unsure, ask Josh. He would rather answer a question than find an invented claim.
- Do not name Predictive Index anywhere on the site. Talk about hiring expertise and right people in the right seats. The certification registration page is an open decision.
- Sample report images show a fictional company. Keep a caption that says so.

**Voice (Josh's writing rules, strict)**
- No em dashes. Use commas, colons, periods or parentheses.
- No hollow intensifiers, no "it's not X, it's Y" constructions, no filler lists of three, no hedging, no template corporate phrasing.
- Plain, confident sentences. Lead with the buyer's problem, not LeadShift.
- The three partners are presented as partners. Don't frame Josh and Joe as a tier above Kailyn.

**Design**
- Follow the concept's look: Instrument Sans for display, Raleway for body, navy and night-navy bands with a soft blue radial glow, mist sections, hairline rules, 6/10/16/22px radii. Details are in `docs/05-design-system.md`.
- Josh rejects concepts that feel gimmicky or blocky. Avoid generic card grids, left-border accent cards, emoji and decorative gradients beyond the concept's single soft glow. Use ruled lists, editorial type and real imagery.
- The concept doesn't use the brand magenta. Don't add it without asking.
- Accessible as built: real buttons, links and labels, 4.5:1 text contrast, 44px touch targets, `prefers-reduced-motion` respected, works at phone width.

**Safety (non-negotiable)**
- Never push to production, change DNS (Cloudflare), touch the live WordPress site, or send anything to anyone without Josh's explicit OK for that specific action.
- Never delete files or records without explicit confirmation. Never overwrite a file without saying what will change.
- Flag anything that touches a client record before acting.
- Placeholders are fine in the preview. Zero placeholders may reach the live site: cut a section rather than ship a bracket.
- Internal notes, open questions and Claude-to-Josh commentary never go on a page. Raise them in chat or in `docs/`.

## Working agreements

- Log every decision Josh makes in `memory.md` with a date. Update `docs/04-open-decisions.md` when something closes.
- When you change a page, check it against its Endless Customers job in `docs/01-build-brief.md`.
- If a request seems overbuilt or drifts in scope, say so before starting.
- Ask one clean question instead of guessing.

## File map

| Path | What it is |
|---|---|
| `memory.md` | Dated decision log for this project |
| `docs/01-build-brief.md` | Goal, phases, page inventory with each page's Endless Customers job |
| `docs/02-endless-customers-check.md` | The framework, what the demo covers, and the gaps |
| `docs/03-facts.md` | Source-of-truth facts: firm, people, programs, prices, proof |
| `docs/04-open-decisions.md` | Decisions Josh and the partners still need to make |
| `docs/05-design-system.md` | Tokens, type, components, motion |
| `docs/06-migration-and-launch.md` | Current site, DNS facts, redirect map, cutover plan |
| `docs/07-content-tracker.md` | Every article, video, story and fact still to produce |
| `reference/` | Homepage concept HTML and the demo canvas files |
| `assets/` | Fonts, logos, sample report pages, photo, 24 client logos. Served as the site's public folder |
| `src/data/site.js` | Every fact the pages, structured data and tools read. Add facts here, sourced from `docs/03-facts.md` |
| `src/styles/concept.css` | The concept's CSS, verbatim. Don't edit; put additions in `src/styles/site.css` |
| `src/components/Ph.astro` | The placeholder component every unfinished fact goes through |
| `scripts/check.mjs`, `scripts/placeholders.mjs` | `npm run check` (rules) and `npm run placeholders` (writes `docs/placeholders.md`) |
