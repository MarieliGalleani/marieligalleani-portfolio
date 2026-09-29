# DESIGN.md — Marieli Galleani Portfolio

Single source of truth for the visual language. Every value used in CSS lives here
and is exposed as a CSS custom property in [`src/styles/tokens.css`](src/styles/tokens.css).
Components **only** reference tokens (`var(--…)`) — never raw hex, px or font values.

> Workflow: change a value here → mirror it in `tokens.css` → check the page in `npm run dev`.
> Keep both files in sync; the names below are the exact custom property names.

---

## 1. Direction — premium editorial

- **Editorial, not "template".** A high-contrast display serif for headlines, a tight geometric sans
  for reading, generous whitespace and hairline rules instead of boxes and drop shadows.
- **Italic = emphasis.** One word per headline can go italic in the accent color
  (`<em>ships.</em>`). Never more than one per heading.
- **Numbered sections.** Every home section opens with an index (`01 — Services`) on a hairline.
- **Work is the hero.** Case studies are shown large, alternating image and text, with real
  product mockups and looping walkthrough videos.
- **Quiet texture.** A subtle film grain over the page makes flat color feel printed.
- **Two moods, same system.** *Paper* (light, bronze accent) and *Ink* (dark, champagne accent),
  following `prefers-color-scheme`. Only color tokens change.
- **Accessible by default.** All text pairs meet WCAG AA. Focus is always visible. Motion is
  CSS-only and turned off under `prefers-reduced-motion`.

---

## 2. Color

### Paper (light)

| Token | Value | Usage | Contrast on `--color-bg` |
|---|---|---|---|
| `--color-bg` | `#F3EFE8` | Page background (warm paper) | — |
| `--color-surface` | `#EAE4D9` | Alternating sections | — |
| `--color-surface-raised` | `#FBF9F5` | Raised elements | — |
| `--color-text` | `#151412` | Text, headings, primary button | 16.1 : 1 |
| `--color-text-muted` | `#5F5A52` | Secondary text, meta | 6.0 : 1 |
| `--color-border` | `#DCD5C8` | Hairlines (decorative) | — |
| `--color-border-strong` | `#BFB6A6` | Section rules, outlines | — |
| `--color-accent` | `#7A5426` | Bronze: italics, indexes, outcomes | 5.9 : 1 |
| `--color-accent-hover` | `#5F3F18` | Hover of accent | — |
| `--color-on-accent` | `#FBF9F5` | Text on accent | 6.4 : 1 |
| `--color-accent-soft` | `#EADFCB` | Badges | accent on it: 5.1 : 1 |
| `--color-success` | `#2F6B3F` | Availability dot | — |
| `--color-focus` | `#7A5426` | Focus ring | — |
| `--color-bg-translucent` | `rgb(243 239 232 / 0.82)` | Sticky header | — |
| `--grain-opacity` | `0.05` | Film grain strength | — |

### Ink (dark)

| Token | Value | Contrast on `--color-bg` |
|---|---|---|
| `--color-bg` | `#0C0C0D` | — |
| `--color-surface` | `#141416` | — |
| `--color-surface-raised` | `#1A1A1D` | — |
| `--color-text` | `#EEEAE3` | 16.3 : 1 |
| `--color-text-muted` | `#9C978E` | 6.7 : 1 |
| `--color-border` | `#232326` | — |
| `--color-border-strong` | `#34343A` | — |
| `--color-accent` | `#D9B783` (champagne) | 10.3 : 1 |
| `--color-accent-hover` | `#E8CBA0` | — |
| `--color-on-accent` | `#141210` | 9.8 : 1 |
| `--color-accent-soft` | `#221D16` | — |
| `--color-success` | `#8FCF9F` | — |
| `--color-focus` | `#E8CBA0` | — |
| `--color-bg-translucent` | `rgb(12 12 13 / 0.78)` | — |
| `--grain-opacity` | `0.07` | — |

Contrast can be re-checked with `node scripts/contrast.mjs '#fg' '#bg'`.

---

## 3. Typography

Self-hosted in `public/fonts/` (Latin subset, `font-display: swap`), both under the SIL Open Font License.

| Token | Value | Use |
|---|---|---|
| `--font-serif` / `--font-display` | `"Instrument Serif"` (400, 400 italic) | Headlines, wordmark, outcomes, prices, quotes |
| `--font-sans` | `"Inter Tight"` (variable 100–900) | Body, UI, labels |
| `--font-mono` | system mono | Section indexes (`01`) |

### Scale (fluid, mobile → desktop)

| Token | Value | ≈ px | Use |
|---|---|---|---|
| `--text-xs` | `0.75rem` | 12 | Labels, indexes (uppercase, wide tracking) |
| `--text-sm` | `0.875rem` | 14 | Meta, small print |
| `--text-base` | `1.0625rem` | 17 | Body |
| `--text-lg` | `clamp(1.125rem, …, 1.3125rem)` | 18 → 21 | Leads, case prose |
| `--text-xl` | `clamp(1.375rem, …, 1.875rem)` | 22 → 30 | Outcomes on cards, quotes |
| `--text-2xl` | `clamp(1.75rem, …, 2.625rem)` | 28 → 42 | Case titles on the home, service names |
| `--text-3xl` | `clamp(2.5rem, …, 4.5rem)` | 40 → 72 | Section titles, about statement |
| `--text-4xl` | `clamp(3rem, …, 6.5rem)` | 48 → 104 | Case page title, final CTA |
| `--text-display` | `clamp(3.5rem, …, 9.5rem)` | 56 → 152 | Hero headline, footer wordmark |

