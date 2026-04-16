import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About — AIDrops",
  description:
    "AIDrops delivers daily drops of the best AI tools, agents, repos, and workflows — discovered on TikTok, rewritten as actionable articles.",
};

export default function AboutPage() {
  return <AboutContent />;
}
