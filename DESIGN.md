# DESIGN.md — Galleani (Brazil & LatAm market-entry agency)

Single source of truth for the visual language. Every value used in CSS lives here
and is exposed as a CSS custom property in [`src/styles/tokens.css`](src/styles/tokens.css).
Components **only** reference tokens (`var(--…)`) — never raw hex, px or font values.

> Workflow: change a value here → mirror it in `tokens.css` → check the page in `npm run dev`.
> Keep both files in sync; the names below are the exact custom property names.

---

## 1. Direction — modern SaaS agency

The audience is foreign founders and marketing leads deciding whether to trust a partner
with their Brazil / Latin America launch. The page has to read as **established, clear and safe**.

- **Light canvas, dark "inverse" bands.** Hero, featured pricing card, final CTA and footer sit on
  a near-black band with a soft emerald/blue glow and a faint grid. Everything else is light.
- **Rounded cards and bento grids.** Services, challenges, process and pricing are cards with
  `--radius-xl`, a hairline border and a light shadow.
- **Centered section headers.** A pill badge (with an accent dot) → title → lead.
- **One serif italic accent per headline.** `<em>` inside h1–h3 renders in Instrument Serif
  italic, accent color (`with <em>confidence.</em>`). Never more than one per heading.
- **Proof early.** Markets marquee and sourced stats right after the hero; real product work
  mid-page; pricing and FAQ before the final CTA.

---

## 2. Color

### Light canvas

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#f6f7f9` | Page background |
| `--color-surface` | `#eef1f5` | Alternate sections, tags |
| `--color-surface-raised` | `#ffffff` | Cards |
| `--color-text` | `#0b0f17` | Body and headings |
| `--color-text-muted` | `#586273` | Secondary text (AA on bg and surface) |
| `--color-border` | `#e3e7ee` | Card borders, hairlines |
| `--color-border-strong` | `#cfd6e0` | Secondary button, underlines |
| `--color-accent` | `#08734f` | Emerald — links, primary button, `<em>` |
| `--color-accent-hover` | `#065c3f` | Hover |
| `--color-on-accent` | `#ffffff` | Text on accent |
| `--color-accent-soft` | `#e3f4ec` | Icon tiles, badge dot halo |
| `--color-success` | `#08734f` | Check marks |
| `--color-focus` | `#08734f` | Focus ring |
| `--color-bg-translucent` | `rgb(246 247 249 / 0.8)` | Blurred overlays |

### Dark mode (`prefers-color-scheme: dark`)

| Token | Value |
|---|---|
| `--color-bg` | `#0a0d13` |
| `--color-surface` | `#10151d` |
| `--color-surface-raised` | `#141a24` |
| `--color-text` | `#f3f5f8` |
| `--color-text-muted` | `#9aa4b2` |
| `--color-border` / `--color-border-strong` | `#1f2733` / `#2c3644` |
| `--color-accent` / `--color-accent-hover` | `#3ddc97` / `#6ee7b7` |
| `--color-on-accent` | `#06120c` |
| `--color-accent-soft` | `#0f2a1f` |
| `--color-success` / `--color-focus` | `#3ddc97` / `#6ee7b7` |
| `--color-bg-translucent` | `rgb(10 13 19 / 0.78)` |

### Inverse bands (same in both modes)

The `.inverse` class remaps the `--color-*` tokens to these, so any component renders on dark.

| Token | Value |
|---|---|
| `--inverse-bg` | `#070a0f` |
| `--inverse-surface` | `#0f141c` |
| `--inverse-surface-2` | `#151c27` |
| `--inverse-text` | `#f3f5f8` |
| `--inverse-muted` | `#9aa4b2` |
| `--inverse-border` | `#1c2430` |
| `--inverse-accent` | `#3ddc97` |
| `--inverse-on-accent` | `#06120c` |
| `--inverse-accent-soft` | `rgb(61 220 151 / 0.12)` |
| `--glow-1` | `rgb(61 220 151 / 0.28)` — emerald glow, top left |
| `--glow-2` | `rgb(56 128 255 / 0.22)` — blue glow, top right |
| `--grid-line` | `rgb(255 255 255 / 0.05)` — background grid |

Check any new pair with `node scripts/contrast.mjs <fg> <bg>` (AA: 4.5:1 text, 3:1 large text/UI).

---

## 3. Typography

| Token | Value |
|---|---|
| `--font-sans` | Inter Tight (variable, self-hosted), system fallbacks |
| `--font-serif` | Instrument Serif italic (self-hosted) — only for `<em>` accents |
| `--font-display` | `var(--font-sans)` |
| `--font-mono` | `ui-monospace, "SF Mono", …` |

### Scale (fluid, mobile → desktop)

