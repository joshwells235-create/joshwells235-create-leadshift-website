# Demo canvas files

These are the pages of the design canvas "LeadShift Website Demo," exported as of 2026-11-05. Use them for **page structure, section order and copy**. Don't copy the markup into the production site.

The format belongs to the canvas tool:
- `<x-dc>` wraps the page; `<helmet>` holds fonts and a few base styles.
- `{{name}}` inserts a value computed in the `renderVals()` function in the script block at the bottom of each file.
- `<sc-for list="{{items}}" as="item">` repeats; `<sc-if value="{{flag}}">` shows or hides.
- `<dc-import name="SiteHeader" ...>` mounts another file in this folder (`SiteHeader.dc.html`, `SiteFooter.dc.html`, `VideoPoster.dc.html`); its attributes are that component's inputs.
- Image URLs starting `/_blob/` point to files stored in the canvas. The same images are in `../../assets/`.
- All styles are inline. The values match `../homepage-concept.html`.

The interactive logic (Growth Index picker, price estimator, booking steps, story filter, Learning Center tabs) is in each file's `renderVals()` and is a readable spec for the real implementation. `canvas.json` lists the pages and their canvas layout.

| File | Page |
|---|---|
| `Main.dc.html` | Home |
| `GrowthIndex.dc.html` | Growth Index |
| `Pricing.dc.html` | Pricing and estimator |
| `BookCall.dc.html` | Book a call |
| `LeadershipBench.dc.html` | Leaders (Leadership Academy, executive coaching, hiring excellence) |
| `TeamPerformance.dc.html` | Teams (ALIGN) |
| `FrontlineManagers.dc.html` | Managers (ASCEND) |
| `Coaching.dc.html` | Coaching |
| `Workshops.dc.html` | Open workshops |
| `Results.dc.html` | Results and reviews |
| `CaseStory.dc.html` | Client story template |
| `LearningCenter.dc.html` | Learning Center |
| `Article.dc.html` | Article template: what leadership development costs |
| `About.dc.html` | About and team |
| `Fit.dc.html` | Is LeadShift right for you? |
| `ForAI.dc.html` | For AI agents |
| `SiteHeader.dc.html`, `SiteFooter.dc.html`, `VideoPoster.dc.html` | Shared parts |
