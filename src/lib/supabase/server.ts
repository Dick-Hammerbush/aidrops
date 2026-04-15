import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Server Supabase client — use in Server Components, Route Handlers, Server Actions.
 * Pass the cookie store from `next/headers`.
 *
 * For admin/service-role access, use `createServiceClient()` — service role key
 * must never leak to the client bundle.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Server Component write — safe to ignore if middleware refreshes session.
          }
        },
      },
    },
  );
}

/**
 * Service-role client — bypasses RLS. NEVER import from a client component.
 * Use only in route handlers / server actions that explicitly need admin access
 * (e.g., inserting into processing_queue from the /admin form).
 */
export function createServiceClient() {
  const { createClient: createSupabaseClient } = require("@supabase/supabase-js") as typeof import("@supabase/supabase-js");
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
}
