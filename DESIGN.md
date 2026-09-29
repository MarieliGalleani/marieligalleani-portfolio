# DESIGN.md — Marieli Galleani Portfolio

Single source of truth for the visual language. Every value used in CSS lives here
and is exposed as a CSS custom property in [`src/styles/tokens.css`](src/styles/tokens.css).
Components **only** reference tokens (`var(--…)`) — never raw hex, px or font values.

> Workflow: change a value here → mirror it in `tokens.css` → check the page in `npm run dev`.
> Keep both files in sync; the names below are the exact custom property names.

---

## 1. Principles

- **Confident & editorial.** Big, tight headlines; calm body copy; lots of air.
- **Outcome first.** Results (numbers, shipped products) get the accent treatment.
- **One accent.** Electric indigo is used only for actions, focus and highlights.
- **Accessible by default.** All text pairs meet WCAG AA (most meet AAA). Focus is always visible.
- **Light & dark.** Dark mode follows `prefers-color-scheme`; only color tokens change.

---

## 2. Color

### Light (default)

| Token | Value | Usage | Contrast on `--color-bg` |
|---|---|---|---|
| `--color-bg` | `#FAF8F5` | Page background (warm off-white) | — |
| `--color-surface` | `#F1EEE9` | Alternating sections, cards | — |
| `--color-surface-raised` | `#FFFFFF` | Raised cards | — |
| `--color-text` | `#16151A` | Primary text, headings | 17.1 : 1 |
| `--color-text-muted` | `#5B5862` | Secondary text, meta | 6.6 : 1 |
| `--color-border` | `#E2DED7` | Hairlines, dividers (decorative) | — |
| `--color-border-strong` | `#C9C4BB` | Card borders on hover | — |
| `--color-accent` | `#4527D9` | Primary buttons, links, highlights | 7.8 : 1 |
| `--color-accent-hover` | `#3519B8` | Hover/active of accent | — |
| `--color-on-accent` | `#FFFFFF` | Text on accent | 8.3 : 1 |
| `--color-accent-soft` | `#ECE8FF` | Tag/pill background, outcome box | accent on it: 6.9 : 1 |
| `--color-success` | `#0E7A4F` | Positive metrics | 5.1 : 1 |
| `--color-focus` | `#4527D9` | Focus ring | — |
| `--color-bg-translucent` | `rgb(250 248 245 / 0.88)` | Sticky header background | — |

### Dark (`prefers-color-scheme: dark`)

| Token | Value | Contrast on `--color-bg` |
|---|---|---|
| `--color-bg` | `#111014` | — |
| `--color-surface` | `#18171C` | — |
| `--color-surface-raised` | `#1B1A20` | — |
| `--color-text` | `#F3F1EC` | 16.8 : 1 |
| `--color-text-muted` | `#A7A3AE` | 7.7 : 1 |
| `--color-border` | `#2A2830` | — |
| `--color-border-strong` | `#3D3A45` | — |
| `--color-accent` | `#A99BFF` | 8.0 : 1 |
| `--color-accent-hover` | `#C3B9FF` | — |
| `--color-on-accent` | `#111014` | 8.0 : 1 |
| `--color-accent-soft` | `#231F3D` | — |
| `--color-success` | `#56D39B` | 9.2 : 1 |
| `--color-focus` | `#C3B9FF` | — |
| `--color-bg-translucent` | `rgb(17 16 20 / 0.88)` | — |

Contrast can be re-checked with `node scripts/contrast.mjs '#fg' '#bg'`.

---

## 3. Typography

System font stacks — zero font downloads, great performance. To use a brand font later,
self-host it in `public/fonts/`, add an `@font-face` in `global.css` and put its name first
in the stack below.

| Token | Value |
|---|---|
| `--font-sans` | `"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--font-display` | same as `--font-sans` (headlines use weight + tracking for character) |
| `--font-mono` | `ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace` |

### Scale (fluid, mobile → desktop)

