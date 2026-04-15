"use client";

import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser Supabase client — safe for use in client components.
 * Only uses NEXT_PUBLIC_* env vars.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
