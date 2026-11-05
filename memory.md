# Project memory: leadshift.com rebuild

Dated log of decisions and direction. Newest at the bottom. Add to it; don't rewrite history. When a decision is reversed, add a new entry and mark the old one superseded.

## 2026-05-05 (Joe and Josh walk-and-talk, recorded in Notion)
- Website overhaul is the top brand priority. Josh leads as marketing-strategy owner; Joe is sponsor.
- Current site is WordPress with Divi.

## 2026-08-13
- Redesign leadshift.com around Endless Customers (Marcus Sheridan), mixed with StoryBrand.
- Publish price ranges per package, not full price lists. Explain why ranges exist: cost depends on how many people take part, how much one-on-one coaching is involved, and whether LeadShift provides tools. Pricing will likely never be fully standardized; published ranges are still a step up from what others show.
- Platform: stay on WordPress/Divi. *(Under review as of 2026-11-05; see that entry.)*
- Problems LeadShift solves, in order at that time: leadership, frontline/team, right people in the right seats, sales fourth. Marketing removed from all language. *(Order updated 2026-11-02.)*
- Parked idea: a different assessment for each problem, beyond the Growth Index.

## 2026-08-14 (prototype shown to Joe)
- Joe was enthusiastic and wants it stood up as soon as possible. Working headline both liked: "Build a business that performs without you carrying it."
- About 15 pages. Josh assembles; Kailyn publishes. *(Superseded 2026-11-05: Claude builds; Kailyn is not expected to code.)*
- Launch prerequisites: products and pricing settled first, plus registration pages for the PI certification and Elite5.
- Sales page content will come from Joe, drawn from the first page of his AI Sales Studio.
- The site never names Predictive Index. It talks about hiring expertise and the right people in the right seats.
- Josh is using Claude to approximate most of the Endless Customers coaching. LeadShift produces the videos and articles itself. The site surfaces the Leadership Lens, articles and videos so AI tools pick LeadShift up as experts.

## 2026-10-19
- Design direction: sleek, modern, innovative, premium. Josh rejected concepts that felt gimmicky or blocky. A second display typeface paired with Raleway is fine (Instrument Sans was chosen in the concept).

## 2026-10-20 to 10-21
- The AI-search-ready homepage concept is on the right track.
- Next: a product-by-product pass. ASCEND has changed and will likely be modeled on what's working at PharmaLogic.
- The Growth Index should be hosted on the LeadShift site, with partner calendar booking added.
- No Growth Index retests have been done yet. Start collecting data as more Growth Indexes complete.

## 2026-11-02
- Sales drops in priority. The three problems are now: leadership bench, team performance (ALIGN), frontline managers (ASCEND). Sales is reduced to one line.
- Site descriptor changes now (dropping sales); Josh brings it to the partners after.
- Partner credentials are off the site for now.
- Published price ranges and program shapes confirmed (see `docs/03-facts.md`).
- Staff (Brian, Rosemary) are listed separately from the 1099 coaches and facilitators (Celia, Sydney, Melissa, Nora). The 1099 group needs a label that doesn't collide with "partners."

## 2026-11-04
- Demo canvas built: 16 pages plus shared header, footer and video placeholder, in the concept's design language. Josh: "Great so far." He will change wording.
- Premium pass done: homepage rebuilt to the concept's vocabulary (glow hero, fanned report spread, logo marquee, ruled problem rows, price list, accordion FAQ, navy portraits), shared video poster, blue placeholder chips, redesigned Growth Index picker and estimator.
- Josh is weighing paying IMPACT for Endless Customers coaching against the 2027 budget. He treats IMPACT's site as the barometer for a great site.

## 2026-11-05
- Josh does not expect Kailyn to code or build. Claude stands up the real site.
- Claude's read: Divi is a poor fit, because the premium parts of the design and the interactive tools would be custom code inside Divi anyway. Options on the table: custom WordPress theme (Claude's recommendation), Vercel, HubSpot Content Hub (not currently owned). **Josh has not decided.**
- Next deliverable: a clickable preview site Josh can share with Joe and Kailyn, the content team and outside reviewers.
- The build moves to Claude Code, starting from this handoff.

## 2026-11-05 (Josh's answers to Claude Code's setup questions)
- Preview stack: Astro, static output, plain CSS from the concept, vanilla JS for the tools (open decision #2 closed). Josh's condition: it has to be something LeadShift can stand up at leadshift.com. On Vercel the same build can go live at leadshift.com; on WordPress it would be ported into a custom theme.
- Preview access: Vercel preview deployments in the Leadshift team with Vercel Authentication on; reviewers get a Vercel shareable link. Every preview page is marked noindex. Claude still asks before the first deploy.
- Partner titles: Joe Cundall, Chief Executive Officer; Kailyn Graham, Chief Operating Officer; Josh Wells, President. Josh: "Our new titles are CEO COO and President." (Open decision #8 closed. Notion's People records carried older titles.)
- The 1099 group appears under the plain heading "Coaches and facilitators", with no group name, separate from staff (open decision #9 closed).
- URLs: the proposed URL map in `docs/01-build-brief.md` is confirmed. The Leadership Academy stays a section of `/leaders`.
- The ALIGN team assessment can be named on the site as The Table Group's Five Dysfunctions of a Team assessment (open decision #14 closed). Predictive Index is still never named.
- Programs: the kit (`docs/03-facts.md`) is right for the programs. The Notion Programs database is out of date and needs updating.
- Claude's proposed preview defaults, not objected to: Home takes section order and copy from `Main.dc.html` with the concept's styling; booking keeps the demo's mock flow, clearly marked; the Leadership Lens form doesn't submit; Growth Index "Continue" opens the live app; privacy and fulfillment policies are copied word for word from the public live pages; the Private Equity page is left out of the preview.
- Repository: Josh created `joshwells235-create/joshwells235-create-leadshift-website` on GitHub. It was public when created, so Claude committed locally and held every push until it is private.

## 2026-11-05 (later: deploy)
- Josh is fine with the GitHub repository staying public: "this is all meant to be public facing sooner than later." Claude pushed the `main` and `preview` branches.
- Josh OK'd the first preview deploy. Vercel project `leadshift-website` in the Leadshift team builds only the `preview` branch (builds from `main` are skipped, so nothing is a production deployment). Vercel Authentication stays on; reviewers get a shareable link.
- Deployed 2026-11-05. The first deploy, started by hand through Vercel's API, came out as a production deployment on `leadshift-website.vercel.app`; Claude raised protection to all deployments within about a minute, so it needs a login like everything else. Pushes to `preview` deploy as previews. Reviewer share link on the `preview` branch address expires 2027-02-03 (see `docs/06-migration-and-launch.md`).
- Josh: "I don't want them to have to sign into vercel to see the site." Claude turned Vercel Authentication off for the project (password protection and IP limits were already off). Anyone with the address can open the preview, no Vercel account or share link needed: https://leadshift-website-git-preview-joshwells235-creates-projects.vercel.app. Pages stay noindex and `robots.txt` still blocks crawlers. This replaces the 2026-11-05 setup choice of Vercel Authentication plus a shareable link. The setting covers every deployment, so the stale production deployment on `leadshift-website.vercel.app` is open too until Josh deletes it.
- Josh OK'd deleting that stale production deployment (`dpl_46ySzS11JgVQVmRykBv77VTB9gU7`, the project's only production deployment). Claude's Vercel connection has no delete action and the session has no Vercel token, so Josh deletes it in the Vercel dashboard. Afterwards `leadshift-website.vercel.app` has nothing to serve, which is intended; Vercel keeps a deleted deployment restorable for 30 days.
