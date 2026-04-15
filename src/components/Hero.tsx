"use client";

import { HeroTitle } from "./HeroTitle";
import { Magnetic } from "./Magnetic";
import { ArrowDown } from "lucide-react";

/**
 * Hero — server-renders visible. No JS-driven initial opacity tricks at this level
 * (would flash invisible if hydration lags). The kinetic HeroTitle is the one
 * entry animation, mount-gated so SSR output is readable. Gradient mesh + grain
 * run via CSS and animate regardless of hydration timing.
 */
export function Hero() {
  const categories = [
    { label: "AI Tools", color: "var(--color-cat-ai-tools)" },
    { label: "Agents", color: "var(--color-cat-ai-agents)" },
    { label: "Repos", color: "var(--color-cat-github-repos)" },
    { label: "Workflows", color: "var(--color-cat-workflows)" },
    { label: "News", color: "var(--color-cat-ai-news)" },
    { label: "Tutorials", color: "var(--color-cat-tutorials)" },
    { label: "Skills", color: "var(--color-cat-skills)" },
    { label: "Tips", color: "var(--color-cat-useful-ai-tips)" },
  ];

  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 overflow-hidden">
      {/* Animated gradient mesh (pure CSS) */}
      <div className="gradient-mesh" />
      <div className="grain" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 hero-stagger">
        {/* Eyebrow */}
        <div className="type-meta mb-6 md:mb-8" style={{ animationDelay: "0.05s" }}>
          <span
            aria-hidden
            className="inline-block h-[6px] w-[6px] rounded-full mr-2 align-middle"
            style={{ background: "var(--color-drop)" }}
          />
          Drop #001 · Building in public
        </div>

        {/* Kinetic title — mount-gated so SSR shows it statically */}
        <div className="max-w-[16ch]">
          <HeroTitle text="AIDrops" />
        </div>

        {/* Tagline */}
        <p
          className="type-display mt-4 md:mt-6 text-[clamp(1.75rem,3.4vw,2.75rem)] text-[color:var(--color-ink-2)] max-w-[20ch]"
          style={{ animationDelay: "0.2s" }}
        >
          Fresh AI intel,
          <span className="inline-block ml-2" style={{ color: "var(--color-drop)" }}>
            dropped daily.
          </span>
        </p>

        {/* Descriptor */}
        <p className="type-lede mt-6 md:mt-8 max-w-[58ch]" style={{ animationDelay: "0.32s" }}>
          Every day we watch a wall of AI TikToks so you don't have to — then rewrite the
          keepers into short, actionable drops. Tools, agents, repos, workflows. No hype.
          No roundups. Just what's worth trying this week.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 md:mt-12 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.44s" }}
        >
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
        </div>

        {/* Badge row — category pills */}
        <div
          className="mt-16 md:mt-20 flex flex-wrap items-center gap-2"
          style={{ animationDelay: "0.56s" }}
        >
          <span className="type-meta mr-2">Tracking</span>
          {categories.map((c) => (
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
        </div>
      </div>
    </section>
  );
}
