"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { titleContainer, titleChar } from "@/lib/motion/variants";

/**
 * Kinetic hero title — each character rises from below a clipping mask, with
 * a tiny rotation for liveliness. Mount-gated: SSR and the first React render
 * produce a visible static title so the page is readable without JS and during
 * hydration. On mount, we swap to the motion version which replays from hidden
 * → shown over ~0.8s. That yields one brief retrigger of the entry animation
 * in real browsers, and a normal static title everywhere else.
 */
export function HeroTitle({ text }: { text: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // rAF guarantees we paint the static title once before replacing it with
    // the motion version — prevents a flash of invisible content.
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return (
      <h1 aria-label={text} className="type-display-xl tracking-tight whitespace-nowrap">
        {text}
      </h1>
    );
  }

  return (
    <motion.h1
      aria-label={text}
      className="type-display-xl tracking-tight whitespace-nowrap"
      initial="hidden"
      animate="show"
      variants={titleContainer}
    >
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
          }}
        >
          <motion.span
            variants={titleChar}
            style={{ display: "inline-block" }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
