"use client";

type TickerArticle = { title: string; slug: string };

export function NewsTicker({ articles }: { articles: TickerArticle[] }) {
  if (articles.length === 0) return null;

  // Double items for seamless loop
  const items = [...articles, ...articles];

  return (
    <div
      className="w-full overflow-hidden py-2.5"
      style={{ background: "color-mix(in oklab, var(--color-drop) 8%, var(--color-paper-soft))" }}
    >
      <div className="ticker-track flex items-center whitespace-nowrap gap-0">
        {items.map((article, i) => (
          <a
            key={`${article.slug}-${i}`}
            href={`/articles/${article.slug}`}
            className="inline-flex items-center gap-3 px-4 text-[0.8rem] font-[510] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-drop)] transition-colors shrink-0"
          >
            <span
              aria-hidden
              className="inline-block h-[5px] w-[5px] rounded-full shrink-0"
              style={{ background: "var(--color-drop)" }}
            />
            {article.title}
          </a>
        ))}
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 40s linear infinite;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
            flex-wrap: wrap;
            width: auto;
          }
        }
      `}</style>
    </div>
  );
}
