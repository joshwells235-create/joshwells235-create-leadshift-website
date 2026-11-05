# Design system

The source of truth is the CSS in `reference/homepage-concept.html` (the `<style>` block near the top, after the embedded fonts). Copy values from it exactly. This page summarizes it so you know what to look for. The demo canvas uses the same values as inline styles.

## Tokens (from the concept's `:root`)

```css
--navy: #101D51;       /* headlines, primary text on light */
--night: #0A1238;      /* dark bands: hero, closing, footer */
--night-2: #111D4E;
--blue: #007EFA;       /* accents, quote marks, rules */
--blue-deep: #0068CE;  /* primary buttons, links, labels on light */
--sky: #8CC2FF;        /* labels and accents on dark */
--paper: #FFFFFF;
--mist: #F5F7FB;       /* alternate section fill */
--line: #E3E7F0;       /* hairlines */
--line-2: #D4DAE7;     /* stronger hairlines, ruled lists */
--text: #101D51;
--text-2: #454E70;     /* body */
--muted: #5B6482;      /* captions, meta */
--on-dark: #FFFFFF;
--on-dark-2: rgba(255,255,255,0.74);
--on-dark-3: rgba(255,255,255,0.58);
--line-dark: rgba(255,255,255,0.12);

--display: 'Instrument Sans', 'Raleway', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
--body: 'Raleway', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

--r-sm: 6px;  --r-md: 10px;  --r-lg: 16px;  --r-xl: 22px;

--ease: cubic-bezier(0.23, 1, 0.32, 1);
--ease-io: cubic-bezier(0.77, 0, 0.175, 1);

--gx: clamp(20px, 4vw, 40px);          /* side gutter */
--section: clamp(88px, 11vw, 152px);   /* section padding */
```

Content width: 1200px plus gutters. Layout grid: 12 columns, 24px column gap.

The brand magenta (#EA0C67) from the LeadShift deck and proposal system is not used on the website.

## Type

- Body: Raleway, 17px, weight 450, line-height 1.62, `text-wrap: pretty`.
- Headings: Instrument Sans, weight 560, `text-wrap: balance`.
- Hero h1: `clamp(46px, 7.6vw, 104px)`, line-height 0.98, letter-spacing -0.04em, max-width 15ch.
- Section h2: `clamp(34px, 4.4vw, 58px)`, line-height 1.04, letter-spacing -0.03em.
- Lead paragraph: `clamp(18px, 1.5vw, 20px)`, line-height 1.6.
- Label (eyebrow): Instrument Sans 14px, weight 560, letter-spacing 0.01em, blue-deep on light, sky on dark. Sentence case, never all caps.
- Numbers: `font-variant-numeric: tabular-nums` for prices and stats.
- Fonts: `assets/fonts/` holds the Latin-subset variable files embedded in the concept (Instrument Sans 400 to 700, Raleway 100 to 900). Both families are on Google Fonts if full character sets are needed.

## Components (class names from the concept)

- **Buttons** `.btn`: 48px minimum height (52px in heroes), 6px radius, Instrument Sans 16px weight 600, optional 16px arrow icon that nudges 3px right on hover. Variants: `.btn-primary` (blue-deep), `.btn-light` (white on dark), `.btn-ghost` (outline on dark), `.btn-quiet` (outline on light).
- **Text link** `.textlink`: Instrument Sans weight 600, blue-deep (sky on dark), arrow icon.
- **Chip** `.chip`: small bordered label (6px radius, faint white fill on dark) with a 7px sky dot, used above the hero h1.
- **Placeholder** `.ph`: dashed #9DB8E0 border, #F3F8FF fill, blue-deep text, 5px radius. On dark: sky text, dashed sky border at 50%. Every unfinished fact uses it.
- **Hero**: night band with a soft blue radial glow from the top center, centered copy, and the sample report pages fanned across the line where night meets white (the "fold"). See `.hero`, `.hero-light`, `.spread`, `.rp`.
- **Proof**: large pull quote with a hanging blue opening mark, a 28px blue rule before the attribution, a facts row (`.facts`) with tabular numbers, and a slow scrolling logo strip (`.marquee`, 70s loop, pauses on hover, static under reduced motion).
- **Problem rows** `.prob`: ruled rows on the 12-column grid (label, headline, body with link). The demo adds 01, 02, 03 numerals.
- **Stakes box** `.stakes`: mist panel with a large quote and one button.
- **Steps** `.steps3`: ruled list with 40px icon boxes (white, hairline border, blue-deep stroke icons).
- **Report leaf** `.leaf`: a report page with a soft layered shadow and caption.
- **Price table** `.ptable`: white, hairline border, 16px radius; amounts in Instrument Sans with tabular numbers.
- **FAQ** `.qa`: `<details>` rows with a 30px plus-in-circle that rotates to a filled navy cross when open. Sticky intro column on wide screens only.
- **Portraits** `.portrait`: night square, 22px radius, faint blue glow, large initials until real photos exist.
- **Growth Index picker** `.gi-start`, `.pri`: white card on mist; 4-column grid of priority buttons; selected = navy fill, white text, blue check badge; others fade to 45% once five are chosen.
- **Video placeholder** (demo `VideoPoster.dc.html`): 16:9 night panel with a faint glow, camera-frame corner marks, a chip showing type and length, a "To film" tag, and a white play button beside the title and a one-line note on what the video covers.
- **Closing band**: night with a glow from the top center, centered h2, lead and two buttons.
- **Footer** `.foot`: night, brand column, link columns, Leadership Lens signup card, legal row.

## Motion

- Hover transitions 160 to 180ms. Arrow icons move 3px on hover. Buttons scale to 0.98 when pressed.
- Scroll reveal: `[data-reveal]` fades up 16px over 600 to 700ms with `--ease`, staggered 70ms per step. Only when `prefers-reduced-motion: no-preference`.
- The report pages lift slightly on hover.
- Hover effects only under `@media (hover: hover) and (pointer: fine)`.

## Responsive

The concept's breakpoints: 1080px, 900px, 760px, 640px and 560px. At phone widths the 12-column grids collapse to one column, the report spread hides its outer pages, and the hero notes stack. Copy these media queries from the source.

## Where the build departs from the concept

Kept small and listed here so nothing drifts silently. Each is marked in `src/styles/site.css`.

- **Header.** Carries the demo's eight links and two calls to action, so it switches to the menu at 1180px (the concept switches at 900px with five links). Header and menu buttons are 44px tall (concept: 40px) to meet the 44px touch-target rule.
- **Buttons in the hero and closing band** are 52px tall, as this design system specifies.
- **Problem numerals (01, 02, 03)** use #6B7391. The demo's #8A93AE falls under 4.5:1 contrast on white.
- **Footer column titles** are `h2` styled exactly like the concept's footer `h4`, so screen readers get a correct heading order.
- **Sections that exist only in the demo** (how it works, the client story card, the price list, fit lists, Learning Center rows, partner bios, video placeholder, footer signup) use the demo's inline values, including its 5:7 and 4:8 column splits.

## Things Josh has said no to

- Gimmicky or blocky layouts (2026-10-19).
- Generic AI-looking pages: rows of identical rounded cards, left-border accent cards, emoji, decorative gradient washes.
- Pink or magenta accents in participant worksheets (2026-10-05). Treat it as a signal of taste for the site too, and ask before using magenta anywhere.
