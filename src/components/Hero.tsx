"use client";

import { HeroTitle } from "./HeroTitle";
import { FeaturedDrop } from "./FeaturedDrop";
import { Magnetic } from "./Magnetic";
import { ArrowDown } from "lucide-react";

type Article = {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  category: string;
  difficulty: string | null;
  published_at: string;
};

export function Hero({ featured }: { featured?: Article | null }) {
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
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16 hero-stagger">
          {/* Left column */}
          <div className="flex-1 min-w-0">
            {/* Kinetic title — nowrap, responsive clamp */}
            <div style={{ animationDelay: "0.05s" }}>
              <HeroTitle text="AIDrops" />
            </div>

            {/* Tagline */}
            <p
              className="type-display mt-4 md:mt-6 text-[clamp(1.75rem,3.4vw,2.75rem)] text-[color:var(--color-ink-2)] max-w-[20ch]"
              style={{ animationDelay: "0.15s" }}
            >
              Fresh AI intel,
              <span className="inline-block ml-2" style={{ color: "var(--color-drop)" }}>
                dropped daily.
              </span>
            </p>

            {/* Descriptor */}
            <p className="type-lede mt-6 md:mt-8 max-w-[54ch]" style={{ animationDelay: "0.28s" }}>
              AI tools, agents, and workflows curated by IT professionals who actually use this
              stuff. No upsell, no marketing. Just pure AI goodness. Bookmark this — come back
              when you're ready to build.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 md:mt-12 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <Magnetic strength={0.25}>
                <a href="#latest" className="btn btn-primary">
                  See today's drops
                  <ArrowDown size={16} strokeWidth={2.5} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="/about" className="btn btn-ghost">
                  About this project
                </a>
              </Magnetic>
            </div>

            {/* Badge row — category pills */}
            <div
              className="mt-12 md:mt-16 flex flex-wrap items-center gap-2"
              style={{ animationDelay: "0.52s" }}
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

          {/* Right column — Featured Drop */}
          {featured && (
            <div
              className="lg:w-[420px] shrink-0"
              style={{ animationDelay: "0.35s" }}
            >
              <FeaturedDrop article={featured} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
