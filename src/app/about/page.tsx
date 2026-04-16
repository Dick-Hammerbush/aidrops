import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About — AIDrops",
  description:
    "The story behind AIDrops — a project born from too many saved videos and a desire to organize the best AI content in one place.",
};

export default function AboutPage() {
  return <AboutContent />;
}
