import { NextRequest } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

/**
 * GET /api/articles/[slug] — single article by slug (published only)
 * PATCH /api/articles/[id] — update article fields by UUID (service role)
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !data) {
    return Response.json({ error: "Article not found" }, { status: 404 });
  }

  return Response.json(data);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug: id } = await params;
  const body = await request.json().catch(() => null);

  if (!body || Object.keys(body).length === 0) {
    return Response.json({ error: "No fields to update" }, { status: 400 });
  }

  // Only allow safe fields
  const allowed = ["status", "published_at", "title", "summary", "content", "category", "tags", "difficulty", "action_items"];
  const updates: Record<string, unknown> = {};
  for (const key of allowed) {
    if (key in body) updates[key] = body[key];
  }

  if (Object.keys(updates).length === 0) {
    return Response.json({ error: "No valid fields to update" }, { status: 400 });
  }

  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("articles")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}
