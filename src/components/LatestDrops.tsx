"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const categoryLabels: Record<string, string> = {
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
  "useful-ai-tips": "Tips",
};

const categoryColor = (slug: string) => `var(--color-cat-${slug})`;

const difficultyColor: Record<string, string> = {
  beginner: "var(--color-diff-beginner)",
  intermediate: "var(--color-diff-intermediate)",
  advanced: "var(--color-diff-advanced)",
};

const easeOutExpo: [number, number, number, number] = [0.19, 1, 0.22, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.07,
      ease: easeOutExpo,
    },
  }),
};

export function LatestDrops({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return (
      <section className="mx-auto max-w-[1280px] px-6 md:px-10 mt-20 md:mt-28">
        <div className="mb-8 md:mb-12">
          <div className="type-meta">Latest</div>
          <h2 className="type-h1 mt-2">Today&apos;s drops</h2>
        </div>
        <p className="text-center py-16 text-[color:var(--color-ink-3)] type-lede">
          No drops yet. Check back soon.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1280px] px-6 md:px-10 mt-20 md:mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="flex items-end justify-between mb-8 md:mb-12"
      >
        <div>
          <div className="type-meta">Latest</div>
          <h2 className="type-h1 mt-2">Today&apos;s drops</h2>
        </div>
        <div className="hidden md:block text-sm text-[color:var(--color-ink-3)]">
          {articles.length} article{articles.length !== 1 ? "s" : ""} · updated every morning
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {articles.map((article, i) => (
          <motion.article
            key={article.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          >
            <Link href={`/articles/${article.slug}`} className="block h-full">
              <div className="card card-glow group p-6 flex flex-col h-full relative overflow-hidden">
                {/* Category accent bar */}
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                  style={{ background: `linear-gradient(90deg, ${categoryColor(article.category)}, var(--color-drop))` }}
                />

                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="pill"
                    style={{
                      background: `color-mix(in oklab, ${categoryColor(article.category)} 12%, transparent)`,
                      color: categoryColor(article.category),
                      borderColor: `color-mix(in oklab, ${categoryColor(article.category)} 22%, transparent)`,
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
                          <span
                            aria-hidden
                            className="inline-block h-1.5 w-1.5 rounded-full"
                            style={{ background: "currentColor" }}
                          />
                          {article.difficulty}
                        </span>
                        <span>·</span>
                      </>
                    )}
                    <span>
                      {new Date(article.published_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-[510] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-drop)] transition-colors duration-300">
                    Read drop
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
