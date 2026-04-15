import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIDrops — Fresh AI intel, dropped daily",
  description:
    "Daily drops of AI tools, agents, repos, workflows and trends — curated from creators shipping real work. No hype. No roundups.",
  openGraph: {
    title: "AIDrops — Fresh AI intel, dropped daily",
    description:
      "Daily drops of AI tools, agents, repos, workflows and trends. No hype. No roundups.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1" id="latest">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
