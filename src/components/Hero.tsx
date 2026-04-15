"use client";

import { motion } from "framer-motion";
import { revealItem, staggerContainer } from "@/lib/motion/variants";
import { HeroTitle } from "./HeroTitle";
import { Magnetic } from "./Magnetic";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="gradient-mesh" />
      <div className="grain" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-[1280px] px-6 md:px-10"
      >
        {/* Eyebrow */}
        <motion.div variants={revealItem} className="type-meta mb-6 md:mb-8">
          <span
            aria-hidden
            className="inline-block h-[6px] w-[6px] rounded-full mr-2 align-middle"
            style={{ background: "var(--color-drop)" }}
          />
          Drop #001 · Building in public
        </motion.div>

        {/* Kinetic title */}
        <div className="max-w-[16ch]">
          <HeroTitle text="AIDrops" />
        </div>

        {/* Tagline */}
        <motion.p
          variants={revealItem}
          className="type-display mt-4 md:mt-6 text-[clamp(1.75rem,3.4vw,2.75rem)] text-[color:var(--color-ink-2)] max-w-[20ch]"
        >
          Fresh AI intel,
          <span className="inline-block ml-2" style={{ color: "var(--color-drop)" }}>
            dropped daily.
          </span>
        </motion.p>

        {/* Descriptor */}
        <motion.p
          variants={revealItem}
          className="type-lede mt-6 md:mt-8 max-w-[58ch]"
        >
          Every day we watch a wall of AI TikToks so you don't have to — then rewrite the
          keepers into short, actionable drops. Tools, agents, repos, workflows. No hype.
          No roundups. Just what's worth trying this week.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={revealItem} className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
          <Magnetic strength={0.25}>
            <a href="#latest" className="btn btn-primary">
              See today's drops
              <ArrowDown size={16} strokeWidth={2.5} />
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="/about" className="btn btn-ghost">
              How this works
            </a>
          </Magnetic>
          <span className="text-xs text-[color:var(--color-ink-3)] font-mono uppercase tracking-wider ml-2">
            5 new · every morning · 2–6am CET
          </span>
        </motion.div>

        {/* Badge row — category pills as a typographic preview */}
        <motion.div
          variants={revealItem}
          className="mt-16 md:mt-20 flex flex-wrap items-center gap-2"
        >
          <span className="type-meta mr-2">Tracking</span>
          {[
            { label: "AI Tools", color: "var(--color-cat-ai-tools)" },
            { label: "Agents", color: "var(--color-cat-ai-agents)" },
            { label: "Repos", color: "var(--color-cat-github-repos)" },
            { label: "Workflows", color: "var(--color-cat-workflows)" },
            { label: "News", color: "var(--color-cat-ai-news)" },
            { label: "Tutorials", color: "var(--color-cat-tutorials)" },
            { label: "Skills", color: "var(--color-cat-skills)" },
            { label: "Tips", color: "var(--color-cat-useful-ai-tips)" },
          ].map((c) => (
            <span
              key={c.label}
              className="pill"
              style={{
                background: `color-mix(in oklab, ${c.color} 10%, transparent)`,
                color: c.color,
                borderColor: `color-mix(in oklab, ${c.color} 22%, transparent)`,
              }}
            >
              {c.label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
