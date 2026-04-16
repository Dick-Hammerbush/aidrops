import { notFound } from "next/navigation";
import { createServiceClient } from "@/lib/supabase/server";
import { ArticleContent } from "./ArticleContent";
import type { Metadata } from "next";

type ActionItem = { label: string; url: string; type?: string };

async function getArticle(slug: string) {
  const supabase = createServiceClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
  return data;
}

async function getAdjacentArticles(publishedAt: string) {
  const supabase = createServiceClient();

  const [{ data: prev }, { data: next }] = await Promise.all([
    supabase
      .from("articles")
      .select("slug, title")
      .eq("status", "published")
      .lt("published_at", publishedAt)
      .order("published_at", { ascending: false })
      .limit(1)
      .single(),
    supabase
      .from("articles")
      .select("slug, title")
      .eq("status", "published")
      .gt("published_at", publishedAt)
      .order("published_at", { ascending: true })
      .limit(1)
      .single(),
  ]);

  return { prev, next };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — AIDrops`,
    description: article.summary ?? undefined,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const { prev, next } = await getAdjacentArticles(article.published_at);

  return (
    <ArticleContent
      article={article}
      prev={prev}
      next={next}
    />
  );
}
