import { NextRequest } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

/**
 * POST /api/process
 * Accepts { tiktok_url }, extracts video ID, inserts into processing_queue.
 */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body?.tiktok_url || typeof body.tiktok_url !== "string") {
    return Response.json(
      { error: "tiktok_url is required" },
      { status: 400 },
    );
  }

  const url = body.tiktok_url.trim();

  // Extract video ID from TikTok URL patterns
  const videoIdMatch = url.match(/\/video\/(\d+)/) ?? url.match(/\/(\d{15,})/) ;
  const tiktok_video_id = videoIdMatch?.[1] ?? null;

  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("processing_queue")
    .insert({
      tiktok_url: url,
      tiktok_video_id,
      processing_status: "pending",
    })
    .select()
    .single();

  if (error) {
    const status = error.code === "23505" ? 409 : 500;
    return Response.json(
      { error: error.message },
      { status },
    );
  }

  return Response.json(data, { status: 201 });
}