| Token | Value | ≈ px (mobile → desktop) | Use |
|---|---|---|---|
| `--text-xs` | `0.8125rem` | 13 | Tags, eyebrow |
| `--text-sm` | `0.9375rem` | 15 | Meta, small print |
| `--text-base` | `1.0625rem` | 17 | Body |
| `--text-lg` | `clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)` | 18 → 21 | Lead paragraph |
| `--text-xl` | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` | 20 → 24 | Card titles |
| `--text-2xl` | `clamp(1.5rem, 1.25rem + 1vw, 2rem)` | 24 → 32 | H3 / big numbers |
| `--text-3xl` | `clamp(1.875rem, 1.4rem + 2vw, 2.75rem)` | 30 → 44 | Section titles (H2) |
| `--text-4xl` | `clamp(2.5rem, 1.6rem + 4vw, 4.5rem)` | 40 → 72 | Hero (H1) |

| Token | Value |
|---|---|
| `--leading-tight` | `1.05` |
| `--leading-snug` | `1.25` |
| `--leading-normal` | `1.6` |
| `--weight-regular` | `400` |
| `--weight-medium` | `500` |
| `--weight-semibold` | `600` |
| `--weight-bold` | `700` |
| `--tracking-tight` | `-0.03em` |
| `--tracking-normal` | `0` |
| `--tracking-wide` | `0.08em` (uppercase eyebrows) |
| `--measure` | `65ch` (max line length for prose) |
| `--measure-headline` | `14ch` (hero headline width) |
| `--ratio-cover` | `16 / 10` (case cover images) |

---

## 4. Spacing

4 px base grid.

| Token | Value | px |
|---|---|---|
| `--space-1` | `0.25rem` | 4 |
| `--space-2` | `0.5rem` | 8 |
| `--space-3` | `0.75rem` | 12 |
| `--space-4` | `1rem` | 16 |
| `--space-5` | `1.5rem` | 24 |
| `--space-6` | `2rem` | 32 |
| `--space-7` | `3rem` | 48 |
| `--space-8` | `4rem` | 64 |
| `--space-9` | `6rem` | 96 |
| `--space-section` | `clamp(4rem, 3rem + 5vw, 8rem)` | 64 → 128 (vertical rhythm between sections) |
| `--gutter` | `clamp(1.25rem, 0.8rem + 2vw, 2.5rem)` | page side padding |
| `--container-max` | `72rem` | 1152 |
| `--container-narrow` | `44rem` | 704 (prose/case body) |
| `--size-touch` | `2.75rem` | 44 (minimum touch target for buttons/links) |

---

## 5. Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `0.375rem` | Tags, small elements |
| `--radius-md` | `0.75rem` | Buttons, inputs |
| `--radius-lg` | `1.25rem` | Cards, images |
| `--radius-pill` | `999px` | Pills, chips |

---

## 6. Shadows & borders

| Token | Light | Dark |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgb(22 21 26 / 0.06)` | `0 1px 2px rgb(0 0 0 / 0.4)` |
| `--shadow-md` | `0 4px 16px -4px rgb(22 21 26 / 0.10)` | `0 4px 16px -4px rgb(0 0 0 / 0.5)` |
| `--shadow-lg` | `0 16px 40px -12px rgb(22 21 26 / 0.18)` | `0 16px 40px -12px rgb(0 0 0 / 0.6)` |
| `--border-width` | `1px` | `1px` |
| `--underline-offset` | `0.2em` | `0.2em` (link underlines) |
| `--blur-md` | `12px` | `12px` (header backdrop blur) |
| `--focus-ring` | `0 0 0 3px var(--color-bg), 0 0 0 5px var(--color-focus)` | same |

---

## 7. Motion

| Token | Value |
|---|---|
| `--duration-fast` | `150ms` |
| `--duration-base` | `250ms` |
| `--ease-out` | `cubic-bezier(0.2, 0.8, 0.2, 1)` |

All motion is disabled under `prefers-reduced-motion: reduce`.

---

## 8. Breakpoints

CSS custom properties can't be used inside `@media`, so breakpoints are the only literal
values allowed in component CSS (besides structural values like `0`, `100%`, `1fr`, `auto`
and the `1px` of the `.visually-hidden` utility). Mobile-first — styles are written for small screens and
enhanced upward.

| Name | Query |
|---|---|
| `md` | `@media (min-width: 48rem)` (768 px) |
| `lg` | `@media (min-width: 64rem)` (1024 px) |

---

## 9. Components (reference)

- **Button** — `primary` (accent bg) / `secondary` (outlined). Min height 44 px (touch target),
  `--radius-md`, `--weight-semibold`.
- **Card** — `--color-surface-raised`, `--border-width` solid `--color-border`, `--radius-lg`,
  hover: `--shadow-md` + `--color-border-strong`.
- **Tag** — `--text-xs`, `--color-accent-soft` bg, `--color-accent` text, `--radius-pill`.
- **Outcome highlight** — `--text-2xl` bold in `--color-accent` on cards; boxed with
  `--color-accent-soft` on case pages.
- **Eyebrow** — `--text-xs`, uppercase, `--tracking-wide`, `--color-text-muted`.
