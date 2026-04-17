"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.19, 1, 0.22, 1];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
      className="mt-24 border-t border-[color:var(--color-line)] bg-[color:var(--color-paper-soft)]"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
        <div>
          <div className="type-display text-[1.25rem] font-[510] tracking-[-0.02em]">
            AIDrops<span style={{ color: "var(--color-drop)" }}>.</span>
          </div>
          <p className="mt-2 text-sm text-[color:var(--color-ink-3)] max-w-xs">
            Fresh AI intel, dropped daily. Tools, agents, repos, and workflows — curated by IT professionals who actually use this stuff.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
          {[
            { label: "Home", href: "/" },
            { label: "How Can I Start?", href: "/start" },
            { label: "Categories", href: "/categories" },
            { label: "About", href: "/about" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-drop)] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="text-xs text-[color:var(--color-ink-3)] font-mono">
          © {new Date().getFullYear()} AIDrops
        </div>
      </div>
    </motion.footer>
  );
}
