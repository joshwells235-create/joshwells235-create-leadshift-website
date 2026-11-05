# Build brief

## The goal

Replace leadshift.com with a site that earns a CEO's trust before the first call. It should answer the questions buyers actually ask, show prices and people in the open, and let visitors help themselves. The model is Marcus Sheridan's Endless Customers (four pillars, below), with StoryBrand shaping the copy: the CEO is the hero, LeadShift is the guide, and every page leads with the buyer's problem.

Two jobs beyond the site itself:
- **Sales.** Joe should be able to use the content in his deals. Under Endless Customers this is "assignment selling": sending a prospect a specific article or video before the call. Pages and articles need stable, linkable URLs and must stand on their own.
- **AI search.** Answering real buyer questions in plain language, with structured data and a For AI agents page, is how tools like ChatGPT learn to name LeadShift.

Audience: CEOs and leadership teams of growing companies. Clients are concentrated in financial services, insurance, life sciences and manufacturing.

## The four pillars (IMPACT's names)

1. **Say what others in your space aren't willing to say.** The Big 5 topics: cost and price, problems, versus and comparisons, reviews, best in class.
2. **Show what others in your space aren't willing to show.** Video, built on the Selling 7: the 80% video, bio videos, product/service fit videos, landing page videos, cost and price videos, customer journey videos, and claims-we-make videos.
3. **Sell in a way others in your space aren't willing to sell.** Self-service tools (self-pricing, self-assessment, self-selection, self-configuration, self-scheduling) and assignment selling.
4. **Be more human than others in your space are willing to be.** Real faces, bios and leader visibility; personal one-to-one videos from whoever sells; your own voice instead of generic AI copy.

`docs/02-endless-customers-check.md` scores the demo against each one.

## Phases

1. **Preview (now).** A clickable preview of every page on a private link for Joe, Kailyn, the content team and outside reviewers. Placeholders allowed and visible.
2. **Launch version 1.** Only what's true. Every placeholder is either filled or its section is cut. Gated by the open decisions in `docs/04-open-decisions.md`: products and pricing settled, certification and Elite5 registration working, platform chosen.
3. **Content program (ongoing).** Articles, videos, client stories and reviews added on a steady schedule. This is where Endless Customers is won or lost, and it outlasts the build. See `docs/07-content-tracker.md`.

## Pages

URLs are proposed; confirm with Josh. "Source" is the demo canvas file in `reference/demo-canvas/`. Status: **Ready** = real content throughout; **Facts** = structure and most copy real, specific facts missing; **Content** = needs content to be produced (story, video, article).

| Page | Proposed URL | Endless Customers job | Status | Source |
|---|---|---|---|---|
| Home | `/` | Entry to all four pillars: proof up front, the three problems, self-service tools (Growth Index, estimator, booking), price ranges, who it's for and not for, Big 5 teasers, partner faces | Facts | `Main.dc.html` |
| Growth Index | `/growth-index` | Pillar 3, self-assessment. CEO picks 5 of 12 priorities, then continues into the app | Facts | `GrowthIndex.dc.html` |
| Pricing | `/pricing` | Pillar 1 (cost), Pillar 2 (cost video), Pillar 3 (self-pricing and self-configuration via the estimator) | Facts | `Pricing.dc.html` |
| Book a call | `/book-a-call` | Pillar 3, self-scheduling. Replaces `/contact/` | Facts | `BookCall.dc.html` |
| Leaders | `/leaders` | The leadership bench problem. Leadership Academy, executive coaching, hiring excellence. Fit video | Facts | `LeadershipBench.dc.html` |
| Teams (ALIGN) | `/teams` | The team performance problem. Five patterns, six phases, measured start and finish. Fit video | Facts | `TeamPerformance.dc.html` |
| Managers (ASCEND) | `/managers` | The frontline manager problem. Fit video | Facts | `FrontlineManagers.dc.html` |
| Coaching | `/coaching` | Pillar 1 comparison: executive vs performance coaching. Sales coaching as one line | Facts | `Coaching.dc.html` |
| Workshops | `/workshops` | Open registration: Elite5, the hiring certification, open Academy cohort | Facts | `Workshops.dc.html` |
| Results | `/results` | Pillar 1 reviews, Pillar 2 customer journey and claims-we-make videos. Story filter | Content | `Results.dc.html` |
| Client story (template) | `/results/[client]` | Pillar 2 customer journey; measured proof (baseline and retest) | Content | `CaseStory.dc.html` |
| Learning Center | `/learn` | Pillar 1, the Big 5 library, filterable by topic; also the assignment-selling library | Content | `LearningCenter.dc.html` |
| Article (template) | `/learn/[slug]` | First article: "How much does leadership development cost?" | Facts | `Article.dc.html` |
| About | `/about` | Pillar 4: partners, staff, coaches and facilitators, bio videos, standards, speaking | Facts | `About.dc.html` |
| Is LeadShift right for you? | `/fit` | Pillar 1: who we're for, who we're not for, what happens when it's not working | Facts | `Fit.dc.html` |
| For AI agents | `/for-ai-agents` | Fact sheet and citation guidance for AI tools | Ready, except date and URLs | `ForAI.dc.html` |
| Privacy policy | `/privacy-policy/` | Carry over word for word | Ready | live site |
| Fulfillment policy | `/fulfillment-policy/` | Carry over word for word | Ready | live site |
| Machine files | `/llms.txt`, `/sitemap.xml` | AI search and indexing | To build | |

Shared parts: header (logo, eight nav items, two calls to action), footer (descriptor, Leadership Lens signup, link columns, HQ, legal), video placeholder (used until each video is filmed). Sources: `SiteHeader.dc.html`, `SiteFooter.dc.html`, `VideoPoster.dc.html`.

Not yet placed: the current site's **Private Equity** page. See open decisions.

## Interactive tools

- **Growth Index picker.** Twelve priorities, pick exactly five, then "Continue" links to `https://leadshift-cci.vercel.app/start?priorities=<key1>,<key2>,...`. Keys, titles and descriptions are in `reference/homepage-concept.html` and `GrowthIndex.dc.html`. Josh wants the Growth Index hosted on the LeadShift site eventually; for the preview, link out.
- **Price estimator ("Find your likely starting point").** Who needs to grow (ALIGN, Academy, ASCEND, executive coaching, sales coaching, unsure), then count and cohort where they apply, then a likely program, inclusions, price range and total. Port the logic from the `P` object in `reference/homepage-concept.html`. Ranges: Academy 1 to 30 leaders (default 6) at $15,000 to $18,000 per seat; ASCEND 4 to 40 managers (default 12) at $4,000 to $6,000 per manager. "Unsure" routes to the Growth Index.
- **Booking.** The demo fakes a three-step flow. At launch, replace it with the partners' real calendar booking (HubSpot meeting links are the likely route; confirm). The preview may keep the fake flow, clearly marked.
- **Results story filter and Learning Center topic tabs.** Simple client-side filters. With few stories, hide the filter until there are enough to filter.
- **Leadership Lens signup.** Footer form. Wire to HubSpot at launch; the preview form should not submit anywhere.

## Launch rules

- No bracketed placeholder ships. If a fact isn't available, cut the section.
- Every current URL forwards to its new home (see `docs/06-migration-and-launch.md`).
- Structured data on every page matches `docs/03-facts.md`: organization, services with price ranges, FAQ.
- The old Hyannis address appears nowhere.
