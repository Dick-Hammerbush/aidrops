"use client";

import { motion } from "framer-motion";
import { titleContainer, titleChar } from "@/lib/motion/variants";

/**
 * Kinetic hero title — each character rises from below a clipping mask, with
 * a tiny rotation for liveliness. Spaces are preserved as non-breaking spans
 * so letter tracking stays uniform.
 */
export function HeroTitle({ text }: { text: string }) {
  return (
    <motion.h1
      aria-label={text}
      className="type-display-xl tracking-tight"
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
