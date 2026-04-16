"use client";

import { motion } from "framer-motion";
import { staggerContainer, revealItem } from "@/lib/motion/variants";

export function AboutContent() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-[680px] px-6 md:px-10 py-16 md:py-24"
    >
      <motion.div variants={revealItem} className="mb-4">
        <span className="type-meta">About</span>
      </motion.div>

      <motion.h1 variants={revealItem} className="type-h1 mb-8">
        Fresh AI intel, dropped daily.
      </motion.h1>

      <motion.div variants={revealItem} className="prose-body space-y-6">
        <p className="type-lede">
          AIDrops delivers daily drops of the best AI tools, agents, repos, and
          workflows — discovered on TikTok, rewritten as actionable articles.
        </p>

        <p className="type-body">
          No hype, no fluff. Just what's worth your time, with clear steps to
          try it yourself.
        </p>

        <p className="type-body">
          Every article starts as a short-form video from a creator who's
          actually shipping. We watch, verify, research, and rewrite it into
          something you can act on in under five minutes. Real tools, real
          links, real steps.
        </p>

        <p className="type-body">
          The categories span everything that moves the needle: AI tools and
          agents, open-source repos worth cloning, workflows that compress
          hours into minutes, tutorials you can follow today, and the news
          that actually matters.
        </p>

        <p className="type-body text-[color:var(--color-ink-3)]">
          Built with Next.js, Supabase, and a healthy obsession with signal
          over noise.
        </p>
      </motion.div>
    </motion.section>
  );
}