| Token | Value |
|---|---|
| `--leading-display` | `0.92` |
| `--leading-tight` | `1.02` |
| `--leading-snug` | `1.2` |
| `--leading-normal` | `1.6` |
| `--weight-regular` / `medium` / `semibold` / `bold` | `400` / `500` / `600` / `700` |
| `--tracking-display` | `-0.025em` |
| `--tracking-tight` | `-0.015em` |
| `--tracking-normal` | `0` |
| `--tracking-wide` | `0.14em` (uppercase labels) |
| `--measure` | `62ch` (prose) |
| `--measure-short` | `32ch` (outcomes, step text) |
| `--measure-headline` | `12ch` (display headlines) |
| `--measure-title` | `18ch` (section titles) |
| `--reel-item` | `clamp(18rem, 70vw, 34rem)` (showreel cover width) |

---

## 4. Spacing & layout

4 px base grid.

| Token | Value |
|---|---|
| `--space-1` … `--space-9` | `0.25` · `0.5` · `0.75` · `1` · `1.5` · `2` · `3` · `4` · `6` rem |
| `--space-10` | `9rem` |
| `--space-section` | `clamp(5rem, 3rem + 8vw, 11rem)` — vertical rhythm between sections |
| `--gutter` | `clamp(1.25rem, 0.5rem + 3vw, 3.5rem)` — page side padding |
| `--container-max` | `84rem` |
| `--container-narrow` | `46rem` (case prose) |
| `--size-touch` | `2.75rem` (44 px minimum touch target) |
| `--ratio-cover` | `16 / 10` (covers, videos, gallery) |

---

## 5. Radius

Restrained: hairlines and pills, few rounded boxes.

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `0.25rem` | Focus ring corners |
| `--radius-md` | `0.5rem` | Small controls |
| `--radius-lg` | `0.875rem` | Media frames (covers, videos, screens) |
| `--radius-pill` | `999px` | Buttons, tags, badges |

---

## 6. Shadows, borders, texture

| Token | Paper | Ink |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgb(21 20 18 / 0.06)` | `0 1px 2px rgb(0 0 0 / 0.5)` |
| `--shadow-md` | `0 12px 32px -12px rgb(21 20 18 / 0.18)` | `… rgb(0 0 0 / 0.6)` |
| `--shadow-lg` | `0 40px 80px -30px rgb(21 20 18 / 0.35)` | `… rgb(0 0 0 / 0.8)` (media only) |
| `--border-width` | `1px` | `1px` |
| `--underline-offset` | `0.22em` | `0.22em` |
| `--blur-md` | `14px` (header backdrop) | same |
| `--focus-ring` | `0 0 0 3px var(--color-bg), 0 0 0 5px var(--color-focus)` | same |

---

## 7. Motion

| Token | Value |
|---|---|
| `--duration-fast` | `180ms` |
| `--duration-base` | `320ms` |
| `--duration-slow` | `900ms` (hero entrance, image zoom) |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--scale-hover` | `1.03` (cover zoom on hover) |

- `.reveal`: elements rise in as they enter the viewport using CSS scroll-driven animations
  (`animation-timeline: view()`), only where supported.
- All motion is disabled under `prefers-reduced-motion: reduce`.

---

## 8. Breakpoints

CSS custom properties can't be used inside `@media`, so breakpoints are the only literal
values allowed in component CSS (besides structural values like `0`, `100%`, `1fr`, `auto`
and the `1px` of the `.visually-hidden` utility). Mobile-first.

| Name | Query |
|---|---|
| `sm` (max) | `@media (max-width: 29.99rem)` |
| `md` | `@media (min-width: 48rem)` |
| `lg` | `@media (min-width: 64rem)` |
| `xl` | `@media (min-width: 80rem)` |

---

## 9. Components (reference)

- **Section header** — `.section__index` (mono number in accent + uppercase label on a strong hairline)
  followed by `.section__title` (serif `--text-3xl`). `--split` puts the lead beside the title on `lg`.
- **Button** — pill. `primary` = text-colored fill that turns accent on hover; `secondary` = outline.
  The arrow nudges right on hover.
- **Service row** — index · name (serif, italic when featured) · for/deliverables · timeline and
  serif price. Hairlines between rows, surface tint on hover.
- **Case row** — large media frame (7/12) + text (5/12), alternating sides. Serif title,
  italic accent outcome, outlined tags, "Read case study →".
- **Outcome (case page)** — serif italic `--text-3xl` in accent, between two strong hairlines.
- **Tag** — outlined pill, `--text-xs`, muted text.
- **Media frame** — `--radius-lg` + `--shadow-lg`, used by covers, videos and gallery images.
- **Wordmark** — "Marieli *Galleani*": serif, surname italic in accent (header and footer).
