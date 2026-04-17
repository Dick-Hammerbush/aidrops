"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Wrench,
  BookOpen,
  Layers,
  Hammer,
  Rocket,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Mail,
  CheckCircle,
} from "lucide-react";

type Article = {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  category: string;
  difficulty: string | null;
  published_at: string;
};

type Step = {
  num: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  encouragement: string;
  relatedCategories: string[];
  tools?: { name: string; url: string; why: string }[];
};

const STEPS: Step[] = [
  {
    num: 1,
    title: "Dream It",
    icon: <Lightbulb size={24} />,
    description:
      "Every great project starts with an idea. What problem do you want to solve? Who is it for? Don't worry about feasibility — that's step 2.",
    details: [
      "Write down your idea in one sentence",
      "Ask yourself: 'Who benefits from this?'",
      "Don't Google if it already exists — your version matters",
      "Ideas don't need to be original, they need to be useful",
    ],
    encouragement: "This is the fun part. No wrong answers here.",
    relatedCategories: ["ai-news", "useful-ai-tips"],
  },
  {
    num: 2,
    title: "Gear Up",
    icon: <Wrench size={24} />,
    description:
      "Set up the essential tools. This takes 15 minutes, and you'll use them for everything from here on.",
    details: [
      "Install VS Code or Cursor (your code editor)",
      "Create a GitHub account (free — it's where code lives)",
      "Get a Claude or ChatGPT subscription (your AI partner)",
      "Install Node.js (makes everything run)",
    ],
    encouragement: "You've got this. Each tool has a 'Download' button — click it, install, done.",
    relatedCategories: ["ai-tools", "skills"],
    tools: [
      { name: "VS Code", url: "https://code.visualstudio.com", why: "Free code editor by Microsoft" },
      { name: "Cursor", url: "https://cursor.sh", why: "AI-powered code editor (VS Code fork)" },
      { name: "GitHub", url: "https://github.com/signup", why: "Free — where your code lives" },
      { name: "Claude", url: "https://claude.ai", why: "Your AI development partner" },
      { name: "Node.js", url: "https://nodejs.org", why: "Makes JavaScript run outside browsers" },
    ],
  },
  {
    num: 3,
    title: "Learn the Basics",
    icon: <BookOpen size={24} />,
    description:
      "You don't need a CS degree. These curated resources teach you what actually matters — the practical stuff.",
    details: [
      "Start with free courses from Anthropic and OpenAI",
      "Learn prompting — it's the #1 AI skill",
      "Watch how others build with AI (our articles show you)",
      "Don't try to learn everything — learn what you need for your idea",
    ],
    encouragement: "Easier than you think. Start with one article, try one thing.",
    relatedCategories: ["learning", "courses", "tutorials"],
  },
  {
    num: 4,
    title: "Pick Your Stack",
    icon: <Layers size={24} />,
    description:
      "What are you building? A website, an automation, a data tool? Each path has a best-fit toolkit.",
    details: [
      "Web app → Next.js + Vercel + Supabase (this site runs on it!)",
      "Automation → n8n or Make.com + AI APIs",
      "Data analysis → Python + Claude or ChatGPT",
      "Content creation → Claude + your favorite platform",
    ],
    encouragement: "Don't overthink this. Pick one, start building, switch later if needed.",
    relatedCategories: ["ai-tools", "workflows", "github-repos"],
  },
  {
    num: 5,
    title: "Build Your MVP",
    icon: <Hammer size={24} />,
    description:
      "The minimum viable product. Not perfect — just working. AI can write most of the code; you guide it.",
    details: [
      "Describe what you want to Claude or Cursor in plain English",
      "Start with the simplest possible version",
      "Don't build features nobody asked for",
      "Test it yourself, then show one person",
    ],
    encouragement: "Your first version will be rough. That's normal. Ship it anyway.",
    relatedCategories: ["tutorials", "ai-agents", "github-repos"],
  },
  {
    num: 6,
    title: "Ship It",
    icon: <Rocket size={24} />,
    description:
      "Put it online. Show the world. Vercel deploys in one click. GitHub Pages is free. No excuses.",
    details: [
      "Deploy to Vercel (free for personal projects)",
      "Or use GitHub Pages, Netlify, or Railway",
      "Share the link with 3 people and ask for feedback",
      "Iterate based on what real users say, not what you imagine",
    ],
    encouragement: "You miss 100% of the shots you don't take. — Wayne Gretzky — Michael Scott",
    relatedCategories: ["workflows", "skills", "systems"],
  },
];

const categoryColor = (slug: string) => `var(--color-cat-${slug})`;
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

const ease: [number, number, number, number] = [0.19, 1, 0.22, 1];

