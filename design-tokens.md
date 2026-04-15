# AIDrops — Design Tokens

Single source of truth for visual decisions. When something feels wrong, fix it here first, then propagate to `src/app/globals.css`.

## Direction

**Editorial warmth + tool-grade discipline.** Sweet spot between *The Verge* and an indie newsletter — opinionated, warm, animated, but never cute. Not corporate dark-mode tech. Not generic shadcn-flavored.

Primary reference: **Linear** — for the typographic discipline (Inter cv01/ss03, 510 weight, aggressive negative tracking on display). Adapted from dark-native to light-first.

Secondary references:
- **Framer** — for kinetic titles and compression-as-personality
- **Vercel** — for monochrome precision on tables/forms
- **Notion** — for warm neutral surfaces over pure white
- **Stripe** — for gradient-mesh hero treatment

---

## Color

### Surfaces

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-paper` | `#F8F4EC` | Page background. Warm off-white, not gray, not cream. |
| `--color-paper-soft` | `#F3EEE3` | Subtle section tint, footer, alt panels. |
| `--color-card` | `#FFFFFF` | Floating cards over paper. |
| `--color-ink` | `#17161C` | Primary text — warm near-black (shifted warm from Linear's `#08090a`). |
| `--color-ink-2` | `#44424D` | Body / secondary text. |
| `--color-ink-3` | `#7A7883` | Muted / metadata. |
| `--color-ink-4` | `#ADA9B3` | Tertiary / placeholders. |
| `--color-line` | `#E8E1D2` | Warm hairline, calibrated to sit on paper without contrast dominance. |
| `--color-line-strong` | `#D6CDB8` | Hover border, stronger separation. |

### Brand

| Token | Hex | Role |
|-------|-----|------|
| `--color-drop` | `#FF4A1C` | The "drop" — single chromatic accent. Used on primary CTAs, logo dot, hover states. Borrowed disciplinary restraint from Linear's indigo. |
| `--color-drop-hover` | `#FF6A42` | Button hover. |
| `--color-drop-ink` | `#B42F0F` | Drop-as-text on light surfaces. |
| `--color-drop-soft` | `#FFE3D9` | Drop tint for backgrounds. |

### Spark (secondary accent)

| Token | Hex | Role |
|-------|-----|------|
| `--color-spark` | `#D6FF00` | Electric lime. Reserved for "new / just dropped" markers. Creates thermal contrast with coral. Use sparingly — 1–2 instances per viewport max. |

### Category colors (12)

Each category has its own tinted hue within the warm editorial system. All are sized-down versions (via `color-mix` with transparency) for pill backgrounds, and full-saturation for accents / category bars.

```
ai-tools         #5A4BFF   violet
ai-agents        #0070D1   cobalt
github-repos     #17161C   ink
workflows        #0F8A5F   forest
ai-news          #FF4A1C   drop coral (shared with brand — newsroom signal)
tutorials        #B8680C   amber
skills           #7A2FF0   purple
learning         #C82183   magenta
courses          #0BA8A8   teal
systems          #3D5A80   slate
ai-in-sdlc       #8B5A2B   bronze
useful-ai-tips   #2F6B1F   olive
```

### Difficulty

- `beginner` → `#0F8A5F` (forest — approachable)
- `intermediate` → `#B8680C` (amber — caution)
- `advanced` → `#C3341A` (burnt red — real effort)

### Semantic

- `success` `#0F8A5F` / `warn` `#B8680C` / `danger` `#C3341A`

---

## Typography

**Families**
- Display + Body: **Inter Variable** (via `next/font/google`), with OpenType features `"cv01", "ss03", "ss01"` enabled globally. `cv01` gives a single-story lowercase `a`; `ss03` cleans up letterforms.
- Mono: **JetBrains Mono** — for metadata, uppercase labels, code.

**Signature weight: 510.** Between regular (400) and medium (500). Linear's house move — subtle emphasis without shouting. Used on: nav, buttons, card titles, display headings.

### Scale

| Class | Size | Weight | Line-height | Letter-spacing |
|-------|------|--------|-------------|----------------|
| `.type-display-xl` | `clamp(3rem, 9vw, 6.5rem)` | 510 | 0.92 | `-0.04em` |
| `.type-display` | 3rem | 510 | 0.95 | `-0.032em` |
| `.type-h1` | `clamp(2rem, 4vw, 3rem)` | 510 | 1.05 | `-0.028em` |
| `.type-h2` | `clamp(1.5rem, 2.5vw, 2rem)` | 510 | 1.15 | `-0.022em` |
| `.type-h3` | 1.25rem (20px) | 590 | 1.3 | `-0.014em` |
| `.type-lede` | 1.25rem (20px) | 400 | 1.55 | `-0.008em` |
| `.type-body` | **1.1875rem (19px)** | 400 | **1.75** | normal |
| `.type-meta` | 0.75rem (12px) | 400 | 1.4 | `0.06em` uppercase mono |

Body is deliberately set at **19px / 1.75 / max-width 65ch** for editorial readability — matches the user's spec (18–20px, ≥1.7 line-height, ~65ch).

**Compression principle:** display sizes compress letter-spacing aggressively (-4% at hero, -3% at h1). Below 20px, tracking relaxes toward normal.

---

## Spacing

8pt modular scale baked into Tailwind's default spacing. Use: 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px), 12 (48px), 16 (64px), 24 (96px).

Generous whitespace is a design value, not a filler. Hero section uses 80–128px vertical rhythm.

---

## Radius

| Token | Usage |
|-------|-------|
| 4px | Inputs, subtle chips |
| 6px | Small buttons, tiny elements |
| 10px | Standard controls |
| 14px | Cards (default) |
| 22px | Featured panels (Linear-style) |
| 9999px | Pills, badges, CTA buttons |

Pill CTAs are the signature — a nod to Framer's interactive language, warmed for editorial.

---

## Shadows

Warm-tinted, low-opacity. Never pure black — shadows use `rgba(23, 22, 28, α)`, matching ink color.

- **soft** — `0 1px 2px rgba(23,22,28,0.04), 0 0 0 1px rgba(23,22,28,0.04)` → cards at rest
- **card** — `0 1px 2px rgba(23,22,28,0.04), 0 8px 24px rgba(23,22,28,0.06)` → cards on hover
- **lift** — `0 1px 2px rgba(23,22,28,0.05), 0 16px 48px rgba(23,22,28,0.10)` → modals, elevated panels

---

## Motion language

**Three distinct creative patterns** (mandatory per anti-criterion ISC-A3 — no plain fades allowed):

1. **Staggered reveal** — children stagger at 60ms, 18px y-rise, blur(6px)→0 lift. Applied to card grids, hero content. `lib/motion/variants.ts::staggerContainer + revealItem`.
2. **Kinetic title** — per-character mask-reveal from below with a 4° rotate-in, 35ms stagger, 0.8s eased. Hero wordmark only. `HeroTitle.tsx`.
3. **Magnetic hover** — transform3d follows cursor with spring stiffness 180 / damping 16, pull strength 0.2–0.35. Applied to CTAs. `components/Magnetic.tsx`.

Supporting motion:
- **Gradient mesh drift** — hero background, 22s alternate translate+scale loop.
- **Scroll reveal** — sections below the fold use `whileInView` with 65ms easing.
- **Logo dot pulse** — 2.4s pulse shadow + scale on the drop dot next to the wordmark.
- **Underline grow** — inline links grow underline from 1px to 2px on hover (260ms eased).
- **Gradient wordmark shift** — logo text gradient translates across on hover (1200ms eased).

Easing functions:
- `ease-out-expo` `cubic-bezier(0.19, 1, 0.22, 1)` — default, decelerating authority
- `ease-out-back` `cubic-bezier(0.34, 1.56, 0.64, 1)` — tiny overshoot for interactive delight

All motion respects `prefers-reduced-motion` globally via the CSS override in `globals.css`.

---

## Component language

- **Cards** — white on warm paper, 14px radius, 1px warm hairline, soft shadow at rest, card shadow on hover with a 4px lift. Category accent bar slides in from the left on hover.
- **Buttons** — pill-shaped (9999px), 44px height. Primary: coral with inner highlight + warm drop shadow. Ghost: transparent with warm hairline.
- **Pills** — 24px, 700 weight at 12px on labels, tight letter-spacing. Category pills use `color-mix` against transparent for tinted backgrounds.
- **Logo** — wordmark + 8px pulsing coral dot. Gradient-shift text on hover (coral sweeps through the word).

---

## Brand references cited

- `linear.app` — type system, 510 weight, tight display tracking, discipline of a single chromatic accent, warm ink color
- `vercel` — monochrome precision for utilities/forms (applied to admin screens when built)
- `framer` — kinetic title language, pill-shaped interactive elements
- `notion` — warm neutral surfaces instead of pure white
- `stripe` — gradient-mesh hero treatment with radial color washes

Design references pulled via `npx getdesign@latest add {brand}` and stored at `/tmp/dm-refs/*.DESIGN.md` for this session.
