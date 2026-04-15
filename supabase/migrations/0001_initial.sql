-- ──────────────────────────────────────────────────────────────
-- AIDrops — initial schema
-- Run this migration against a fresh Supabase project (SQL Editor
-- or `supabase db push`). Idempotent: safe to re-run.
-- ──────────────────────────────────────────────────────────────

-- Extensions -----------------------------------------------------
create extension if not exists pgcrypto;   -- gen_random_uuid()

-- ───── articles ────────────────────────────────────────────────
create table if not exists public.articles (
  id                uuid primary key default gen_random_uuid(),
  title             text not null,
  slug              text not null unique,
  summary           text,
  content           text,
  category          text not null,
  tags              text[] not null default '{}',
  difficulty        text,
  action_items      jsonb not null default '[]'::jsonb,
  source_tiktok_url text,
  source_video_id   text unique,
  thumbnail_url     text,
  author_handle     text,
  status            text not null default 'draft',
  published_at      timestamptz,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),

  constraint articles_category_check check (category in (
    'ai-tools', 'ai-agents', 'github-repos', 'workflows', 'ai-news',
    'tutorials', 'skills', 'learning', 'courses', 'systems',
    'ai-in-sdlc', 'useful-ai-tips'
  )),
  constraint articles_difficulty_check check (
    difficulty is null
    or difficulty in ('beginner', 'intermediate', 'advanced')
  ),
  constraint articles_status_check check (
    status in ('draft', 'review', 'published', 'rejected')
  )
);

create index if not exists articles_slug_idx          on public.articles (slug);
create index if not exists articles_category_idx      on public.articles (category);
create index if not exists articles_status_pub_idx    on public.articles (status, published_at desc);

-- ───── processing_queue ────────────────────────────────────────
create table if not exists public.processing_queue (
  id                uuid primary key default gen_random_uuid(),
  tiktok_url        text not null,
  tiktok_video_id   text unique,
  transcript        text,
  ai_classification jsonb,
  processing_status text not null default 'pending',
  error_message     text,
  created_at        timestamptz not null default now(),
  processed_at      timestamptz,

  constraint processing_queue_status_check check (
    processing_status in ('pending', 'transcribing', 'classifying',
                          'generating', 'complete', 'failed', 'rejected')
  )
);

create index if not exists processing_queue_status_idx
  on public.processing_queue (processing_status);

-- ───── updated_at trigger ──────────────────────────────────────
create or replace function public.tg_set_updated_at()
returns trigger
language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists articles_set_updated_at on public.articles;
create trigger articles_set_updated_at
  before update on public.articles
  for each row execute function public.tg_set_updated_at();

-- ───── Row-Level Security ──────────────────────────────────────
alter table public.articles           enable row level security;
alter table public.processing_queue   enable row level security;

-- Anon: can only read published articles.
drop policy if exists "anon reads published articles" on public.articles;
create policy "anon reads published articles"
  on public.articles for select
  to anon
  using (status = 'published');

-- Authenticated users get the same read scope as anon for MVP.
drop policy if exists "auth reads published articles" on public.articles;
create policy "auth reads published articles"
  on public.articles for select
  to authenticated
  using (status = 'published');

-- Service role has full access (bypasses RLS automatically, but explicit
-- policies make intent readable in the dashboard).
drop policy if exists "service role full access articles" on public.articles;
create policy "service role full access articles"
  on public.articles for all
  to service_role
  using (true) with check (true);

drop policy if exists "service role full access queue" on public.processing_queue;
create policy "service role full access queue"
  on public.processing_queue for all
  to service_role
  using (true) with check (true);

-- (Intentionally no anon policy on processing_queue — only service role
--  writes to it, via the /api/process route handler.)

-- ───── Comments for schema readers ─────────────────────────────
comment on table public.articles is 'Editorial articles rewritten from TikTok drops. anon SELECT gated to status=published.';
comment on table public.processing_queue is 'Inbound TikTok URLs to process. service_role-only.';
comment on column public.articles.action_items is 'jsonb array of {label, url, type} — CTA buttons rendered on article pages.';
comment on column public.articles.source_video_id is 'Dedup key — extracted from TikTok URL (e.g. 7609623318043380999).';
