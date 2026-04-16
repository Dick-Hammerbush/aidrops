import { createServiceClient } from "@/lib/supabase/server";
import { StartContent } from "./StartContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Can I Start? — AIDrops",
  description: "Begin your AI journey without feeling overwhelmed. Curated learning resources and beginner-friendly articles.",
};

export default async function StartPage() {
  const supabase = createServiceClient();
  const { data: articles } = await supabase
    .from("articles")
    .select("id, title, slug, summary, category, difficulty, published_at")
    .eq("status", "published")
    .eq("category", "learning")
    .order("published_at", { ascending: false });

  // Also grab beginner-difficulty articles from any category as fallback
  const { data: beginnerArticles } = await supabase
    .from("articles")
    .select("id, title, slug, summary, category, difficulty, published_at")
    .eq("status", "published")
    .eq("difficulty", "beginner")
    .order("published_at", { ascending: false })
    .limit(6);

  const learningArticles = articles ?? [];
  const fallbackArticles = beginnerArticles ?? [];

  return <StartContent learningArticles={learningArticles} beginnerArticles={fallbackArticles} />;
}
