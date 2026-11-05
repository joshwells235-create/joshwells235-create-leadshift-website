# Endless Customers check

How the demo maps to the framework, element by element. "Built" means the page structure exists in the demo. "Produced" means the real content exists. Most gaps are production gaps, not design gaps.

Framework names follow IMPACT's own write-up: [The four pillars of a known, trusted brand](https://impactplus.com/blog/the-four-pillars-of-a-known-trusted-brand-marcus-sheridans-blueprint).

## Pillar 1: Say what others in your space aren't willing to say

| Element | Where in the demo | Built | Produced | What's missing |
|---|---|---|---|---|
| Cost and price | Pricing page, estimator, homepage price list, cost article | Yes | Mostly | Sprint lengths; what's included vs billed separately; the comparing-quotes sections of the cost article |
| Problems | Home (three problems), Leaders, Teams, Managers, FAQs | Yes | Mostly | Problem articles ("Signs your leadership team isn't a team" and others) |
| Versus and comparisons | Coaching (executive vs performance), Leaders (open vs private cohort), ALIGN FAQ (vs an off-site retreat), cost article | Yes | Partly | The ALIGN-vs-off-site answer; the cost article's comparisons of workshop vs program, solo coach vs firm, national firms |
| Reviews | Results page review section | Yes | No | Any collected reviews, a review source, a way to ask for them, a critical review and the reply |
| Best in class | Learning Center "Best of" tab, with two placeholder titles | Partly | No | Sheridan's version names the best options, competitors included. Needs a partner decision on whether LeadShift will publish one |
| Who it's not for | Fit page, homepage fit section, program FAQs | Yes | No | Every "not a fit" line is a placeholder; also "when it's not working" and whether to offer a guarantee |

## Pillar 2: Show what others in your space aren't willing to show (the Selling 7)

Every video slot exists in the demo as a "To film" placeholder. None is produced.

| Selling 7 video | Where it goes | Who's on camera (as planned in the demo) |
|---|---|---|
| 80% video (answers to the questions asked on every first call) | Learning Center video library | A partner; questions still to be listed |
| Bio videos | About, Home partners, Coaching | Each partner and coach, about 90 seconds |
| Product/service fit videos | Leaders, Teams, Managers | Practice lead or facilitator; Josh for ALIGN |
| Landing page videos | Home, Growth Index, Book a call, Workshops | A partner |
| Cost and price videos | Pricing, cost article, Learning Center | A partner |
| Customer journey videos | Client story pages, Results | The client's CEO |
| Claims-we-make videos | Results, "Claims we make" section | A partner, with proof on screen |

## Pillar 3: Sell in a way others in your space aren't willing to sell

| Element | Where | Status |
|---|---|---|
| Self-assessment | Growth Index | Built and working in the demo. It ends in a partner walkthrough, so it isn't instant. An instant short version (an idea Sydney raised on Aug 10) would close that gap. |
| Self-pricing | Estimator on Pricing | Built, ported from the concept |
| Self-configuration | Estimator count and cohort controls | Partly: only Academy and ASCEND have options |
| Self-selection | The three problems; the estimator's first question | Partly: no dedicated "which program fits" path |
| Self-scheduling | Book a call | Built as a mock; needs the partners' real calendars |
| Assignment selling | Learning Center as a sendable library | Not built as a practice. Needs articles, and Joe's sales process using them |

## Pillar 4: Be more human than others in your space are willing to be

| Element | Where | Status |
|---|---|---|
| Faces and bios | About, Home, Coaching | Initials stand in for photos; bio text is placeholder. Partner credentials are off the site for now (Josh, 2026-11-02) |
| Leader visibility | Leadership Lens signup, speaking section on About | Partly: speaking details are placeholders; newsletter cadence to confirm |
| One-to-one videos | Not a website element | A sales habit for Joe and the partners, outside the build |
| Your own voice | Writing rules in `CLAUDE.md` | Enforced by rule. Josh's voice guide lives in Notion ("Josh's Email Voice Guide") |

## AI search

| Element | Status |
|---|---|
| For AI agents page | Built in the demo; needs a last-updated date and a corrections contact |
| Structured data (organization, services with prices, FAQ) | Exists in the concept's JSON-LD; carry it to every page |
| `llms.txt` and `sitemap.xml` | Built in the preview (2026-11-05), generated from the site's data |

## The gaps, in order of what moves trust most

1. **Proof.** One named ALIGN client with a baseline and retest outweighs everything else on the site. Reviews come second. No Growth Index retests exist yet.
2. **Video.** Start with three: partner bio videos, the ALIGN fit video, and the cost video. The pricing section is already the cost video's script.
3. **The Big 5 library.** A first batch of buyer-question articles. Candidates in the demo: what leadership development costs, open vs private Academy cohort, executive vs performance coaching, when leadership development won't fix the problem. These are examples to argue with, not a plan.
4. **Who it's not for.** Fill the Fit page. It's the cheapest trust signal on the list.
5. **Real photos.** Partner and coach headshots.

The site can launch with gaps 1 to 3 still in progress, as long as no placeholder ships. Gap 4 should be filled before launch, because the Fit page and every program page refer to it.
