"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, revealItem } from "@/lib/motion/variants";
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

const categoryColor = (slug: string) => `var(--color-cat-${slug})`;

const difficultyColor: Record<string, string> = {
  beginner: "var(--color-diff-beginner)",
  intermediate: "var(--color-diff-intermediate)",
  advanced: "var(--color-diff-advanced)",
};

export function CategoryGrid({
  category,
  label,
  articles,
}: {
  category: string;
  label: string;
  articles: Article[];
}) {
  const catColor = categoryColor(category);

  return (
    <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 md:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={revealItem} className="mb-10">
          <div className="type-meta">{articles.length} article{articles.length !== 1 ? "s" : ""}</div>
          <h1 className="type-h1 mt-2">{label}</h1>
        </motion.div>

        {articles.length === 0 ? (
          <motion.div
            variants={revealItem}
            className="text-center py-20 text-[color:var(--color-ink-3)]"
          >
            <p className="type-lede mb-2">No articles in this category yet.</p>
            <p className="text-sm">Check back soon — new drops land daily.</p>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {articles.map((article) => (
              <motion.div key={article.id} variants={revealItem}>
                <Link href={`/articles/${article.slug}`}>
                  <article
                    className="card group p-6 flex flex-col h-full relative overflow-hidden cursor-pointer"
                  >
                    <span
                      aria-hidden
                      className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                      style={{ background: catColor }}
                    />

                    <div className="flex items-center gap-2 mb-5">
                      <span
                        className="pill"
                        style={{
                          background: `color-mix(in oklab, ${catColor} 12%, transparent)`,
                          color: catColor,
                          borderColor: `color-mix(in oklab, ${catColor} 22%, transparent)`,
                        }}
                      >
                        {label}
                      </span>
                    </div>

                    <h3 className="type-h3 mb-3 group-hover:text-[color:var(--color-drop-ink)] transition-colors">
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
                          {new Date(article.published_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-[510] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-drop)] transition-colors">
                        Read drop
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                        />
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
