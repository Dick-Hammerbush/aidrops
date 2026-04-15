# AIDrops

> Fresh AI intel, dropped daily.

AIDrops is a modern AI news website delivering daily drops of AI tools, agents, repos, workflows, and trends. Content sourced from creator videos (TikTok / others), rewritten into actionable editorial articles.

**Status:** Phase 1 scaffold — design system + homepage hero + Supabase schema + documentation. Article pages, API routes, and real article seeding land next.

---

## Stack

- **Next.js 16** (App Router, React 19) — TypeScript strict
- **Tailwind CSS v4** — CSS-first config in `src/app/globals.css` under `@theme`
- **Framer Motion 12** — kinetic title, staggered reveals, magnetic hover
- **Supabase** (`@supabase/supabase-js` + `@supabase/ssr`) — DB, RLS, storage
- **lucide-react** — icons
- **Bun** — package manager + runtime
- Deploys on **Vercel**

---

## Quick start

```bash
bun install
cp .env.local.example .env.local   # fill Supabase values
bun run dev                         # → http://localhost:3000
```

Full setup (Supabase project creation, migration, Vercel deploy) → **[SETUP.md](./SETUP.md)**.

---

## Project layout

```
aidrops/
├── src/
│   ├── app/                    # App Router routes
│   │   ├── layout.tsx          # root layout — fonts, header, footer
│   │   ├── page.tsx            # homepage — Hero + LatestDrops
│   │   └── globals.css         # design tokens (@theme), base CSS
│   ├── components/
│   │   ├── Header.tsx          # sticky nav with gradient-shift logo
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx            # gradient-mesh + kinetic title + CTAs
│   │   ├── HeroTitle.tsx       # per-character mask reveal
│   │   ├── LatestDrops.tsx     # placeholder card grid (real data next pass)
│   │   └── Magnetic.tsx        # spring-physics magnetic hover
│   └── lib/
│       ├── motion/variants.ts  # Framer Motion variants — 3 creative patterns
│       └── supabase/
│           ├── client.ts       # browser client (anon)
│           └── server.ts       # server client + service-role helper
├── supabase/
│   └── migrations/
│       └── 0001_initial.sql    # articles + processing_queue + RLS + triggers
├── design-tokens.md            # single source of truth for visual decisions
├── SETUP.md                    # setup walkthrough
└── .env.local.example          # env var template
```

---

## Design system

See **[design-tokens.md](./design-tokens.md)** for the full palette, type scale, motion language, and brand reference citations (linear, vercel, framer, notion, stripe).

TL;DR: warm paper base (`#F8F4EC`), warm ink, one vivid coral "drop" accent (`#FF4A1C`), Inter 510 with OpenType cv01/ss03, pill buttons, kinetic hero title, magnetic CTAs.

---

## What's shipped in Phase 1

- [x] Next.js 16 + TypeScript + Tailwind v4 + Framer Motion + Supabase wired
- [x] Design token system + globals.css (warm, editorial, creative-motion)
- [x] Header + Footer + Hero + placeholder LatestDrops
- [x] Supabase migration SQL (articles, processing_queue, RLS, indexes, triggers)
- [x] SETUP.md + env var template
- [x] Git init, initial commit

## What's deferred to next pass

- [ ] Article page (`/articles/[slug]`) with markdown rendering + action items
- [ ] Category page (`/category/[category]`)
- [ ] About page
- [ ] Admin page (queue submit + article toggle)
- [ ] API routes: `/api/process`, `/api/articles`, `/api/articles/[slug]`, `/api/queue`, `PATCH /api/articles/[id]`
- [ ] 3 real articles seeded from TikTok source URLs (yt-dlp + web research)
- [ ] Vercel deploy

See the PRD in `~/.claude/MEMORY/WORK/20260415-203253_aidrops-phase-1-scaffold/PRD.md` for the full criteria list and progress.
