import { createServiceClient } from "@/lib/supabase/server";
import { CategoriesBrowser } from "./CategoriesBrowser";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Categories — AIDrops",
  description: "Browse all AI articles by category — tools, agents, repos, workflows, tutorials, and more.",
};

export default async function CategoriesPage() {
  const supabase = createServiceClient();
  const { data: articles } = await supabase
    .from("articles")
    .select("id, title, slug, summary, category, difficulty, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  return <CategoriesBrowser articles={articles ?? []} />;
}
