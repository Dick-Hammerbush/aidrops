import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-line)] bg-[color:var(--color-paper-soft)]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
        <div>
          <div className="type-display text-[1.25rem] font-[510] tracking-[-0.02em]">
            AIDrops<span style={{ color: "var(--color-drop)" }}>.</span>
          </div>
          <p className="mt-2 text-sm text-[color:var(--color-ink-3)] max-w-xs">
            Fresh AI intel, dropped daily. Tools, agents, repos, workflows &amp; trends — curated from the people actually shipping.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
          <Link href="/" className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink)] transition-colors">
            Home
          </Link>
          <Link href="/category/ai-tools" className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink)] transition-colors">
            Categories
          </Link>
          <Link href="/about" className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink)] transition-colors">
            About
          </Link>
        </div>

        <div className="text-xs text-[color:var(--color-ink-3)] font-mono">
          © {new Date().getFullYear()} AIDrops
        </div>
      </div>
    </footer>
  );
}
