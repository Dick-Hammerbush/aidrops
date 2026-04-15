# AIDrops — Setup

Step-by-step for standing up the project locally and deploying to Vercel.

---

## 1. Prerequisites

- [Bun](https://bun.sh) ≥ 1.1 (or Node 20+ with npm/pnpm — Bun is the default)
- A Supabase account ([supabase.com](https://supabase.com))
- A Vercel account ([vercel.com](https://vercel.com)) — free tier is fine
- Git

---

## 2. Local install

```bash
cd Projects/aidrops
bun install
cp .env.local.example .env.local
```

Open `.env.local` and leave it with placeholder values for now — the app renders the homepage without a live Supabase connection. You'll fill real values in step 4.

Run the dev server:

```bash
bun run dev
```

Open http://localhost:3000 — you should see the AIDrops hero and placeholder drop cards.

---

## 3. Create a Supabase project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard) → **New project**.
2. Name: `aidrops`. Region: closest to you (Frankfurt / Warsaw if you're in Europe).
3. Set a strong DB password and save it in your password manager.
4. Wait ~2 min for the project to provision.

### Run the migration

You have two options:

**Option A — SQL Editor (fastest):**

1. In the dashboard, open **SQL Editor** → **New query**.
2. Paste the contents of `supabase/migrations/0001_initial.sql`.
3. Click **Run**. You should see `Success. No rows returned.`
4. Open **Table Editor** → confirm `articles` and `processing_queue` tables exist.

**Option B — Supabase CLI:**

```bash
brew install supabase/tap/supabase
supabase link --project-ref YOUR-PROJECT-REF
supabase db push
```

---

## 4. Wire up environment variables

In the Supabase dashboard: **Project Settings → API**. Copy:

- **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- **anon / public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **service_role key** → `SUPABASE_SERVICE_ROLE_KEY`

Paste them into `.env.local`. Restart `bun run dev`.

> ⚠️ The service-role key bypasses RLS. Never expose it to the browser. Never commit `.env.local`.

---

## 5. Deploy to Vercel

### Push to GitHub

```bash
cd Projects/aidrops
gh repo create aidrops --private --source=. --remote=origin --push
# or: create the repo manually, then:
# git remote add origin git@github.com:YOU/aidrops.git
# git push -u origin main
```

### Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → select `aidrops`.
2. Vercel auto-detects Next.js. Leave defaults.
3. **Environment Variables** — add the same three keys from step 4:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Click **Deploy**. First deploy takes ~90 seconds.
5. Open the `.vercel.app` URL Vercel gives you. Hero should load.

### Custom domain (optional — after MVP)

When you're ready to wire `aidrops.io` or `aidrops.day`:

1. In Vercel, **Project → Settings → Domains → Add**.
2. Follow Vercel's DNS instructions at your registrar.
3. Update `metadata.openGraph.url` in `src/app/layout.tsx` once the domain resolves.

---

## 6. Seed some articles (next session)

The scaffold ships with placeholder cards on the homepage. Real article seeding is a follow-up task — it reads from a TikTok source list, pulls transcripts via yt-dlp + Whisper, and writes into `public.articles` with `status='published'`.

Until that lands, you can insert a test article manually from the Supabase SQL Editor:

```sql
insert into public.articles (title, slug, summary, content, category, difficulty, status, published_at)
values (
  'Test drop',
  'test-drop',
  'A quick summary sentence.',
  '# Hello\n\nBody content in markdown.',
  'ai-tools',
  'beginner',
  'published',
  now()
);
```

---

## Troubleshooting

- **Fonts not loading** → `bun install` again; next/font uses a fetch at build time.
- **`@tailwindcss/postcss` error** → confirm `postcss.config.mjs` references `@tailwindcss/postcss` and Tailwind v4 is in deps.
- **Supabase client throws `Invalid URL`** → you forgot to restart `bun run dev` after editing `.env.local`.
- **`cookies()` error** → you imported the server Supabase helper into a client component. Use `@/lib/supabase/client` on the client side.
