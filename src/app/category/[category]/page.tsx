import { notFound } from "next/navigation";
import { createServiceClient } from "@/lib/supabase/server";
import { CategoryGrid } from "./CategoryGrid";
import type { Metadata } from "next";

const VALID_CATEGORIES: Record<string, string> = {
  "ai-tools": "AI Tools",
  "ai-agents": "AI Agents",
  "github-repos": "GitHub Repos",
  workflows: "Workflows",
  "ai-news": "AI News",
  tutorials: "Tutorials",
  skills: "Skills",
  learning: "Learning",
  courses: "Courses",
  systems: "Systems",
  "ai-in-sdlc": "AI in SDLC",
  "useful-ai-tips": "Useful AI Tips",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const label = VALID_CATEGORIES[category];
  if (!label) return { title: "Category Not Found" };
  return {
    title: `${label} — AIDrops`,
    description: `Browse all ${label} articles on AIDrops.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const label = VALID_CATEGORIES[category];
  if (!label) notFound();

  const supabase = createServiceClient();
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .eq("category", category)
    .order("published_at", { ascending: false });

  return <CategoryGrid category={category} label={label} articles={articles ?? []} />;
}
