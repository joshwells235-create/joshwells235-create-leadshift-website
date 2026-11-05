# Open decisions

When one closes, record the answer and date in `memory.md` and move it to the Closed list at the bottom. "Needed for" says what it blocks.

## Build and ownership

| # | Decision | Options and context | Needed for |
|---|---|---|---|
| 1 | Final platform | (a) Custom WordPress theme written in code, on the current host; keeps the normal WordPress editor for articles. Claude's recommendation. (b) Code site on Vercel, same account as the Growth Index; fastest, most faithful, but publishing runs through Josh and Claude. (c) HubSpot Content Hub, which LeadShift doesn't currently own. Divi is ruled out in practice: the premium parts would be custom code inside Divi anyway. Tie-breaker: who publishes the weekly article? Josh's condition (2026-11-05): it has to be something LeadShift can stand up at leadshift.com | Launch |
| 3 | Content owner | IMPACT asks a client's point person for 8 to 12 hours a week, plus 3 to 5 for a reviewer. Who is it at LeadShift? | Content program |
| 4 | Outside help | Pay IMPACT for Endless Customers coaching, hire a part-time content producer, or neither. Part of the 2027 budget discussion | Content program |

## Pages and positioning

| # | Decision | Options and context | Needed for |
|---|---|---|---|
| 5 | Private Equity page | The live site has `/private-equity-partnerships/`; the demo doesn't. Keep it, fold it into another page, or drop it and forward the URL | Launch |
| 6 | Hiring certification page | The live registration page is "Predictive Index Professional Certification," which conflicts with keeping PI off the site. Name it, rename it, or keep it as a separate registration page | Launch |
| 7 | Registration and payment | How do people register and pay for the certification and Elite5 today? The live fulfillment policy suggests online payment. The new pages must not break it | Launch |
| 10 | Leadership Lens cadence | Concept says every other week; Josh has also described it as weekly | Launch |
| 11 | Sales coaching details | From Joe, drawn from the first page of his AI Sales Studio | Launch |
| 12 | Program details still missing | What moves an Academy seat inside its range; sprint length and sessions for performance and sales coaching; Academy minimum group size and private cohort pricing; ASCEND group sizes and which parts are in person; what's included vs billed separately (materials, travel, venue); payment schedule | Launch |
| 13 | Who it's not for | The "not a fit" list, what happens when a program isn't working, and whether to offer a guarantee | Launch |
| 15 | Best-in-class content | Endless Customers' "best of" articles name the best options, competitors included. Will LeadShift publish one? | Content program |

## Proof

| # | Decision | Options and context | Needed for |
|---|---|---|---|
| 16 | First named client stories | Which ALIGN clients agree to be named with their baseline and retest? | Content program |
| 17 | Reviews | Where verified reviews will live, and when and how LeadShift asks for them | Content program |
| 18 | Headshots | Photo shoot for partners and coaches | Launch (or launch with initials) |

## Tools

| # | Decision | Options and context | Needed for |
|---|---|---|---|
| 19 | Real booking | Which partners take introductory calls, and through what (HubSpot meeting links are the likely route) | Launch |
| 20 | Growth Index on the LeadShift site | Josh wants it hosted on the site. Link out to the app, embed it, or move it under a leadshift.com address | Later |
| 21 | Instant Growth Index | A short version that grades a visitor in minutes (Sydney's Aug 10 idea), ahead of the full assessment | Later |

## Closed

| Date | Decision | Answer |
|---|---|---|
| 2026-08-13 | Price transparency | Publish ranges per package, with the reasons ranges exist |
| 2026-08-14 | Naming PI | Never on the site (see #6 for the certification page) |
| 2026-11-02 | Problem order | Leadership bench, team performance, frontline managers; sales as one line |
| 2026-11-05 | Who builds | Claude builds; Kailyn is not expected to code |
| 2026-11-05 | #2 Preview stack and hosting | Astro, static output, plain CSS, vanilla JS. Vercel previews in the Leadshift team with Vercel Authentication and a shareable link; noindex. Ask before the first deploy |
| 2026-11-05 | #8 Partner titles | Joe Cundall, Chief Executive Officer; Kailyn Graham, Chief Operating Officer; Josh Wells, President |
| 2026-11-05 | #9 Label for the 1099 coaches and facilitators | Plain heading "Coaches and facilitators", no group name, listed separately from staff |
| 2026-11-05 | #14 Naming the ALIGN team assessment | Name it: The Table Group's Five Dysfunctions of a Team assessment |
| 2026-11-05 | Page URLs | The proposed URL map in `docs/01-build-brief.md` stands; the Academy stays a section of `/leaders` |
