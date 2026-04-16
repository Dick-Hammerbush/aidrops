"use client";

import { motion } from "framer-motion";
import { staggerContainer, revealItem } from "@/lib/motion/variants";
import { Mail } from "lucide-react";

export function AboutContent() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-[680px] px-6 md:px-10 py-16 md:py-24"
    >
      <motion.div variants={revealItem} className="mb-4">
        <span className="type-meta">About</span>
      </motion.div>

      <motion.h1 variants={revealItem} className="type-h1 mb-10">
        Hey, does anybody even read "About" sections on any website these days?
      </motion.h1>

      <motion.div variants={revealItem} className="prose-body space-y-5">
        <p className="type-body">
          Hi, my name is Richard Hammerbush. I've been in IT for almost 20 years, building
          top-notch solutions for both enterprises and high-end startups — doing the boring
          software development and data migration stuff as well as fancy, exciting, cutting-edge
          technology innovation.
        </p>

        <p className="type-body">
          However, I've always been on the side of business analysis, project management,
          product management, and user experience design. Until now, I hadn't really been able
          to build anything myself end-to-end. With all the AI innovation happening, I find
          myself more capable of creating and sharing my ideas and experience with other
          people — via tools like this website.
        </p>

        <p className="type-body">
          How did I end up creating this? Well, honestly, I was experimenting with a bunch of
          AI tools and solutions to build a simple, clear website with nice colors and
          animations... then suddenly it occurred to me: during the day I'm saving at least a
          couple of really useful videos about AI from across social media. I'm building up a
          backlog of content I need to come back to — new developments, new tools, new skills,
          fancy new GitHub repos.
        </p>

        <p className="type-body">
          That got me thinking: can I just scrape those and organize them into a nice feed for
          myself, my colleagues, and my friends?
        </p>

        <p className="type-body">
          This is how this portal was born. Part experimentation with AI tools, part desire to
          bring my own inspiration and social media content into one place — because otherwise
          I'll lose it all in the sea of infinite information.
        </p>

        <p className="type-body">
          It's as simple as that. I'll use it as my own little storage of good knowledge to
          come back to. Maybe I'll have enough motivation to build it into some form of an AI
          learning program — one that's probably going to be way too simple compared to others
          you can find online.
        </p>

        <p className="type-body" style={{ color: "var(--color-ink-2)" }}>
          Honestly? I couldn't care less.
        </p>

        <p className="type-body">
          If you like it, just come back when you feel like you want to play with some AI
          stuff and you'll have plenty of things to do. I'll help you try stuff out without
          being overwhelmed — without feeling scared of terminal commands and things you don't
          understand yet.
        </p>
      </motion.div>

      {/* Consulting section */}
      <motion.div
        variants={revealItem}
        className="mt-14 p-6 md:p-8 rounded-[var(--radius-xl)] border border-[color:var(--color-line)] bg-[color:var(--color-paper-soft)]"
      >
        <p className="type-body mb-4">
          On the off chance that you like what you see and want to be consulted in person — I
          do wonderful consultations for <strong>$500 an hour</strong> on whatever you need.
          Whether it's your new startup that you want poked full of holes by a professional,
          or you just want to chat about AI and its future in the industry and how it's going
          to replace us all — I'm here for you. And I'm not greedy: I promise to share your
          generous donation with those who are in need.
        </p>
        <a
          href="mailto:PLACEHOLDER@email.com?subject=AIDrops Consultation"
          className="btn btn-primary"
        >
          <Mail size={16} />
          Book a consultation
        </a>
      </motion.div>

      {/* Sign-off */}
      <motion.div variants={revealItem} className="mt-14 space-y-4">
        <p className="type-body">
          Best of luck to you all. I hope you find the materials I've shared useful in some
          way, shape, or form.
        </p>

        <p className="type-body text-[color:var(--color-ink-3)] italic">
          And remember the famous quote by Michael Scott:
        </p>

        <blockquote className="border-l-3 border-[color:var(--color-drop)] pl-5 py-2">
          <p className="type-body font-[510]">
            "You miss 100% of the shots you don't take."
          </p>
          <p className="type-meta mt-2">
            — Wayne Gretzky — Michael Scott
          </p>
        </blockquote>
      </motion.div>
    </motion.section>
  );
}
