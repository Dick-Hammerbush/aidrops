"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { staggerContainer, revealItem } from "@/lib/motion/variants";
import { Send, RefreshCw, Eye, EyeOff } from "lucide-react";

type QueueEntry = {
  id: string;
  tiktok_url: string;
  tiktok_video_id: string | null;
  processing_status: string;
  error_message: string | null;
  created_at: string;
};

type Article = {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: string;
  published_at: string | null;
  created_at: string;
};

const statusColors: Record<string, string> = {
  pending: "var(--color-warn)",
  transcribing: "var(--color-cat-ai-tools)",
  classifying: "var(--color-cat-ai-agents)",
  generating: "var(--color-cat-skills)",
  complete: "var(--color-success)",
  failed: "var(--color-danger)",
  rejected: "var(--color-ink-3)",
  draft: "var(--color-warn)",
  review: "var(--color-cat-ai-tools)",
  published: "var(--color-success)",
};

export function AdminDashboard() {
  const [url, setUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const [qRes, aRes] = await Promise.all([
      fetch("/api/queue"),
      fetch("/api/articles?limit=50&status=all"),
    ]);
    if (qRes.ok) setQueue(await qRes.json());
    if (aRes.ok) {
      const body = await aRes.json();
      setArticles(body.articles ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setSubmitting(true);
    setSubmitMsg(null);

    const res = await fetch("/api/process", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tiktok_url: url.trim() }),
    });

    const data = await res.json();
    if (res.ok) {
      setSubmitMsg({ ok: true, text: "Added to queue!" });
      setUrl("");
      fetchData();
    } else {
      setSubmitMsg({ ok: false, text: data.error ?? "Failed to submit" });
    }
    setSubmitting(false);
  }

  async function togglePublish(article: Article) {
    const isPublished = article.status === "published";
    const newStatus = isPublished ? "draft" : "published";
    const res = await fetch(`/api/articles/${article.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: newStatus,
        published_at: newStatus === "published" ? new Date().toISOString() : null,
      }),
    });
    if (res.ok) fetchData();
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 md:py-20"
    >
      <motion.div variants={revealItem}>
        <span className="type-meta">Admin</span>
        <h1 className="type-h1 mt-2 mb-8">Dashboard</h1>
      </motion.div>

      {/* Submit Form */}
      <motion.div variants={revealItem} className="card p-6 mb-10">
        <h2 className="type-h3 mb-4">Submit a TikTok Drop</h2>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.tiktok.com/@user/video/..."
            className="flex-1 h-11 px-4 rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-paper)] text-sm focus:outline-none focus:border-[color:var(--color-drop)] transition-colors"
          />
          <button
            type="submit"
            disabled={submitting || !url.trim()}
            className="btn btn-primary disabled:opacity-50"
          >
            {submitting ? <RefreshCw size={16} className="animate-spin" /> : <Send size={16} />}
            Submit
          </button>
        </form>
        {submitMsg && (
          <p
            className="mt-3 text-sm"
            style={{ color: submitMsg.ok ? "var(--color-success)" : "var(--color-danger)" }}
          >
            {submitMsg.text}
          </p>
        )}
      </motion.div>

      {/* Processing Queue */}
      <motion.div variants={revealItem} className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="type-h2">Processing Queue</h2>
          <button onClick={fetchData} className="btn btn-ghost h-9 text-sm">
            <RefreshCw size={14} />
            Refresh
          </button>
        </div>
        {queue.length === 0 ? (
          <p className="text-sm text-[color:var(--color-ink-3)] py-8 text-center">
            Queue is empty.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[color:var(--color-line)] text-left type-meta">
                  <th className="pb-3 pr-4">URL</th>
                  <th className="pb-3 pr-4">Video ID</th>
                  <th className="pb-3 pr-4">Status</th>
                  <th className="pb-3">Created</th>
                </tr>
              </thead>
              <tbody>
                {queue.map((entry) => (
                  <tr key={entry.id} className="border-b border-[color:var(--color-line)]/50">
                    <td className="py-3 pr-4 max-w-[300px] truncate">
                      <a
                        href={entry.tiktok_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ink-link text-sm"
                      >
                        {entry.tiktok_url}
                      </a>
                    </td>
                    <td className="py-3 pr-4 font-mono text-xs text-[color:var(--color-ink-3)]">
                      {entry.tiktok_video_id ?? "—"}
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className="pill"
                        style={{
                          color: statusColors[entry.processing_status] ?? "var(--color-ink-3)",
                          borderColor: `color-mix(in oklab, ${statusColors[entry.processing_status] ?? "var(--color-ink-3)"} 30%, transparent)`,
                        }}
                      >
                        {entry.processing_status}
                      </span>
                    </td>
                    <td className="py-3 text-[color:var(--color-ink-3)]">
                      {new Date(entry.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Articles */}
      <motion.div variants={revealItem}>
        <h2 className="type-h2 mb-4">Articles</h2>
        {articles.length === 0 ? (
          <p className="text-sm text-[color:var(--color-ink-3)] py-8 text-center">
            No articles yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[color:var(--color-line)] text-left type-meta">
                  <th className="pb-3 pr-4">Title</th>
                  <th className="pb-3 pr-4">Category</th>
                  <th className="pb-3 pr-4">Status</th>
                  <th className="pb-3 pr-4">Date</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id} className="border-b border-[color:var(--color-line)]/50">
                    <td className="py-3 pr-4 font-[510] max-w-[300px] truncate">
                      {article.title}
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className="pill"
                        style={{
                          color: `var(--color-cat-${article.category})`,
                          borderColor: `color-mix(in oklab, var(--color-cat-${article.category}) 22%, transparent)`,
                        }}
                      >
                        {article.category}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <span
                        className="pill"
                        style={{
                          color: statusColors[article.status] ?? "var(--color-ink-3)",
                          borderColor: `color-mix(in oklab, ${statusColors[article.status] ?? "var(--color-ink-3)"} 30%, transparent)`,
                        }}
                      >
                        {article.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-[color:var(--color-ink-3)]">
                      {article.published_at
                        ? new Date(article.published_at).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => togglePublish(article)}
                        className="btn btn-ghost h-8 text-xs gap-1.5"
                      >
                        {article.status === "published" ? (
                          <>
                            <EyeOff size={13} /> Unpublish
                          </>
                        ) : (
                          <>
                            <Eye size={13} /> Publish
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
