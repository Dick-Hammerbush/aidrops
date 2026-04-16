"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How Can I Start?", href: "/start" },
  { label: "Categories", href: "/category/ai-tools" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--color-paper)]/80 border-b border-[color:var(--color-line)]"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-[68px] flex items-center justify-between">
        {/* Logo — gradient-shift wordmark */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="relative inline-flex items-center">
            <span
              className="type-display font-[510] text-[1.35rem] tracking-[-0.02em] bg-clip-text text-transparent transition-[background-position] duration-[1200ms]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-ink) 0%, var(--color-ink) 40%, var(--color-drop) 55%, var(--color-ink) 70%, var(--color-ink) 100%)",
                backgroundSize: "220% 100%",
                backgroundPosition: "0% 50%",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundPosition = "100% 50%";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundPosition = "0% 50%";
              }}
            >
              AIDrops
            </span>
            <span
              aria-hidden
              className="ml-1 block h-2 w-2 rounded-full"
              style={{
                background: "var(--color-drop)",
                boxShadow: "0 0 0 0 rgba(255,74,28,0.5)",
                animation: "drop-pulse 2.4s var(--ease-out-expo) infinite",
              }}
            />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-sm font-[510] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block w-[120px]" />
      </div>

      <style jsx>{`
        @keyframes drop-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 74, 28, 0.55); transform: scale(1); }
          50% { box-shadow: 0 0 0 8px rgba(255, 74, 28, 0); transform: scale(1.15); }
        }
      `}</style>
    </header>
  );
}
