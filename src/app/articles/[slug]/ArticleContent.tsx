"use client";

import Link from "next/link";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { ScrollProgress } from "@/components/ScrollProgress";

type ActionItem = { label: string; url: string; type?: string };

type Article = {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  content: string | null;
  category: string;
  tags: string[];
  difficulty: string | null;
  action_items: ActionItem[];
  source_tiktok_url: string | null;
  author_handle: string | null;
  published_at: string;
};

type AdjacentArticle = { slug: string; title: string } | null;

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

const difficultyMeta: Record<string, { label: string; color: string; emoji: string }> = {
  beginner: { label: "Beginner", color: "var(--color-diff-beginner)", emoji: "\u{1F7E2}" },
  intermediate: { label: "Intermediate", color: "var(--color-diff-intermediate)", emoji: "\u{1F7E1}" },
  advanced: { label: "Advanced", color: "var(--color-diff-advanced)", emoji: "\u{1F534}" },
};

const ease: [number, number, number, number] = [0.19, 1, 0.22, 1];

const staggerIn = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export function ArticleContent({
  article,
  prev,
  next,
}: {
  article: Article;
  prev: AdjacentArticle;
  next: AdjacentArticle;
}) {
  const catColor = `var(--color-cat-${article.category})`;
  const diff = article.difficulty ? difficultyMeta[article.difficulty] : null;
  const publishedDate = new Date(article.published_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <ScrollProgress />
      <motion.article
        variants={staggerIn}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[780px] px-6 md:px-10 py-12 md:py-20"
      >
        {/* Breadcrumb */}
        <motion.div variants={fadeUp} className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-ink-3)] hover:text-[color:var(--color-ink)] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to drops
          </Link>
        </motion.div>

        {/* Header — staggered badges + title */}
        <motion.div variants={staggerIn}>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-5">
            <Link
              href={`/category/${article.category}`}
              className="pill transition-transform duration-200 hover:scale-105"
              style={{
                background: `color-mix(in oklab, ${catColor} 12%, transparent)`,
                color: catColor,
                borderColor: `color-mix(in oklab, ${catColor} 22%, transparent)`,
              }}
            >
              {categoryLabels[article.category] ?? article.category}
            </Link>
            {diff && (
              <span
                className="pill transition-transform duration-200 hover:scale-105"
                style={{ color: diff.color, borderColor: `color-mix(in oklab, ${diff.color} 30%, transparent)` }}
              >
                {diff.emoji} {diff.label}
              </span>
            )}
            <span className="type-meta">{publishedDate}</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="type-h1 mb-6">
            {article.title}
          </motion.h1>
        </motion.div>

        {/* Summary callout */}
        {article.summary && (
          <motion.div
            variants={scaleIn}
            className="callout-block mb-10"
          >
            <p className="type-lede">{article.summary}</p>
          </motion.div>
        )}

        {/* Content */}
        {article.content && (
          <motion.div
            variants={fadeUp}
            className="prose-body mb-12"
          >
            <Markdown
              components={{
                h2: ({ children }) => (
                  <motion.h2
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease }}
                    className="type-h2 mt-10 mb-4"
                  >
                    {children}
                  </motion.h2>
                ),
                h3: ({ children }) => (
                  <motion.h3
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease }}
                    className="type-h3 mt-8 mb-3"
                  >
                    {children}
                  </motion.h3>
                ),
                p: ({ children }) => <p className="type-body mb-4">{children}</p>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-link"
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[color:var(--color-ink-2)]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-[color:var(--color-ink-2)]">
                    {children}
                  </ol>
                ),
                code: ({ children, className }) => {
                  const isBlock = className?.includes("language-");
                  if (isBlock) {
                    return (
                      <code className="block bg-[color:var(--color-ink)] text-[color:var(--color-paper)] rounded-[var(--radius-md)] p-4 mb-4 text-sm font-mono overflow-x-auto">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="px-1.5 py-0.5 rounded-[var(--radius-xs)] bg-[color:var(--color-paper-soft)] border border-[color:var(--color-line)] text-[0.9em] font-mono">
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => <pre className="mb-4">{children}</pre>,
                blockquote: ({ children }) => (
                  <div className="callout-block my-6">
                    {children}
                  </div>
                ),
              }}
            >
              {article.content}
            </Markdown>
          </motion.div>
        )}

        <div className="section-divider" />

        {/* Action Items */}
        {article.action_items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="mb-12 mt-8"
          >
            <h2 className="type-h2 mb-5">Take Action</h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {article.action_items.map((item: ActionItem, i: number) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-card"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={16} className="text-[color:var(--color-drop)] shrink-0" />
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Source */}
        {article.source_tiktok_url && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 p-4 rounded-[var(--radius-md)] border border-[color:var(--color-line)] bg-[color:var(--color-paper-soft)] text-sm text-[color:var(--color-ink-3)]"
          >
            Inspired by a{" "}
            <a
              href={article.source_tiktok_url}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link"
            >
              video from {article.author_handle ? `@${article.author_handle}` : "a creator"}
            </a>
          </motion.div>
        )}

        {/* Tags */}
        {article.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="pill text-[0.7rem] transition-all duration-200 hover:scale-105 hover:border-[color:var(--color-line-strong)]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        {/* Prev/Next Navigation — card style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="border-t border-[color:var(--color-line)] pt-8 grid grid-cols-2 gap-4"
        >
          {prev ? (
            <Link href={`/articles/${prev.slug}`} className="group">
              <div className="nav-card h-full flex flex-col gap-2">
                <span className="type-meta">Previous</span>
                <span className="text-sm font-[510] group-hover:text-[color:var(--color-drop)] transition-colors line-clamp-2">
                  <ArrowLeft size={14} className="inline mr-1 transition-transform duration-300 group-hover:-translate-x-1" />
                  {prev.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/articles/${next.slug}`} className="group">
              <div className="nav-card h-full flex flex-col gap-2 text-right">
                <span className="type-meta">Next</span>
                <span className="text-sm font-[510] group-hover:text-[color:var(--color-drop)] transition-colors line-clamp-2">
                  {next.title}
                  <ArrowRight size={14} className="inline ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </motion.article>
    </>
  );
}
