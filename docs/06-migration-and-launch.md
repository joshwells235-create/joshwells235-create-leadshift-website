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
