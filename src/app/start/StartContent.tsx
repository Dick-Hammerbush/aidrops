"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, revealItem } from "@/lib/motion/variants";
import { ArrowUpRight, Rocket } from "lucide-react";

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

export function StartContent({
  learningArticles,
  beginnerArticles,
}: {
  learningArticles: Article[];
  beginnerArticles: Article[];
}) {
  const articles = learningArticles.length > 0 ? learningArticles : beginnerArticles;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 md:py-20"
    >
      {/* Intro */}
      <motion.div variants={revealItem} className="max-w-[680px] mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="type-meta">Getting Started</span>
          <Rocket size={16} className="text-[color:var(--color-drop)]" />
        </div>
        <h1 className="type-h1 mb-6">How Can I Start?</h1>
        <div className="prose-body space-y-4">
          <p className="type-lede">
            You don't need a computer science degree. You don't need to understand neural
            networks. You just need curiosity and a willingness to click a few buttons.
          </p>
          <p className="type-body">
            Every article here is written so you can follow along — step by step, no
            assumptions about what you already know. Start with whatever catches your eye.
            Try one thing. Then come back and try another.
          </p>
          <p className="type-body text-[color:var(--color-ink-3)]">
            The best way to learn AI tools is to use them on something you actually care
            about. Not a tutorial project — your real work.
          </p>
        </div>
      </motion.div>

      {/* Articles Grid */}
      {articles.length === 0 ? (
        <motion.div
          variants={revealItem}
          className="text-center py-20 text-[color:var(--color-ink-3)]"
        >
          <p className="type-lede mb-2">No learning articles yet.</p>
          <p className="text-sm">
            Check back soon — we're building out beginner-friendly content.
          </p>
        </motion.div>
      ) : (
        <>
          <motion.div variants={revealItem} className="mb-6">
            <h2 className="type-h2">
              {learningArticles.length > 0 ? "Learning Resources" : "Beginner-Friendly Drops"}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {articles.map((article) => {
              const catColor = categoryColor(article.category);
              return (
                <motion.div key={article.id} variants={revealItem}>
                  <Link href={`/articles/${article.slug}`} className="block h-full">
                    <article className="card group p-6 flex flex-col h-full relative overflow-hidden">
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
                          {categoryLabels[article.category] ?? article.category}
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
                      <div className="mt-auto pt-5 border-t border-[color:var(--color-line)] flex items-center justify-end text-xs mt-6">
                        <span className="inline-flex items-center gap-1 font-[510] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-drop)] transition-colors">
                          Read drop
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}

      {/* Consulting CTA */}
      <motion.div
        variants={revealItem}
        className="mt-20 p-8 md:p-10 rounded-[var(--radius-xl)] border-2 border-dashed border-[color:var(--color-line-strong)] text-center"
      >
        <h3 className="type-h2 mb-3">Want a guide?</h3>
        <p className="type-body text-[color:var(--color-ink-2)] max-w-md mx-auto mb-6">
          If you'd rather have someone walk you through it in person — consultations
          are available at $500/hr. Yes, really. But you'll learn more in one hour
          than in a month of YouTube tutorials.
        </p>
        <a
          href="mailto:PLACEHOLDER@email.com?subject=AIDrops Consultation"
          className="btn btn-primary"
        >
          Book a consultation
        </a>
      </motion.div>
    </motion.div>
  );
}