| Token | Value |
|---|---|
| `--text-xs` | `0.75rem` |
| `--text-sm` | `0.875rem` |
| `--text-base` | `1rem` |
| `--text-lg` | `clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)` |
| `--text-xl` | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` |
| `--text-2xl` | `clamp(1.5rem, 1.25rem + 1.1vw, 2.125rem)` |
| `--text-3xl` | `clamp(2rem, 1.5rem + 2.4vw, 3.5rem)` — section titles |
| `--text-4xl` | `clamp(2.5rem, 1.6rem + 4vw, 4.75rem)` |
| `--text-display` | `clamp(2.75rem, 1.4rem + 5.6vw, 6rem)` — hero |

| Token | Value |
|---|---|
| `--leading-display` / `--leading-tight` / `--leading-snug` / `--leading-normal` | `1` / `1.08` / `1.3` / `1.6` |
| `--weight-regular` / `--weight-medium` / `--weight-semibold` / `--weight-bold` | `400` / `500` / `600` / `700` |
| `--tracking-display` / `--tracking-tight` / `--tracking-normal` / `--tracking-wide` | `-0.045em` / `-0.03em` / `0` / `0.12em` |
| `--measure` / `--measure-short` / `--measure-title` / `--measure-headline` | `62ch` / `34ch` / `20ch` / `16ch` |
| `--ratio-cover` | `16 / 10` |

---

## 4. Spacing & layout

| Token | Value |
|---|---|
| `--space-1` … `--space-10` | `0.25` · `0.5` · `0.75` · `1` · `1.5` · `2` · `3` · `4` · `6` · `9` rem |
| `--space-section` | `clamp(4.5rem, 3rem + 6vw, 8.5rem)` |
| `--gutter` | `clamp(1.25rem, 0.5rem + 3vw, 3rem)` |
| `--container-max` / `--container-narrow` | `76rem` / `46rem` |
| `--size-touch` | `2.75rem` (44px minimum touch target) |

---

## 5. Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `0.5rem` | Focus ring, small chips |
| `--radius-md` | `0.75rem` | Icon tiles |
| `--radius-lg` | `1.25rem` | Media frames |
| `--radius-xl` | `1.75rem` | Cards, CTA box |
| `--radius-pill` | `999px` | Buttons, badges, tags |

---

## 6. Shadows & borders

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px rgb(11 15 23 / 0.06)` |
| `--shadow-md` | `0 10px 30px -12px rgb(11 15 23 / 0.16)` |
| `--shadow-lg` | `0 30px 70px -25px rgb(11 15 23 / 0.35)` |
| `--shadow-accent` | `0 8px 24px -10px var(--color-accent)` — primary button glow |
| `--border-width` | `1px` |
| `--underline-offset` | `0.2em` |
| `--blur-md` | `16px` |
| `--focus-ring` | `0 0 0 3px var(--color-bg), 0 0 0 5px var(--color-focus)` |

Dark mode deepens the three neutral shadows (`rgb(0 0 0 / 0.5–0.8)`).

---

## 7. Motion

| Token | Value |
|---|---|
| `--duration-fast` / `--duration-base` / `--duration-slow` | `160ms` / `280ms` / `800ms` |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--scale-hover` | `1.02` (cover zoom on hover) |
| `--marquee-duration` | `40s` (markets strip) |

- `.reveal`: CSS scroll-driven rise-in (`animation-timeline: view()`), only where supported.
- The markets marquee pauses on hover and is static under reduced motion.
- All durations drop to `0ms` under `prefers-reduced-motion: reduce`; videos don't autoplay.

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

- **Inverse band** — `.inverse`: dark background, glow (`::before`) and masked grid (`::after`).
- **Section header** — `.section__header` (centered; `--left` variant) with `.badge`,
  `.section__title` (`--text-3xl`, `--tracking-display`) and `.section__lead`.
- **Badge** — pill, uppercase `--text-xs`, accent dot with a soft halo.
- **Button** — pill. `primary` = accent fill + `--shadow-accent`; `secondary` = raised surface with
  a strong border. The arrow nudges right on hover. `--small` for the header.
- **Card** — `.card` (raised surface, border, `--radius-xl`); `.card--hover` lifts on hover.
- **Icon tile** — `.icon-tile`: 44px square, accent-soft background, accent stroke icon
  (`src/components/Icon.astro`).
- **Services bento** — 3 columns on `lg`; "wide" services span 2.
- **Pricing** — three cards; the featured plan uses `.inverse`.
- **FAQ** — native `<details>/<summary>` with a plus icon; FAQPage JSON-LD.
- **Case card** — cover in a gradient frame, eyebrow, title (link overlay), accent outcome, tags.
- **Media frame** — `.frame`: `--radius-lg` + `--shadow-lg` for covers, videos and galleries.
- **Wordmark** — emerald rounded "G" mark + agency name.
