"use client";

import { motion } from "framer-motion";
import { staggerContainer, revealItem } from "@/lib/motion/variants";
import { ArrowUpRight } from "lucide-react";

/**
 * Placeholder grid for the homepage "Latest Drops" section.
 * Real article data wires in after the design-checkpoint review.
 */

type PreviewDrop = {
  category: string;
  categoryLabel: string;
  title: string;
  summary: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  date: string;
  isNew?: boolean;
};

const previews: PreviewDrop[] = [
  {
    category: "ai-tools",
    categoryLabel: "AI Tools",
    title: "The one-click agent that actually writes PRs you'd merge",
    summary:
      "Coder-mode agents keep promising this. Here's the stack that finally delivers — prompt shape, guardrails, and the eval loop that caught a regression before it shipped.",
    difficulty: "intermediate",
    date: "Apr 15",
    isNew: true,
  },
  {
    category: "workflows",
    categoryLabel: "Workflows",
    title: "A 4-hour research workflow compressed into 12 minutes",
    summary:
      "Parallel search + structured synthesis + a tiny human-in-the-loop checkpoint. The exact prompt chain, plus what breaks when you skip the checkpoint.",
    difficulty: "beginner",
    date: "Apr 15",
  },
  {
    category: "github-repos",
    categoryLabel: "GitHub Repos",
    title: "Three repos worth cloning this week (plus one to skip)",
    summary:
      "Not the trending tab. Real shipping code: a model-router that's actually fast, a UI primitives lib that respects motion prefs, and one 'agent framework' pretending to be something it isn't.",
    difficulty: "advanced",
    date: "Apr 14",
  },
  {
    category: "tutorials",
    categoryLabel: "Tutorials",
    title: "Build a streaming chat UI without reaching for LangChain",
    summary:
      "60 lines of TS, native fetch with stream parsing, and an incremental renderer. The setup is shorter than most onboarding checklists.",
    difficulty: "intermediate",
    date: "Apr 14",
  },
  {
    category: "ai-news",
    categoryLabel: "AI News",
    title: "The quiet policy shift that will reshape tool-use APIs",
    summary:
      "Three providers updated their ToS in the same week. Here's what changed, what it means for agents in production, and the contract clause you want to update today.",
    difficulty: "beginner",
    date: "Apr 13",
  },
  {
    category: "useful-ai-tips",
    categoryLabel: "Tips",
    title: "The 20-word prompt upgrade that fixed 80% of my flaky outputs",
    summary:
      "It's not 'think step by step.' It's a specific constraint on how the model is allowed to give up. I'll show you the before/after on a real task.",
    difficulty: "beginner",
    date: "Apr 13",
  },
];

const categoryColor = (slug: string) => `var(--color-cat-${slug})`;

const difficultyColor: Record<PreviewDrop["difficulty"], string> = {
  beginner: "var(--color-diff-beginner)",
  intermediate: "var(--color-diff-intermediate)",
  advanced: "var(--color-diff-advanced)",
};

export function LatestDrops() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 md:px-10 mt-20 md:mt-28">
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          <div className="type-meta">Latest</div>
          <h2 className="type-h1 mt-2">Today's drops</h2>
        </div>
        <div className="hidden md:block text-sm text-[color:var(--color-ink-3)]">
          {previews.length} new · updated every morning
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {previews.map((drop, i) => (
          <motion.article
            key={i}
            variants={revealItem}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="card group p-6 flex flex-col h-full relative overflow-hidden"
          >
            {/* Category accent bar — top edge */}
            <span
              aria-hidden
              className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
              style={{ background: categoryColor(drop.category) }}
            />

            <div className="flex items-center gap-2 mb-5">
              <span
                className="pill"
                style={{
                  background: `color-mix(in oklab, ${categoryColor(drop.category)} 12%, transparent)`,
                  color: categoryColor(drop.category),
                  borderColor: `color-mix(in oklab, ${categoryColor(drop.category)} 22%, transparent)`,
                }}
              >
                {drop.categoryLabel}
              </span>
              {drop.isNew && <span className="pill pill-new">New</span>}
            </div>

            <h3 className="type-h3 mb-3 group-hover:text-[color:var(--color-drop-ink)] transition-colors">
              {drop.title}
            </h3>
            <p className="text-[0.95rem] leading-[1.6] text-[color:var(--color-ink-2)] line-clamp-3">
              {drop.summary}
            </p>

            <div className="mt-6 pt-5 border-t border-[color:var(--color-line)] flex items-center justify-between text-xs">
              <div className="flex items-center gap-3 text-[color:var(--color-ink-3)] font-mono uppercase tracking-wider">
                <span
                  className="inline-flex items-center gap-1.5"
                  style={{ color: difficultyColor[drop.difficulty] }}
                >
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: "currentColor" }}
                  />
                  {drop.difficulty}
                </span>
                <span>·</span>
                <span>{drop.date}</span>
              </div>
              <span className="inline-flex items-center gap-1 font-[510] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-drop)] transition-colors">
                Read drop
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                />
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <p className="mt-8 text-sm text-[color:var(--color-ink-3)] italic">
        Preview cards. Real articles land in the next build pass — sourced from live TikTok drops.
      </p>
    </section>
  );
}
