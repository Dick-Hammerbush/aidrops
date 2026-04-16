import { createServiceClient } from "@/lib/supabase/server";

/**
 * GET /api/queue — returns all processing_queue entries (service role).
 */
export async function GET() {
  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("processing_queue")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}
