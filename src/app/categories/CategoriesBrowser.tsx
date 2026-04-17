"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Article = {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  category: string;
  difficulty: string | null;
  published_at: string;
};

const CATEGORIES: { slug: string; label: string }[] = [
  { slug: "all", label: "All" },
  { slug: "ai-tools", label: "AI Tools" },
  { slug: "ai-agents", label: "AI Agents" },
  { slug: "github-repos", label: "GitHub Repos" },
  { slug: "workflows", label: "Workflows" },
  { slug: "ai-news", label: "AI News" },
  { slug: "tutorials", label: "Tutorials" },
  { slug: "skills", label: "Skills" },
  { slug: "learning", label: "Learning" },
  { slug: "courses", label: "Courses" },
  { slug: "systems", label: "Systems" },
  { slug: "ai-in-sdlc", label: "AI in SDLC" },
  { slug: "useful-ai-tips", label: "Tips" },
];

const categoryLabels: Record<string, string> = Object.fromEntries(
  CATEGORIES.filter((c) => c.slug !== "all").map((c) => [c.slug, c.label]),
);

const categoryColor = (slug: string) => `var(--color-cat-${slug})`;

const difficultyColor: Record<string, string> = {
  beginner: "var(--color-diff-beginner)",
  intermediate: "var(--color-diff-intermediate)",
  advanced: "var(--color-diff-advanced)",
};

const ease: [number, number, number, number] = [0.19, 1, 0.22, 1];

export function CategoriesBrowser({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState("all");

  // Group articles by category
  const grouped = new Map<string, Article[]>();
  for (const a of articles) {
    const list = grouped.get(a.category) ?? [];
    list.push(a);
    grouped.set(a.category, list);
  }

  // Filter: which categories to show
  const visibleCategories =
    active === "all"
      ? CATEGORIES.filter((c) => c.slug !== "all" && grouped.has(c.slug))
      : CATEGORIES.filter((c) => c.slug === active && grouped.has(c.slug));

  return (
    <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 md:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mb-8"
      >
        <div className="type-meta">{articles.length} articles</div>
        <h1 className="type-h1 mt-2">Categories</h1>
      </motion.div>

      {/* Filter chips — horizontal scroll on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="mb-10 -mx-6 md:mx-0 px-6 md:px-0 overflow-x-auto"
      >
        <div className="flex items-center gap-2 pb-2 min-w-max">
          {CATEGORIES.map((cat) => {
            const count =
              cat.slug === "all" ? articles.length : (grouped.get(cat.slug)?.length ?? 0);
            if (cat.slug !== "all" && count === 0) return null;
            return (
              <button
                key={cat.slug}
                onClick={() => setActive(cat.slug)}
                className={`filter-chip ${active === cat.slug ? "filter-chip-active" : ""}`}
              >
                {cat.label}
                <span className="text-[0.7rem] opacity-60 ml-0.5">({count})</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Category sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease }}
        >
          {visibleCategories.map((cat) => {
            const catArticles = grouped.get(cat.slug) ?? [];
            const catCol = categoryColor(cat.slug);
            return (
              <div key={cat.slug} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ background: catCol }}
                  />
                  <h2 className="type-h2">{cat.label}</h2>
                  <span className="type-meta ml-auto">
                    {catArticles.length} article{catArticles.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {catArticles.map((article, i) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.45, delay: i * 0.04, ease }}
                    >
                      <Link href={`/articles/${article.slug}`} className="block h-full">
                        <article className="card card-glow group p-6 flex flex-col h-full relative overflow-hidden">
                          <span
                            aria-hidden
                            className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                            style={{ background: `linear-gradient(90deg, ${catCol}, var(--color-drop))` }}
                          />
                          <div className="flex items-center gap-2 mb-5">
                            <span
                              className="pill"
                              style={{
                                background: `color-mix(in oklab, ${catCol} 12%, transparent)`,
                                color: catCol,
                                borderColor: `color-mix(in oklab, ${catCol} 22%, transparent)`,
                              }}
                            >
                              {categoryLabels[article.category] ?? article.category}
                            </span>
                          </div>
                          <h3 className="type-h3 mb-3 group-hover:text-[color:var(--color-drop-ink)] transition-colors duration-300">
                            {article.title}
                          </h3>
                          {article.summary && (
                            <p className="text-[0.95rem] leading-[1.6] text-[color:var(--color-ink-2)] line-clamp-3">
                              {article.summary}
                            </p>
                          )}
                          <div className="mt-auto pt-5 border-t border-[color:var(--color-line)] flex items-center justify-between text-xs mt-6">
                            <div className="flex items-center gap-3 text-[color:var(--color-ink-3)] font-mono uppercase tracking-wider">
                              {article.difficulty && (
                                <>
                                  <span
                                    className="inline-flex items-center gap-1.5"
                                    style={{ color: difficultyColor[article.difficulty] ?? "inherit" }}
                                  >
                                    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "currentColor" }} />
                                    {article.difficulty}
                                  </span>
                                  <span>·</span>
                                </>
                              )}
                              <span>
                                {new Date(article.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-1 font-[510] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-drop)] transition-colors duration-300">
                              Read drop
                              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
