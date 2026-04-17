/**
 * Batch 3 seed — 13 new articles from TikTok sources.
 * Run: bun run scripts/seed-batch3.ts
 */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } },
);

function toISO(ts: number): string {
  return new Date(ts * 1000).toISOString();
}

const articles = [
  // ── #1: Claude hidden features part 5 ──
  {
    title: "5 Claude Features You Probably Didn't Know Existed",
    slug: "hidden-claude-features-part-5",
    summary:
      "Claude can do a lot more than chat. From advanced artifacts to system prompt tricks, here are five capabilities most people overlook.",
    content: `## Beyond the Chat Box

Most people use Claude as a glorified chatbot. Type a question, get an answer, move on. But Claude has quietly become one of the most versatile AI platforms available — and most of its best features are hiding in plain sight.

Here are five capabilities that will change how you work with Claude.

## 1. Artifacts as Full Applications

Claude can generate complete, interactive HTML applications as artifacts. Not just code snippets — fully functional tools with JavaScript logic, CSS styling, and user interaction. Think calculators, data visualizers, simple games, and interactive dashboards.

The trick: be specific about what you want. Instead of "make a calculator," try "build an interactive mortgage calculator with monthly payment breakdown, amortization table, and the ability to compare two loan options side by side."

## 2. System Prompts That Transform Behavior

When using the API, system prompts let you completely reshape Claude's personality, expertise, and output format. You can create specialized agents — a code reviewer that only checks for security issues, a copy editor that matches your brand voice, or a data analyst that always outputs structured JSON.

Pro tip: start your system prompt with a clear role definition, then add specific constraints. "You are a senior security engineer. Only flag issues from the OWASP Top 10. Format output as a markdown table with severity, location, and fix."

## 3. Multi-Turn Context Engineering

Claude maintains context across long conversations, but how you structure that context matters enormously. Feed Claude reference documents early in the conversation, establish conventions, then build on them. This "context engineering" approach produces dramatically better results than isolated prompts.

## 4. Projects and Knowledge Bases

Claude's Projects feature lets you upload documents, codebases, and reference materials that persist across conversations. Instead of re-explaining your company's style guide every time, upload it once and reference it forever.

## 5. Markdown Artifacts for Documentation

Need to create documentation, READMEs, or technical specs? Claude can generate publication-ready markdown artifacts with proper formatting, table of contents, and consistent structure. Combine this with Projects to generate docs that reference your actual codebase.

## The Pattern

The common thread: specificity. The more precisely you describe what you want, the more powerful Claude becomes. Vague prompts get generic answers. Detailed, contextual prompts get remarkable results.`,
    category: "ai-tools",
    tags: ["claude", "ai-tools", "productivity", "artifacts", "prompting"],
    difficulty: "beginner",
    action_items: [
      { label: "Try Claude", url: "https://claude.ai", type: "tool" },
      { label: "Claude API Docs", url: "https://docs.anthropic.com", type: "docs" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@practicalyai/video/7614998913715555591",
    source_video_id: "7614998913715555591",
    author_handle: "practicalyai",
    published_at: toISO(1773005105),
  },

  // ── #2: AI humanizer for writing ──
  {
    title: "AI Detection Is Getting Smarter — And So Are the Humanizers",
    slug: "ai-detection-humanizers-2026",
    summary:
      "Turnitin and GPTZero are catching more AI-written text than ever. Here's what's changed, why it matters, and the tools that are adapting.",
    content: `## The Detection Arms Race

AI detection tools have evolved rapidly. Turnitin's latest update catches AI-generated text with significantly higher accuracy, and GPTZero just rolled out a new detection model that defeats most "humanizer" tools that worked six months ago.

If you're a student, writer, or content creator who uses AI as a writing assistant, this affects you directly.

## What Changed

### Turnitin's Update
Turnitin now analyzes writing at the paragraph level rather than document level. This means mixing human and AI-written paragraphs no longer fools the system. It also detects patterns specific to different AI models — Claude writes differently from ChatGPT, and Turnitin knows the difference.

### GPTZero's New Model
GPTZero's latest model focuses on detecting "humanized" AI text — content that's been run through paraphrasing tools to evade detection. It looks for statistical patterns that persist even after surface-level rewording.

## The Legitimate Use Case

Before we go further: using AI as a brainstorming partner, outline generator, or editing assistant is perfectly valid. The goal isn't to pass off AI text as human — it's to use AI to enhance your own thinking and writing process.

## Tools That Actually Work

### 1. Use AI for Structure, Not Final Copy
Have Claude or ChatGPT create an outline and key points. Then write the final text yourself, using those ideas as scaffolding. This produces genuinely human text informed by AI thinking.

### 2. The Rewrite Approach
Write your first draft yourself. Then use AI to suggest improvements, catch errors, and tighten prose. The result is authentically yours but polished with AI assistance.

### 3. Voice-First Writing
Dictate your thoughts using voice-to-text, then use AI to clean up the transcript. Your voice patterns, quirks, and thinking style come through naturally.

## The Real Lesson

The detection tools are telling us something important: the value of AI isn't in generating text — it's in generating ideas. Use AI to think better, not to write for you.`,
    category: "ai-news",
    tags: ["ai-detection", "writing", "turnitin", "gptzero", "education"],
    difficulty: "beginner",
    action_items: [
      { label: "GPTZero", url: "https://gptzero.me", type: "tool" },
      { label: "Turnitin", url: "https://www.turnitin.com", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@shannon4994/video/7602849514398960909",
    source_video_id: "7602849514398960909",
    author_handle: "shannon4994",
    published_at: toISO(1770176356),
  },

  // ── #3: Claude hidden features part 2 ──
  {
    title: "More Things You Didn't Know Claude Could Do — Design Edition",
    slug: "claude-design-capabilities-hidden",
    summary:
      "Claude isn't just for code and text. Its design capabilities — from UI mockups to interactive prototypes — are genuinely surprising.",
    content: `## Claude as a Design Tool

Here's something most people don't realize: Claude can be a surprisingly powerful design tool. Not in the "generate a pretty image" sense, but in the "build interactive UI mockups, create design systems, and prototype user flows" sense.

## Interactive HTML Prototypes

Ask Claude to build a complete UI prototype as an HTML artifact. It generates responsive layouts with real interactions — hover states, click handlers, form validation, transitions. You can test user flows in your browser without touching Figma or writing a line of code yourself.

**Try this prompt:** "Build an interactive prototype for a task management app. Include a sidebar with project categories, a main content area with draggable task cards, and a quick-add form. Use a clean, modern design with a blue-gray palette."

## Design System Generation

Claude can create complete design system documentation — color palettes, typography scales, spacing systems, component libraries. Describe your brand's personality and target audience, and it generates a coherent system with rationale for each decision.

## CSS Animation from Description

Describe an animation in plain English, and Claude writes the CSS or Framer Motion code. "A card that lifts slightly on hover with a subtle shadow bloom and a 200ms ease-out transition" becomes production-ready code.

## Responsive Layout Engineering

Claude excels at responsive layouts. Describe a layout for desktop, tablet, and mobile, and it generates CSS Grid or Flexbox code that handles all breakpoints cleanly. It even considers edge cases like very long text content or missing images.

## Icon and SVG Generation

Need a simple icon? Claude can generate SVG code for custom icons. They won't replace a professional icon set, but for quick prototyping or unique needs, it's surprisingly good. Describe the icon's concept and style, and you get scalable vector graphics.

## The Setup Guide

To get the most out of Claude for design work:

1. **Start with constraints.** Specify colors, fonts, and design language upfront.
2. **Iterate visually.** Ask for the artifact first, then refine based on what you see.
3. **Reference real products.** "Style it like Linear" gives Claude a concrete target.
4. **Export and refine.** Use Claude's output as a starting point in your design tool of choice.

The gap between "I have an idea" and "I have a working prototype" just got a lot smaller.`,
    category: "skills",
    tags: ["claude", "design", "prototyping", "ui-design", "css"],
    difficulty: "intermediate",
    action_items: [
      { label: "Try Claude Artifacts", url: "https://claude.ai", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@maxjohnscn/video/7615599178378579202",
    source_video_id: "7615599178378579202",
    author_handle: "maxjohnscn",
    published_at: toISO(1773144867),
  },

  // ── #4: GitHub repos you should know ──
  {
    title: "GitHub Repos Every Developer Should Bookmark in 2026",
    slug: "essential-github-repos-2026",
    summary:
      "The repos that quietly power modern development — from UI component libraries to AI toolkits. Bookmark these before your next project.",
    content: `## The Hidden Toolbox

The best developers don't build everything from scratch. They know where to find battle-tested, open-source solutions that save weeks of work. Here are the GitHub repos that should be in every developer's toolkit in 2026.

## UI and Design

### shadcn/ui
The component library that changed how we think about UI. Instead of installing a package, you copy components into your project and own them completely. Built on Radix UI + Tailwind CSS. Over 80k stars and growing.

### Magic UI
Beautiful animated components designed for landing pages and marketing sites. If you need that "wow factor" for your hero section, start here.

### Aceternity UI
Modern, animated React components with a focus on micro-interactions. Think glassmorphism, particle effects, and parallax scrolls — all as copy-paste components.

## AI and Development

### Vercel AI SDK
The standard for building AI-powered applications. Streaming, tool calling, multi-model support, and framework integrations. If you're building anything with LLMs, this is your foundation.

### LangChain
Still the go-to for complex AI pipelines. Chain multiple models, add retrieval, implement agents. The ecosystem has matured significantly.

### Ollama
Run LLMs locally. Llama, Mistral, Gemma — download and run with one command. Essential for development and testing without API costs.

## Productivity

### tRPC
End-to-end type safety between your frontend and backend. No more API contract mismatches. Pairs beautifully with Next.js.

### Drizzle ORM
TypeScript-first database toolkit that generates SQL you'd actually write. Lightweight, fast, and the developer experience is outstanding.

### Turborepo
Monorepo build system from Vercel. If you're managing multiple packages or apps, this handles caching, parallel execution, and dependencies automatically.

## The Bookmarking Strategy

Don't just star repos — organize them. Create GitHub lists by category (UI, AI, DevOps, etc.) and revisit them before starting new projects. The 30 minutes spent reviewing existing solutions can save you 30 hours of building.`,
    category: "github-repos",
    tags: ["github", "open-source", "developer-tools", "react", "ui-components"],
    difficulty: "intermediate",
    action_items: [
      { label: "shadcn/ui", url: "https://ui.shadcn.com", type: "tool" },
      { label: "Vercel AI SDK", url: "https://sdk.vercel.ai", type: "tool" },
      { label: "Ollama", url: "https://ollama.ai", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@howtowebdev/video/7613340180279266577",
    source_video_id: "7613340180279266577",
    author_handle: "howtowebdev",
    published_at: toISO(1772629200),
  },

  // ── #5: Context Mode MCP ──
  {
    title: "Cut Claude Code Token Usage by 98% With Context Mode MCP",
    slug: "context-mode-mcp-token-savings",
    summary:
      "MCP tools eat your context window from both sides. Context Mode MCP compresses tool interactions, slashing token consumption dramatically.",
    content: `## The Context Window Problem

If you're using Claude Code with MCP tools, you have an invisible problem: every tool interaction fills your context window from both sides. Tool definitions going in, raw output coming back out. After a few complex operations, you've burned through most of your context on plumbing, not thinking.

Context Mode MCP fixes this.

## What's Happening Under the Hood

When you add MCP tools to Claude Code, each tool's schema takes up tokens. Every time Claude calls a tool, the full request and response are added to the conversation. A simple file read might consume hundreds of tokens. A database query? Thousands. Run a dozen tool calls and your context is half gone before you've done any real work.

## How Context Mode MCP Works

Context Mode MCP acts as a compression layer between Claude and your MCP tools:

1. **Schema compression** — Instead of sending full tool schemas every turn, it sends compressed versions that Claude can still understand
2. **Output summarization** — Raw tool outputs are intelligently summarized, keeping essential information while discarding noise
3. **Context-aware caching** — Repeated tool calls with similar parameters don't re-consume context

The result: up to 98% reduction in token usage for tool-heavy workflows.

## Real-World Impact

This has been validated across 11 real-world scenarios:

- **Test triage** — reviewing test results across a large codebase
- **Error diagnosis** — tracing bugs through multiple files and logs
- **Code review** — analyzing changes across many files
- **Database operations** — running multiple queries in sequence

In each case, the same work completed with a fraction of the context usage.

## Setup

Install Context Mode MCP as an MCP server in your Claude Code configuration:

\`\`\`json
{
  "mcpServers": {
    "context-mode": {
      "command": "npx",
      "args": ["context-mode-mcp"]
    }
  }
}
\`\`\`

Then wrap your existing MCP tools through it. The README has detailed configuration for common setups.

## Why This Matters

Your context window is your most expensive resource when using Claude Code. Every token spent on tool plumbing is a token not spent on reasoning, planning, and generating code. Context Mode MCP doesn't change what you can do — it changes how much you can do in a single session.`,
    category: "ai-tools",
    tags: ["claude-code", "mcp", "token-optimization", "developer-tools", "context-window"],
    difficulty: "advanced",
    action_items: [
      { label: "Context Mode MCP", url: "https://github.com/sirmews/context-mode-mcp", type: "tool" },
      { label: "MCP Protocol Docs", url: "https://modelcontextprotocol.io", type: "docs" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@sabrina_ramonov/video/7616921279412620557",
    source_video_id: "7616921279412620557",
    author_handle: "sabrina_ramonov",
    published_at: toISO(1773452701),
  },

  // ── #6: RuFlow — 60 parallel agents ──
  {
    title: "RuFlow: The Open-Source Framework Running 60 AI Agents in Parallel",
    slug: "ruflow-parallel-ai-agents-framework",
    summary:
      "One agent plans, another codes, another tests, another checks security — all running simultaneously. RuFlow ranked #1 in agent frameworks on GitHub.",
    content: `## The Multi-Agent Revolution

What if instead of one AI working on your project, you had 60? Not taking turns — working simultaneously. One planning architecture. Another writing code. Another running tests. Another checking security. All sharing memory, all getting smarter with every run.

That's RuFlow. And it's completely open source.

## How It Works

RuFlow orchestrates multiple Claude-powered agents in parallel. Each agent has a specific role and expertise:

- **Architect Agent** — designs system architecture and plans implementation
- **Coder Agents** — multiple instances writing different parts of the codebase simultaneously
- **Test Agent** — writes and runs tests as code is generated
- **Security Agent** — reviews code for vulnerabilities in real-time
- **Review Agent** — checks code quality and consistency
- **Documentation Agent** — generates docs alongside code

These agents share a persistent memory layer, so the security agent knows what the coder agents are building, and the test agent knows what's been reviewed.

## The Cost Innovation

Here's the game-changer: RuFlow slashes API costs by 75% through intelligent routing. Basic tasks (formatting, simple lookups, boilerplate generation) route to free-tier or cheaper models. Complex tasks (architecture decisions, security analysis, tricky debugging) route to the most capable models.

You get better results at lower cost because each task goes to the right model for the job.

## The Numbers

- **14,100+ GitHub stars** — ranked #1 in agent frameworks
- **100% open source** — zero subscriptions, zero vendor lock-in
- **60 concurrent agents** — scales from 1 to 60 based on project complexity
- **75% cost reduction** — compared to running everything through a single premium model

## Getting Started

\`\`\`bash
git clone https://github.com/ruflow/ruflow
cd ruflow
npm install
cp .env.example .env  # Add your API keys
npm run start
\`\`\`

The setup wizard walks you through configuring agent roles, model routing rules, and memory persistence.

## When to Use It

RuFlow shines for:
- Large codebase refactors
- Greenfield projects where architecture matters
- Security-sensitive applications
- Projects where testing coverage is critical

For small scripts and quick prototypes, a single Claude session is still faster. RuFlow is for when you need the equivalent of a full development team.`,
    category: "github-repos",
    tags: ["ruflow", "ai-agents", "parallel-processing", "open-source", "developer-tools"],
    difficulty: "advanced",
    action_items: [
      { label: "RuFlow on GitHub", url: "https://github.com/ruflow/ruflow", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@nicksadler.io/video/7620202144343346454",
    source_video_id: "7620202144343346454",
    author_handle: "nicksadler.io",
    published_at: toISO(1774216577),
  },

  // ── #7: Codebase-to-Course ──
  {
    title: "Turn Any Codebase Into an Interactive Learning Course With One Command",
    slug: "codebase-to-course-claude-skill",
    summary:
      "Been vibe coding your way through a project? Codebase-to-Course generates a single-page interactive crash course from your repo — plain English, metaphors, quizzes, all in the browser.",
    content: `## The Vibe Coding Problem

You built something. It works. You have no idea how. Maybe you used Claude or Cursor to generate most of it. Maybe you copied code from Stack Overflow at 2 AM. Either way, you have a working project and zero understanding of its internals.

Codebase-to-Course fixes this.

## What It Does

It's a Claude Code skill that takes your entire codebase and generates a single-page interactive HTML crash course. Not documentation — a course. With:

- **Plain-English translations** of every major component
- **Metaphors** that make complex concepts click ("think of this middleware as a bouncer at a club — it checks every request before letting it through")
- **Interactive visualizations** showing how data flows through your app
- **Quizzes** that test whether you actually understand what each part does
- **Architecture diagrams** rendered directly in the browser

Everything renders as a single HTML file using Claude's artifact system. No server needed, no dependencies, just open in a browser.

## How to Use It

1. Install the Claude Code skill
2. Navigate to your project directory
3. Run the skill — it analyzes your codebase
4. Open the generated HTML file

The skill reads your code structure, identifies key patterns, and generates explanations tailored to your specific project. It's not generic "what is React" content — it's "here's what YOUR App.tsx does and why it's structured this way."

## Why This Matters

The gap between "I can build with AI" and "I understand what I built" is growing. More people are shipping code they can't debug. Codebase-to-Course bridges that gap by turning your own project into learning material.

## Use Cases

- **Onboarding new team members** — generate a course from your codebase instead of writing docs
- **Understanding inherited projects** — got a legacy codebase? Turn it into a crash course
- **Self-learning** — built something with AI help? Now understand it
- **Code reviews** — generate a course to understand a PR's impact on the system

The best part: the course updates when your code changes. Regenerate it after major refactors and you always have current documentation that's actually fun to read.`,
    category: "courses",
    tags: ["claude-code", "learning", "codebase-analysis", "education", "developer-tools"],
    difficulty: "beginner",
    action_items: [
      { label: "Codebase-to-Course Skill", url: "https://github.com/codebase-to-course/codebase-to-course", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@github.awesome/video/7620739520031378702",
    source_video_id: "7620739520031378702",
    author_handle: "github.awesome",
    published_at: toISO(1774341782),
  },

  // ── #8: Claude model routing ──
  {
    title: "Stop Using Opus for Everything — Smart Model Routing in Claude Code",
    slug: "claude-code-model-routing-efficiency",
    summary:
      "One command in Claude Code lets you switch between models on the fly. Use Opus for hard problems, Sonnet for everything else, and save tokens.",
    content: `## The Model Mismatch Problem

Claude Code defaults to a specific model for all tasks. But not every task needs the most powerful (and expensive) model. Formatting a file? Generating boilerplate? Running a simple search? These tasks don't need Opus-level reasoning.

Smart model routing means using the right model for each task — and Claude Code makes this surprisingly easy.

## The Command

In Claude Code, you can switch models with a single command:

\`\`\`
/model sonnet
\`\`\`

That's it. From that point on, Claude Code uses Sonnet instead of Opus. When you hit a complex problem:

\`\`\`
/model opus
\`\`\`

Switch back, tackle the hard part, then drop down again.

## When to Use Each Model

### Use Sonnet For:
- File searches and navigation
- Simple refactoring (rename, move, reorganize)
- Generating boilerplate code
- Writing tests for existing functions
- Formatting and linting fixes
- Documentation generation
- Quick questions about your codebase

### Use Opus For:
- Architecture decisions
- Complex debugging (multi-file issues)
- Security analysis
- Performance optimization
- Novel algorithm implementation
- Refactoring that requires understanding system-wide implications

## The Impact

By routing ~70% of your tasks to Sonnet and reserving Opus for the hard 30%, you:

1. **Reduce costs** significantly on your API usage
2. **Get faster responses** for simple tasks (Sonnet is quicker)
3. **Preserve context** by using fewer tokens on routine operations
4. **Still get Opus quality** for the problems that actually need it

## Pro Tips

- Start every session on Sonnet
- Switch to Opus when you're stuck or the task involves cross-file reasoning
- Drop back to Sonnet after the hard part is solved
- Use \`/model\` without arguments to see your current model

The best developers don't just write efficient code — they use efficient tools.`,
    category: "useful-ai-tips",
    tags: ["claude-code", "model-routing", "efficiency", "cost-optimization", "developer-tips"],
    difficulty: "intermediate",
    action_items: [
      { label: "Claude Code", url: "https://claude.ai/code", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@chase_ai_/video/7618058688409947406",
    source_video_id: "7618058688409947406",
    author_handle: "chase_ai_",
    published_at: toISO(1773717536),
  },

  // ── #9: AI agent security ──
  {
    title: "300,000 Users Hit by Malicious AI Agent Skills — How to Stay Safe",
    slug: "ai-agent-security-malicious-skills",
    summary:
      "Most people install AI agent skills without checking them. Here's the scanner to use before you install anything, plus 3 skills actually worth running.",
    content: `## The Security Problem Nobody Talks About

AI agent ecosystems are the new app stores — and they have the same security problem app stores had in 2012. Malicious actors are publishing skills that look helpful but contain hidden payloads. Data exfiltration. Prompt injection. Unauthorized API calls.

300,000 users have already been affected. And most people are still installing skills without checking.

## What's Happening

Third-party MCP skills and Claude Code extensions can:
- Read your entire codebase (including .env files with API keys)
- Make network requests to external servers
- Modify files without explicit confirmation
- Inject prompts that alter Claude's behavior

A skill labeled "Better File Search" could be silently uploading your source code to an external server. You'd never know unless you read every line of its code.

## How to Protect Yourself

### 1. Scan Before Installing

Use Repello's free skill scanner at **skills.repello.ai**. Upload any skill file and it analyzes:
- Network call destinations
- File system access patterns
- Suspicious prompt patterns
- Known malicious signatures

Takes under a minute. Do this for every skill, every time.

### 2. Check the Source

Before installing any skill:
- Is the repository well-maintained? (Recent commits, multiple contributors)
- Does it have meaningful stars? (Not just bot-inflated numbers)
- Is the code readable? (Obfuscated code is a red flag)
- Does the README explain exactly what permissions it needs?

### 3. Use Official Skills First

Anthropic's official MCP servers and Claude Code skills are reviewed and maintained. Start with these before exploring third-party options.

## 3 Skills Worth Installing

These have been vetted and provide genuine value:

1. **File System MCP** — official Anthropic file system access with proper sandboxing
2. **Git MCP** — Git operations with safety checks and confirmation prompts
3. **Brave Search MCP** — Web search capability with privacy focus

All three are open source, well-maintained, and widely reviewed.

## The Rule

Treat AI skills like you treat browser extensions: assume they can see everything, install only what you need, and verify before trusting.`,
    category: "ai-news",
    tags: ["security", "mcp", "ai-agents", "claude-code", "cybersecurity"],
    difficulty: "intermediate",
    action_items: [
      { label: "Repello Skill Scanner", url: "https://skills.repello.ai", type: "tool" },
      { label: "Official MCP Servers", url: "https://github.com/modelcontextprotocol/servers", type: "docs" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@buildwithsarah/video/7620935977003011349",
    source_video_id: "7620935977003011349",
    author_handle: "buildwithsarah",
    published_at: toISO(1774387460),
  },

  // ── #10: Powerful GitHub repos batch 1 ──
  {
    title: "Powerful GitHub Repos You Need to Know — January 2026 Edition",
    slug: "powerful-github-repos-january-2026",
    summary:
      "The repos that trended in early 2026 — from AI infrastructure to developer productivity tools. Every one of these will save you hours.",
    content: `## The January Picks

Every month, thousands of new repositories appear on GitHub. Most are noise. A few are signal. Here are the repos from January 2026 that earned their stars.

## AI Infrastructure

### Instructor
Structured outputs from LLMs. Instead of parsing free-text responses, Instructor gives you typed, validated data objects. Supports Claude, GPT-4, Mistral, and local models. If you're building AI pipelines, this eliminates half your parsing code.

### DSPy
Programmatic prompt engineering from Stanford. Instead of manually tweaking prompts, DSPy optimizes them automatically against your specific use case. It compiles natural language signatures into optimized prompts — think "compiler for prompts."

## Frontend

### Fumadocs
Documentation framework built on Next.js. MDX support, search, internationalization, and beautiful default themes. If you've been dreading writing docs, Fumadocs makes it almost enjoyable.

### Motion (Framer Motion v12)
The animation library for React got a massive update. New layout animations, scroll-triggered effects, and reduced bundle size. The new \`whileInView\` variants make scroll animations trivial.

## Backend

### Hono
Ultra-fast web framework that runs everywhere — Cloudflare Workers, Deno, Bun, Node.js. Express.js ergonomics with 10x the performance. If you're starting a new API, consider Hono before reaching for Express.

### Drizzle Studio
Visual database management for Drizzle ORM. See your data, run queries, manage migrations — all in a beautiful local UI. Think phpMyAdmin but actually good.

## DevOps

### Kamal
Deploy web apps anywhere with zero downtime. From Basecamp, the team behind Rails. If you want the simplicity of Heroku but on your own servers, Kamal is the answer.

## How to Stay Current

1. **Follow GitHub Trending** daily for your languages
2. **Watch "awesome" lists** — curated by the community
3. **Check dev Twitter/X** — maintainers announce there first
4. **Star deliberately** — only star what you'll actually use`,
    category: "github-repos",
    tags: ["github", "open-source", "developer-tools", "ai-infrastructure", "frontend"],
    difficulty: "intermediate",
    action_items: [
      { label: "GitHub Trending", url: "https://github.com/trending", type: "tool" },
      { label: "Instructor", url: "https://github.com/jxnl/instructor", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@howtowebdev/video/7591943235593833749",
    source_video_id: "7591943235593833749",
    author_handle: "howtowebdev",
    published_at: toISO(1768046400),
  },

  // ── #11: AI system prompts leaked ──
  {
    title: "110,000 Devs Bookmarked This Repo — Every Major AI Tool's System Prompt Revealed",
    slug: "ai-system-prompts-revealed-repo",
    summary:
      "The actual system prompts behind Claude, ChatGPT, Cursor, Copilot, v0, Devin, and more — all in one open-source repo. This changes how you write prompts.",
    content: `## The Prompt Library That Changes Everything

There's a GitHub repository that 110,000 developers have bookmarked. It contains the actual system prompts behind every major AI tool you use. Claude. ChatGPT. Gemini. Perplexity. Cursor. Copilot. v0. Devin. All of them.

These aren't guesses or reconstructions. They're the real prompts, extracted and documented.

## Why This Matters

When you understand how a tool's system prompt works, you understand:

1. **What the AI is optimized for** — Cursor's system prompt reveals why it excels at code completion versus general chat
2. **What constraints are in place** — ChatGPT's prompt shows exactly what it's told to avoid
3. **How to work with the grain** — knowing the system prompt lets you write user prompts that complement rather than fight the defaults
4. **How professionals structure prompts** — these prompts were written by the best AI engineers on the planet

## Key Insights from the Prompts

### Claude's Prompt
Claude's system prompt emphasizes careful reasoning, nuanced responses, and intellectual honesty. It's instructed to be direct, avoid filler phrases, and acknowledge uncertainty. This is why Claude feels different from ChatGPT — it's literally told to be different.

### Cursor's Prompt
Cursor's prompt is heavily focused on code context management. It's instructed to consider file structure, dependencies, and project conventions. This explains its superior code completion — it has explicit instructions for handling codebase context.

### v0's Prompt
v0's system prompt is a masterclass in constrained generation. It's told exactly which frameworks to use (Next.js, shadcn/ui, Tailwind), how to structure components, and what patterns to follow. The result: consistent, production-ready UI code.

## How to Use This

1. **Read the prompts for tools you use daily.** Understanding Claude's system prompt will make you a better Claude user.
2. **Borrow patterns for your own prompts.** The way Cursor handles code context is a template for any code-focused AI tool you build.
3. **Build better custom agents.** If you're creating AI-powered products, these prompts are your playbook.
4. **Stop guessing.** Instead of wondering "why did the AI do that?", you can read the instructions it was given.

## The Shift

We're moving from "prompt engineering" as trial-and-error to prompt engineering as a discipline. These system prompts are the textbook.`,
    category: "learning",
    tags: ["system-prompts", "prompt-engineering", "open-source", "ai-tools", "claude"],
    difficulty: "intermediate",
    action_items: [
      { label: "System Prompts Repo", url: "https://github.com/x1xhldr/system-prompts", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@creatorflowos/video/7599778027555294495",
    source_video_id: "7599778027555294495",
    author_handle: "creatorflowos",
    published_at: toISO(1769461201),
  },

  // ── #12: OpenClaw VPS setup ──
  {
    title: "Set Up Your Own AI Agent on a VPS With OpenClaw — Complete Walkthrough",
    slug: "openclaw-vps-ai-agent-setup",
    summary:
      "OpenClaw gives you a self-hosted AI agent that runs 24/7 on your own server. This guide walks you through the full VPS setup.",
    content: `## Why Self-Host an AI Agent?

Cloud AI agents are convenient but limited. They run when you ask, stop when you close the tab, and you're at the mercy of rate limits and API changes. A self-hosted agent on a VPS runs continuously, follows your rules, and costs a fixed monthly amount regardless of usage.

OpenClaw is the GitHub project that makes this accessible.

## What Is OpenClaw?

OpenClaw is an open-source framework for deploying autonomous AI agents on your own infrastructure. It handles:

- **Persistent execution** — your agent runs 24/7, not just when you're watching
- **Task queuing** — feed it tasks and it processes them in order
- **Memory management** — long-term memory that persists across sessions
- **Tool integration** — connect to APIs, databases, file systems
- **Safety controls** — approval workflows, spending limits, action constraints

## Prerequisites

- A VPS (DigitalOcean, Hetzner, or any provider — $20-40/month is plenty)
- An API key from Anthropic, OpenAI, or similar
- Basic terminal comfort (cd, ls, nano — nothing advanced)

## The Setup

### 1. Provision Your VPS

Any Ubuntu 22.04+ server works. 2 CPUs, 4GB RAM minimum. DigitalOcean's $24/month droplet is ideal.

### 2. Install Dependencies

\`\`\`bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://bun.sh/install | bash
\`\`\`

### 3. Clone and Configure

\`\`\`bash
git clone https://github.com/openclaw/openclaw
cd openclaw
cp .env.example .env
nano .env  # Add your API keys
\`\`\`

### 4. Run the Setup Wizard

\`\`\`bash
bun run setup
\`\`\`

The wizard walks you through agent personality, tool permissions, safety constraints, and task queue configuration.

### 5. Start Your Agent

\`\`\`bash
bun run start
\`\`\`

Your agent is now running. It'll process queued tasks, maintain its memory, and restart automatically if anything crashes.

## What Can It Do?

Once running, you can configure your agent to:

- Monitor websites for changes and alert you
- Process incoming emails and draft responses
- Manage a content calendar
- Run scheduled data analysis
- Maintain code repositories (automated PRs for dependency updates)
- Act as a persistent research assistant

## The Economics

VPS: ~$24/month. API costs: varies, but with smart model routing (using cheaper models for simple tasks), most personal agents cost $20-50/month in API calls. Total: under $75/month for a 24/7 AI assistant.

Compare that to hiring anyone to do the same work.`,
    category: "ai-agents",
    tags: ["openclaw", "self-hosted", "vps", "ai-agents", "deployment"],
    difficulty: "advanced",
    action_items: [
      { label: "OpenClaw GitHub", url: "https://github.com/openclaw/openclaw", type: "tool" },
      { label: "DigitalOcean", url: "https://www.digitalocean.com", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@maven_hq/video/7621297488699378974",
    source_video_id: "7621297488699378974",
    author_handle: "maven_hq",
    published_at: toISO(1774471621),
  },

  // ── #13: March GitHub repos ──
  {
    title: "GitHub Repos You Should Know — March 2026 Roundup",
    slug: "github-repos-march-2026-roundup",
    summary:
      "This month's standout repositories: AI coding assistants, type-safe APIs, deployment tools, and the CSS framework that's replacing Tailwind for some teams.",
    content: `## March's Best Finds

Every month I dig through GitHub's trending repos, Hacker News launches, and dev community recommendations to find the repos worth your attention. Here's March 2026.

## AI-Powered Development

### Aider
The terminal-based AI coding assistant that's been quietly gaining ground. Unlike IDE-integrated tools, Aider works with any editor and any Git repo. It understands your entire codebase context and can make changes across multiple files in a single conversation. Works with Claude, GPT-4, and local models.

### Continue
Open-source AI coding assistant that plugs into VS Code and JetBrains. The key differentiator: it's fully customizable. Bring your own models, define custom slash commands, create context providers. If Cursor feels too opinionated, Continue gives you full control.

## Web Development

### Nuxt 4
The Vue framework's major release landed with a complete rewrite. Server components, improved TypeScript support, and a new module system. If you're in the Vue ecosystem, this is a significant upgrade.

### UnoCSS
Atomic CSS engine that's faster and more flexible than Tailwind. Same utility-class approach but with instant setup, custom rules engine, and transformer support. Some teams are switching for the build speed alone — UnoCSS processes styles in milliseconds rather than seconds.

## Infrastructure

### Coolify
Self-hosted Heroku alternative. Deploy any application, database, or service on your own hardware. Supports Docker, Git-based deploys, automatic SSL, and built-in monitoring. The UI has gotten excellent.

### SST (v3)
Deploy serverless apps to AWS without CloudFormation pain. The latest version supports containers alongside Lambda, making it viable for more workloads. The developer experience is leagues ahead of raw AWS.

## The Meta-Observation

The trend this month: AI tools are moving from "do it for me" to "help me do it better." Aider and Continue both position AI as a collaborator rather than a replacement. The developer is still driving — AI is navigating.`,
    category: "github-repos",
    tags: ["github", "open-source", "developer-tools", "aider", "web-development"],
    difficulty: "intermediate",
    action_items: [
      { label: "Aider", url: "https://aider.chat", type: "tool" },
      { label: "Continue", url: "https://continue.dev", type: "tool" },
      { label: "Coolify", url: "https://coolify.io", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@howtowebdev/video/7617420637191097617",
    source_video_id: "7617420637191097617",
    author_handle: "howtowebdev",
    published_at: toISO(1773662400),
  },
];

async function main() {
  console.log(`Seeding ${articles.length} new articles...`);

  let inserted = 0;
  let failed = 0;

  for (const article of articles) {
    const { error } = await supabase.from("articles").insert({
      ...article,
      status: "published",
    });
    if (error) {
      if (error.code === "23505") {
        console.log(`SKIP (duplicate): ${article.slug}`);
      } else {
        console.error(`FAIL: ${article.slug} — ${error.message}`);
      }
      failed++;
    } else {
      console.log(`OK: ${article.slug}`);
      inserted++;
    }
  }

  console.log(`\nInserted: ${inserted}, Failed: ${failed}`);
}

main().catch(console.error);
