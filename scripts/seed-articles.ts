/**
 * Seed script — inserts 3 editorial articles sourced from TikTok into Supabase.
 * Run: npx tsx scripts/seed-articles.ts
 */

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } },
);

const articles = [
  {
    title: "How to Install Claude Code and Start Vibe Coding — The Complete Beginner Setup",
    slug: "install-claude-code-vibe-coding-setup",
    summary:
      "Everyone talks about vibe coding but nobody shows you the actual setup. Here's the step-by-step guide to installing Claude Code and going from zero to building real projects with AI pair programming.",
    content: `## What is Vibe Coding?

Vibe coding is the practice of describing what you want to build in natural language and letting an AI coding assistant write the implementation. Instead of writing every line yourself, you collaborate with an AI that understands your codebase, suggests changes, and executes them with your approval.

Claude Code is Anthropic's CLI tool that makes this workflow practical. It runs in your terminal, reads your entire project context, and can edit files, run commands, and iterate on code — all from a conversational interface.

## Why Claude Code Over Other Tools?

Unlike browser-based AI assistants, Claude Code operates directly in your development environment. It sees your file structure, reads your configs, understands your dependencies, and can run your build tools. This eliminates the copy-paste loop that makes browser-based AI coding feel clunky.

The key advantages:

- **Full project context** — it reads your entire codebase, not just the file you paste in
- **Direct file editing** — changes happen in your actual project, not a chat window
- **Tool execution** — it can run tests, install packages, and verify its own work
- **Git awareness** — it understands your branch state and commit history

## Step-by-Step Installation

### 1. Install Node.js

Claude Code requires Node.js 18 or later. If you don't have it:

- **macOS**: \`brew install node\` or download from [nodejs.org](https://nodejs.org)
- **Windows**: Download the installer from [nodejs.org](https://nodejs.org)
- **Linux**: \`curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && sudo apt-get install -y nodejs\`

Verify with \`node --version\`.

### 2. Install Claude Code

Open your terminal and run:

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

### 3. Authenticate

Run \`claude\` in your terminal. On first launch, it will prompt you to authenticate with your Anthropic account. You need an active API key or a Claude Pro/Max subscription.

### 4. Navigate to Your Project

\`\`\`bash
cd your-project-directory
claude
\`\`\`

Claude Code automatically scans your project structure and builds context from your files.

## Your First Vibe Coding Session

Start with something concrete. Instead of "build me an app," try:

- "Add a dark mode toggle to the header component"
- "Write tests for the user authentication flow"
- "Refactor this API route to handle pagination"

The more specific your request, the better the output. Claude Code works best when it can verify its own changes — so tasks with clear success criteria (tests pass, build succeeds, page renders) produce the best results.

## Tips for Better Results

1. **Use CLAUDE.md** — Create a CLAUDE.md file in your project root with instructions about your codebase conventions. Claude Code reads this automatically.
2. **Be iterative** — Start with a small change, verify it works, then build on it.
3. **Let it run commands** — When Claude Code asks to run a build or test, say yes. It learns from the output.
4. **Review diffs** — Always read what it changed before approving. This is collaboration, not delegation.`,
    category: "tutorials",
    tags: ["claude-code", "vibe-coding", "setup", "beginner", "cli", "ai-pair-programming"],
    difficulty: "beginner",
    action_items: [
      { label: "Install Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code/overview", type: "docs" },
      { label: "Get Anthropic API Key", url: "https://console.anthropic.com/", type: "signup" },
      { label: "Watch the Original TikTok", url: "https://www.tiktok.com/@ai.with.ni/video/7609623318043380999", type: "video" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@ai.with.ni/video/7609623318043380999",
    source_video_id: "7609623318043380999",
    author_handle: "ai.with.ni",
    status: "published",
    published_at: new Date().toISOString(),
  },
  {
    title: "Move Beyond the Browser — Why CLI AI Tools Are the Next Skill to Learn",
    slug: "move-beyond-browser-cli-ai-tools",
    summary:
      "You're early to AI, but staying ahead means going beyond ChatGPT in a browser tab. Here's why CLI-based AI tools like Claude Code, Aider, and Continue are where serious builders are moving — and how to start.",
    content: `## The Browser Ceiling

If you're using AI through a browser tab, you're hitting an invisible ceiling. Copy-pasting code snippets back and forth between ChatGPT and your editor works for quick questions, but it breaks down the moment your project has more than a handful of files.

The next wave of AI-assisted development isn't happening in browser windows. It's happening in the terminal.

## What CLI AI Tools Actually Do Differently

Browser-based AI sees what you paste. CLI-based AI sees your entire project. That difference changes everything:

- **Context**: A CLI tool reads your \`package.json\`, your \`tsconfig.json\`, your directory structure, and your git history. It understands imports, dependencies, and conventions without you explaining them.
- **Action**: Instead of giving you code to copy, CLI tools edit your files directly, run your tests, and verify their changes compile.
- **Iteration**: When something doesn't work, the tool reads the error output and fixes it — without you acting as the middleman.

## The Tools Worth Knowing

### Claude Code
Anthropic's official CLI. Deep project context, file editing, command execution. Best for large projects where context matters. Works with Claude Pro subscription or API key.

### Aider
Open-source AI pair programmer. Supports multiple LLM backends (GPT-4, Claude, local models). Strong git integration — every change is a commit. Great if you want model flexibility.

### Continue
IDE extension (VS Code, JetBrains) that brings AI into your editor with terminal integration. Good middle ground between browser and full CLI if you're not ready to live in the terminal.

### Cursor
AI-native code editor built on VS Code. Not strictly CLI, but it brings the same "AI sees your whole project" philosophy into a familiar editor interface.

## Why This Matters Now

The gap between people who use AI in a browser and people who use AI in their development workflow is widening fast. The browser users are getting answers. The CLI users are shipping features.

This isn't about replacing your skills — it's about amplifying them. A developer who can effectively prompt a CLI AI tool can move at 3-5x the speed on routine tasks: scaffolding, refactoring, test writing, documentation, bug fixing.

## How to Start Today

1. **Pick one tool** — Don't try all of them. Claude Code or Aider are the two strongest starting points.
2. **Use it on a real project** — Not a tutorial, not a toy app. Your actual work. That's where the context advantage shows up.
3. **Start with boring tasks** — Write tests. Add TypeScript types. Refactor a messy function. These are low-risk, high-signal tasks that teach you how the tool thinks.
4. **Graduate to features** — Once you trust the tool's output on routine work, start using it for new features. Describe what you want, review what it builds, iterate.

The people who learn to work with these tools effectively now will have a compound advantage that grows every month.`,
    category: "ai-tools",
    tags: ["cli", "claude-code", "aider", "continue", "cursor", "developer-tools", "productivity"],
    difficulty: "intermediate",
    action_items: [
      { label: "Try Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code/overview", type: "docs" },
      { label: "Try Aider", url: "https://aider.chat", type: "tool" },
      { label: "Try Continue", url: "https://continue.dev", type: "tool" },
      { label: "Watch the Original TikTok", url: "https://www.tiktok.com/@maven_hq/video/7610475859316673806", type: "video" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@maven_hq/video/7610475859316673806",
    source_video_id: "7610475859316673806",
    author_handle: "maven_hq",
    status: "published",
    published_at: new Date(Date.now() - 3600_000).toISOString(),
  },
  {
    title: "2025 vs 2026 AI Tools — What Actually Changed and What You Should Switch To",
    slug: "2025-vs-2026-ai-tools-comparison",
    summary:
      "A year in AI is a decade in any other industry. Here's a concrete look at which tools got replaced, which got better, and the new ones worth adopting in 2026.",
    content: `## The Landscape Shift

A year ago, the AI tool stack looked completely different. Some tools that were everywhere in 2025 have been replaced. Others quietly became essential. Here's what changed — not hype, just what's actually shipping in production workflows.

## Writing & Content

**2025**: ChatGPT, Jasper, Copy.ai dominated. Most content teams used one of these for drafts.

**2026**: Claude has taken significant market share for long-form writing. The shift happened because Claude's context window (200K tokens) lets you feed it entire documents, brand guides, and style references in a single prompt. Jasper pivoted hard toward marketing automation. Copy.ai is focusing on enterprise sales workflows.

**What to do**: If you're still writing prompts one paragraph at a time, try loading your full brief + style guide into Claude and generating complete drafts. The quality difference from full context is dramatic.

## Coding

**2025**: GitHub Copilot was the default. Cursor was the hot new thing. Replit had AI features.

**2026**: The CLI revolution happened. Claude Code, Aider, and Windsurf moved coding AI from autocomplete to full-project automation. Copilot is still solid for line-by-line suggestions, but the real productivity gains come from tools that understand your entire codebase.

**What to do**: If you're only using autocomplete-style AI, add a CLI tool to your workflow. Start with Claude Code or Cursor for the easiest onboarding.

## Image & Video

**2025**: Midjourney v5/v6, DALL-E 3, Stable Diffusion. Video was early — Runway Gen-2 was the leader.

**2026**: Image generation is largely commoditized. The real action moved to video: Runway Gen-4, Kling 2.0, and Pika 2.0 can produce production-quality clips. Google's Veo 2 pushed the quality ceiling. For images, Flux models (open-source) are competitive with Midjourney for many use cases.

**What to do**: If you're paying for Midjourney but only need standard commercial images, try Flux through ComfyUI or a hosted API. Save Midjourney for artistic work where style control matters.

## Voice & Audio

**2025**: ElevenLabs was the clear leader. OpenAI had basic TTS.

**2026**: ElevenLabs is still strong but OpenAI's real-time voice API changed the game for developers. Voice cloning got so good that authentication and verification became a real concern. Cartesia and PlayHT are solid alternatives.

**What to do**: For app integration, evaluate OpenAI's voice API alongside ElevenLabs — pricing and latency may favor OpenAI for real-time use cases.

## Automation & Agents

**2025**: Zapier + AI, LangChain, AutoGPT (hype), CrewAI (early).

**2026**: Agent frameworks matured significantly. Claude's tool use, OpenAI's Agents SDK, and frameworks like Mastra and Vercel AI SDK are production-ready. The key shift: agents went from demos to deployed features. Companies are running AI agents in customer support, data processing, and internal ops.

**What to do**: If you tried agents in 2025 and they were unreliable, try again. The reliability improvements from better models + better frameworks are substantial. Start with a narrow, well-defined task — not a general-purpose agent.

## The Meta-Shift

The biggest change isn't any single tool — it's that AI moved from "a thing you use sometimes" to "infrastructure that runs in the background." The winners in 2026 are people who embedded AI into their daily workflows, not people who use it for one-off tasks.`,
    category: "ai-news",
    tags: ["ai-tools", "comparison", "2025", "2026", "trends", "claude", "copilot", "runway"],
    difficulty: "beginner",
    action_items: [
      { label: "Try Claude for Writing", url: "https://claude.ai", type: "tool" },
      { label: "Try Claude Code for Development", url: "https://docs.anthropic.com/en/docs/claude-code/overview", type: "tool" },
      { label: "Explore Flux Models", url: "https://github.com/black-forest-labs/flux", type: "repo" },
      { label: "Watch the Original TikTok", url: "https://www.tiktok.com/@danvmartell/video/7605315700487376149", type: "video" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@danvmartell/video/7605315700487376149",
    source_video_id: "7605315700487376149",
    author_handle: "danvmartell",
    status: "published",
    published_at: new Date(Date.now() - 7200_000).toISOString(),
  },
];

async function seed() {
  console.log("Seeding articles...");

  for (const article of articles) {
    const { data, error } = await supabase
      .from("articles")
      .upsert(article, { onConflict: "source_video_id" })
      .select("id, slug")
      .single();

    if (error) {
      console.error(`Failed: ${article.slug}`, error.message);
    } else {
      console.log(`OK: ${data.slug} (${data.id})`);
    }
  }

  console.log("Done.");
}

seed();
