import { Hero } from "@/components/Hero";
import { LatestDrops } from "@/components/LatestDrops";
import { createServiceClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = createServiceClient();
  const { data: articles } = await supabase
    .from("articles")
    .select("id, title, slug, summary, category, difficulty, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(12);

  return (
    <>
      <Hero />
      <LatestDrops articles={articles ?? []} />
    </>
  );
}
