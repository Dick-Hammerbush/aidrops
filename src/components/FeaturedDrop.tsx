"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { revealItem } from "@/lib/motion/variants";
import { ArrowUpRight, Sparkles } from "lucide-react";

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

export function FeaturedDrop({ article }: { article: Article }) {
  const catColor = `var(--color-cat-${article.category})`;

  return (
    <motion.div variants={revealItem} className="mt-0">
      <Link href={`/articles/${article.slug}`} className="block">
        <article
          className="card group relative overflow-hidden p-6 md:p-8 border-2 hover:shadow-[var(--shadow-lift)]"
          style={{ borderColor: `color-mix(in oklab, var(--color-drop) 30%, var(--color-line))` }}
        >
          {/* Accent gradient top edge */}
          <span
            aria-hidden
            className="absolute top-0 left-0 h-[4px] w-full"
            style={{ background: `linear-gradient(90deg, var(--color-drop), ${catColor})` }}
          />

          <div className="flex items-center gap-2 mb-4">
            <span className="pill pill-new">
              <Sparkles size={10} />
              Featured
            </span>
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

          <h3 className="type-h2 mb-3 group-hover:text-[color:var(--color-drop-ink)] transition-colors">
            {article.title}
          </h3>
          {article.summary && (
            <p className="type-lede line-clamp-3 mb-4">{article.summary}</p>
          )}

          <span className="inline-flex items-center gap-1.5 text-sm font-[510] text-[color:var(--color-drop)] group-hover:gap-2.5 transition-all">
            Read this drop
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </span>
        </article>
      </Link>
    </motion.div>
  );
}
