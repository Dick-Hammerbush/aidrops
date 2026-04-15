import type { Variants, Transition } from "framer-motion";

/**
 * AIDrops motion language — 3 distinct creative patterns + supporting pieces.
 *
 * 1. Staggered reveal (cards / sections)
 * 2. Kinetic title (per-character mask reveal with slight rotation)
 * 3. Magnetic hover (see components/Magnetic.tsx — uses useMotionValue + spring)
 *
 * Easing borrowed from the Linear/Framer "compressed" aesthetic:
 * custom cubic-bezier that lands without bounce but with decelerating authority.
 */

export const easeOutExpo = [0.19, 1, 0.22, 1] as const;
export const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

// Base spring used for most transforms
export const baseSpring: Transition = {
  type: "spring",
  stiffness: 160,
  damping: 22,
  mass: 0.7,
};

// ── 1. Stagger container + child ──────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

// ── 2. Kinetic title (per-character) ──────────────────────────

export const titleContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.1,
    },
  },
};

export const titleChar: Variants = {
  hidden: { y: "115%", rotate: 4, opacity: 0 },
  show: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

// ── Scroll reveal (for sections below the fold) ───────────────

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

// ── Subtle fade for chrome (header, footer) ───────────────────

export const chromeFade: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo, delay: 0.1 },
  },
};
