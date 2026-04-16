import { Hero } from "@/components/Hero";
import { NewsTicker } from "@/components/NewsTicker";
import { LatestDrops } from "@/components/LatestDrops";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServiceClient();
  const { data: articles } = await supabase
    .from("articles")
    .select("id, title, slug, summary, category, difficulty, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(12);

  const allArticles = articles ?? [];
  const featured = allArticles[0] ?? null;
  const rest = allArticles.slice(1);

  return (
    <>
      <NewsTicker articles={allArticles.map((a) => ({ title: a.title, slug: a.slug }))} />
      <Hero featured={featured} />
      <LatestDrops articles={rest} />
    </>
  );
}
