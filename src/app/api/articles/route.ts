import { NextRequest } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

/**
 * GET /api/articles
 * Returns articles. Optional query params: category, page, limit, status.
 * Defaults to published only. Pass status=all for admin views.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get("category");
  const status = searchParams.get("status");
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") ?? "12", 10)));
  const offset = (page - 1) * limit;

  const supabase = createServiceClient();

  let query = supabase
    .from("articles")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (status !== "all") {
    query = query.eq("status", status ?? "published");
  }

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error, count } = await query;

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({
    articles: data,
    total: count,
    page,
    limit,
    totalPages: Math.ceil((count ?? 0) / limit),
  });
}
