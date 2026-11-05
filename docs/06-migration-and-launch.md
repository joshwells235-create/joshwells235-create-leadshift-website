# Migration and launch

Nothing in this file happens without Josh's explicit OK for each live step.

## What's live today (checked 2026-11-05)

- **Website:** WordPress with a Divi child theme (the page's generator tag reads "Divi Child v.4.2.1"). Hosting company not identified. The domain points to 199.16.172.157 and 199.16.173.40.
- **DNS:** Cloudflare (nameservers `zeus.ns.cloudflare.com`, `fay.ns.cloudflare.com`).
- **Email:** Microsoft 365. MX record `leadshift-com.mail.protection.outlook.com`. **Never touch MX or email-related TXT records.** Only the website's records change at launch.
- **Footer problem:** the live site still lists the old Hyannis office (396 Main Street, Suite 1, Hyannis) alongside Worcester. The new site lists Worcester only.
- **Logins needed from Josh:** Cloudflare, WordPress admin, the hosting account.

## Current pages and where they go

Proposed new URLs from `docs/01-build-brief.md`. Every old URL gets a permanent (301) redirect unless it keeps its address. Confirm the map with Josh.

| Current URL | New home | Note |
|---|---|---|
| `/` | `/` | |
| `/leadership-development/` | `/leaders` | |
| `/customized-leadership-development-programs/` | `/leaders` | |
| `/leadership-academy/` | `/leaders` (Academy section) | Or a dedicated `/leaders/leadership-academy` page if Josh wants one |
| `/leadership-coaching/` | `/coaching` | |
| `/talent-optimization/` | `/leaders` (hiring excellence) | Talent optimization is the PI practice; the new site doesn't name PI |
| `/team-performance-programs/` | `/teams` | |
| `/private-equity-partnerships/` | **Open decision #5** | Keep, fold or drop |
| `/our-team/` | `/about` | |
| `/contact/` | `/book-a-call` | |
| `/predictive-index-professional-certification/` | **Open decisions #6 and #7** | Probably keep this address so existing registration links work |
| `/elite5-open-workshop/` | Keep the address, or `/workshops` | Existing registration links may point here |
| `/privacy-policy/` | `/privacy-policy/` | Copy the text word for word |
| `/fulfillment-policy/` | `/fulfillment-policy/` | Copy the text word for word |

Before launch, check Google Search Console (if LeadShift has it) and HubSpot for any other URLs that get traffic or are used in emails, and add them to the map.

## The preview (set up 2026-11-05)

- **Vercel project:** `leadshift-website` in the Leadshift team. It builds from the `preview` branch of `joshwells235-create/joshwells235-create-leadshift-website`; every push to that branch updates the preview.
- **No production builds:** the project's ignored-build-step command skips anything pushed to `main`. Remove it at launch, when `main` becomes the live branch.
- **Access:** open, no sign-in (Josh, 2026-11-05). Vercel Authentication is off for the project, so anyone with the address can view it: https://leadshift-website-git-preview-joshwells235-creates-projects.vercel.app. The address isn't listed anywhere and search engines are told to stay out. To close it again, turn Vercel Authentication back on in the project's Deployment Protection settings.
- **Build:** `npm run build`, so the rules check runs on every deploy and a failing check stops the deploy.
- **Not indexed:** every preview page carries noindex and `robots.txt` disallows everything.
- **Deploy only by pushing to `preview`.** The very first deploy was started by hand through Vercel's API, and Vercel made it a production deployment on `leadshift-website.vercel.app` even though it came from the `preview` branch. Josh has OK'd deleting it (2026-11-05); until he does, that address is open like the preview. Git pushes to `preview` create normal preview deployments.
- **Pages:** all 16 demo pages plus the two policy pages are built (2026-11-05). `llms.txt` and `sitemap.xml` are generated from `src/data/site.js`, the pages folder and the Learning Center collection, so they stay current without hand edits. The sitemap leaves out the client story template until a story is approved.
- **Policy pages hold a placeholder.** The cloud session that built the preview can't reach leadshift.com (its network allows no extra hosts), so the privacy and fulfillment policy text has not been copied yet. Paste it into `src/pages/privacy-policy.astro` and `src/pages/fulfillment-policy.astro` (between the `PolicyPage` tags), or allow leadshift.com in the session's network settings and Claude will copy it word for word.

## The switch, by platform

**Custom WordPress theme (current host).**
1. Make a staging copy of the live site on the host.
2. Install the new theme on staging; build pages; set redirects with a redirect plugin or the host's tools.
3. Josh and the partners review staging.
4. On launch day, push staging to live (or activate the theme on live). DNS doesn't change.
5. Rollback: reactivate the Divi theme.

**Vercel.**
1. Build and deploy to a preview URL.
2. Partners review the preview.
3. On launch day, add leadshift.com and www.leadshift.com to the Vercel project, then change only those website records in Cloudflare as Vercel instructs. Leave email records alone.
4. Redirects live in the project's config.
5. Rollback: point the website records back at the old host, which keeps running for about a month before anyone cancels it.

**HubSpot Content Hub.** Requires buying it. The domain is connected inside HubSpot, followed by the same kind of Cloudflare change.

## Launch checklist

- [ ] Every open decision marked "Launch" in `docs/04-open-decisions.md` is closed.
- [ ] `npm run placeholders` (or equivalent) reports zero placeholders.
- [ ] Every page passes Josh's writing rules: no em dashes, no invented facts.
- [ ] Redirect map tested: every old URL lands on the right page.
- [ ] Contact, booking, Leadership Lens signup and workshop registration tested end to end, with submissions reaching HubSpot or the right inbox.
- [ ] HubSpot tracking code and analytics installed.
- [ ] Structured data validates; `sitemap.xml` and `llms.txt` live; For AI agents page dated.
- [ ] Mobile check on a real phone.
- [ ] Email tested after the switch (send and receive at leadshift.com).
- [ ] Old site kept ready for rollback for about 30 days.
