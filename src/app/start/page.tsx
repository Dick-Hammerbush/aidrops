import { createServiceClient } from "@/lib/supabase/server";
import { JourneyWizard } from "./JourneyWizard";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "How Can I Start? — AIDrops",
  description:
    "Your step-by-step AI journey — from idea to shipped product. No coding experience required.",
};

export default async function StartPage() {
  const supabase = createServiceClient();

  // Fetch articles grouped by relevant categories for wizard steps
  const { data: allArticles } = await supabase
    .from("articles")
    .select("id, title, slug, summary, category, difficulty, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  const articles = allArticles ?? [];

  // Group by category for wizard steps
  const byCategory: Record<string, typeof articles> = {};
  for (const a of articles) {
    (byCategory[a.category] ??= []).push(a);
  }

  return <JourneyWizard articlesByCategory={byCategory} />;
}