export function JourneyWizard({
  articlesByCategory,
}: {
  articlesByCategory: Record<string, Article[]>;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const step = STEPS[activeStep];

  // Get related articles for this step
  const relatedArticles: Article[] = [];
  for (const cat of step.relatedCategories) {
    for (const a of articlesByCategory[cat] ?? []) {
      if (relatedArticles.length < 3 && !relatedArticles.find((r) => r.id === a.id)) {
        relatedArticles.push(a);
      }
    }
  }

  return (
    <section className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 md:py-20">
      {/* Hero intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="max-w-[680px] mb-14"
      >
        <div className="type-meta mb-4">Your AI Journey</div>
        <h1 className="type-h1 mb-6">
          From idea to shipped product.
          <br />
          <span style={{ color: "var(--color-drop)" }}>No experience required.</span>
        </h1>
        <p className="type-lede">
          You don&apos;t need to be a developer. You don&apos;t need to understand terminal commands
          yet. You just need an idea and 30 minutes.
        </p>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0"
      >
        {STEPS.map((s, i) => (
          <button
            key={s.num}
            onClick={() => setActiveStep(i)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-pill)] text-sm font-[510] whitespace-nowrap transition-all duration-300 ${
              i === activeStep
                ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
                : i < activeStep
                  ? "bg-[color:var(--color-paper-soft)] text-[color:var(--color-ink)] border border-[color:var(--color-line)]"
                  : "bg-[color:var(--color-card)] text-[color:var(--color-ink-3)] border border-[color:var(--color-line)]"
            }`}
          >
            {i < activeStep ? (
              <CheckCircle size={16} className="text-[color:var(--color-success)]" />
            ) : (
              <span
                className={`inline-flex items-center justify-center h-5 w-5 rounded-full text-xs font-[510] ${
                  i === activeStep
                    ? "bg-[color:var(--color-drop)] text-white"
                    : "bg-[color:var(--color-paper-soft)] text-[color:var(--color-ink-3)]"
                }`}
              >
                {s.num}
              </span>
            )}
            <span className="hidden sm:inline">{s.title}</span>
          </button>
        ))}
      </motion.div>

      {/* Active step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.4, ease }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main content — 2 cols */}
          <div className="lg:col-span-2">
            <div className="card p-8 md:p-10 relative overflow-hidden">
              {/* Step accent */}
              <span
                aria-hidden
                className="absolute top-0 left-0 h-[4px] w-full"
                style={{
                  background: `linear-gradient(90deg, var(--color-drop), var(--color-cat-ai-tools))`,
                }}
              />

              <div className="flex items-center gap-4 mb-6">
                <span
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full"
                  style={{
                    background: "color-mix(in oklab, var(--color-drop) 12%, transparent)",
                    color: "var(--color-drop)",
                  }}
                >
                  {step.icon}
                </span>
                <div>
                  <div className="type-meta">Step {step.num} of {STEPS.length}</div>
                  <h2 className="type-h2">{step.title}</h2>
                </div>
              </div>

              <p className="type-lede mb-8">{step.description}</p>

              <div className="space-y-3 mb-8">
                {step.details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-1.5 shrink-0 inline-block h-2 w-2 rounded-full"
                      style={{ background: "var(--color-drop)" }}
                    />
                    <span className="type-body text-[color:var(--color-ink-2)]">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tools section */}
              {step.tools && (
                <div className="mb-8">
                  <h3 className="type-h3 mb-4">Tools to install</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.tools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-card group"
                      >
                        <ArrowUpRight size={16} className="text-[color:var(--color-drop)] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <div>
                          <div className="font-[510]">{tool.name}</div>
                          <div className="text-xs text-[color:var(--color-ink-3)]">{tool.why}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Encouragement */}
              <div className="callout-block">
                <p className="type-body italic text-[color:var(--color-ink-2)]">
                  {step.encouragement}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[color:var(--color-line)]">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="btn btn-ghost disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ArrowLeft size={16} />
                  Previous
                </button>
                {activeStep < STEPS.length - 1 ? (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="btn btn-primary"
                  >
                    Next step
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <Link href="/categories" className="btn btn-primary">
                    Explore all drops
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar — related articles */}
          <div className="lg:col-span-1">
            <div className="sticky top-[84px]">
              <h3 className="type-meta mb-4">Related reading</h3>
              <div className="space-y-3">
                {relatedArticles.length > 0 ? (
                  relatedArticles.map((article, i) => {
                    const catCol = categoryColor(article.category);
                    return (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease }}
                      >
                        <Link
                          href={`/articles/${article.slug}`}
                          className="block card card-glow group p-4 relative overflow-hidden"
                        >
                          <span
                            aria-hidden
                            className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                            style={{ background: catCol }}
                          />
                          <span
                            className="pill text-[0.65rem] mb-2"
                            style={{
                              background: `color-mix(in oklab, ${catCol} 12%, transparent)`,
                              color: catCol,
                              borderColor: `color-mix(in oklab, ${catCol} 22%, transparent)`,
                            }}
                          >
                            {categoryLabels[article.category] ?? article.category}
                          </span>
                          <h4 className="text-sm font-[510] leading-snug group-hover:text-[color:var(--color-drop-ink)] transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                        </Link>
                      </motion.div>
                    );
                  })
                ) : (
                  <p className="text-sm text-[color:var(--color-ink-3)]">
                    More articles coming soon for this step.
                  </p>
                )}
              </div>

              {/* Consulting CTA */}
              <div className="mt-8 p-5 rounded-[var(--radius-lg)] border border-dashed border-[color:var(--color-line-strong)] bg-[color:var(--color-paper-soft)]">
                <h4 className="type-h3 text-base mb-2">Want a guide?</h4>
                <p className="text-sm text-[color:var(--color-ink-2)] mb-4">
                  One hour of guided consultation gets you further than a month of YouTube tutorials. $500/hr.
                </p>
                <a
                  href="mailto:PLACEHOLDER@email.com?subject=AIDrops Consultation"
                  className="btn btn-primary text-sm h-9"
                >
                  <Mail size={14} />
                  Book a session
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
