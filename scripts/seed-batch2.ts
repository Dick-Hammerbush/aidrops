/**
 * Batch 2 seed — 12 new articles + fix dates on 3 existing.
 * Run: NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/seed-batch2.ts
 */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } },
);

// Convert upload_date (YYYYMMDD) + timestamp to ISO
function toISO(ts: number): string {
  return new Date(ts * 1000).toISOString();
}

const articles = [
  // ── #1: ChatGPT recommending you ──
  {
    title: "How to Check If ChatGPT Is Recommending Your Business",
    slug: "check-if-chatgpt-recommends-your-business",
    summary: "AI search is replacing Google for millions of users. Here's how to see if ChatGPT mentions your brand — and what to do if it doesn't.",
    content: `## The New SEO Battleground

When someone asks ChatGPT "What's the best CRM for small businesses?" or "Where should I eat in Austin?", it answers with specific recommendations. If your business isn't in those answers, you're invisible to a growing chunk of your potential customers.

This isn't hypothetical. Studies show that over 40% of product research now starts with an AI assistant rather than a search engine. The question isn't whether AI recommendations matter — it's whether you're showing up in them.

## How to Check Your AI Visibility

### Step 1: Ask Directly

Open ChatGPT (or Claude, or Gemini) and ask questions your customers would ask:

- "What are the best [your industry] companies in [your city]?"
- "Recommend a [your product category] for [specific use case]"
- "Compare [your brand] vs [competitor]"

### Step 2: Track the Responses

Note whether you're mentioned, how you're described, and what's said about competitors. Do this across multiple AI models — each has different training data and may have different opinions about your brand.

### Step 3: Check Your Digital Footprint

AI models learn from publicly available content. Your visibility depends on:

- **Website content quality** — clear, factual, well-structured pages
- **Reviews and mentions** — third-party sites, directories, forums
- **Schema markup** — structured data that helps AI understand your business
- **Authority signals** — backlinks, citations, industry recognition

## What to Do If You're Not Showing Up

1. **Optimize your website content** for clarity and factual density. AI models prefer straightforward, informative content over marketing fluff.
2. **Get listed in directories** and review sites relevant to your industry. AI models weight these heavily.
3. **Publish helpful content** that answers the exact questions your customers ask. Blog posts, guides, and FAQs all feed the training pipeline.
4. **Build your brand presence** across multiple platforms. The more consistent and widespread your digital footprint, the more likely AI models include you.

## The Uncomfortable Truth

You can't "game" AI recommendations the way you could game Google with keyword stuffing. AI models reward genuine authority and helpfulness. The best strategy is also the simplest: be genuinely good at what you do, and make sure the internet knows about it.`,
    category: "useful-ai-tips",
    tags: ["seo", "chatgpt", "ai-search", "marketing", "business", "visibility"],
    difficulty: "beginner",
    action_items: [
      { label: "Try Asking ChatGPT About Your Brand", url: "https://chat.openai.com", type: "tool" },
      { label: "Check Your Schema Markup", url: "https://search.google.com/test/rich-results", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@gobigsystems/video/7610511000462298381",
    source_video_id: "7610511000462298381",
    author_handle: "gobigsystems",
    status: "published" as const,
    published_at: toISO(1771960227),
  },

  // ── #2: Vibe Prospecting with Claude ──
  {
    title: "Vibe Prospecting — Build Verified Lead Lists With AI in Seconds",
    slug: "vibe-prospecting-ai-lead-generation",
    summary: "A new AI-powered prospecting approach lets you describe your target audience in natural language and get verified contact lists from 800M+ professionals. Here's how it works.",
    content: `## What Is Vibe Prospecting?

Vibe prospecting is the sales equivalent of vibe coding. Instead of manually searching LinkedIn, scraping directories, and cross-referencing email databases, you describe your ideal customer in plain English and let AI do the hunting.

The concept is simple: tell the tool who you're looking for — "marketing directors at B2B SaaS companies with 50-200 employees in the US" — and it returns a verified contact list within seconds.

## How It Works

The workflow combines several data sources behind the scenes:

1. **Natural language input** — You describe your target audience the way you'd describe them to a colleague
2. **Database matching** — The system searches across databases of 800M+ professional profiles
3. **Verification** — Email addresses and phone numbers are verified in real-time
4. **Enrichment** — Each contact is enriched with company data, role information, and social profiles

## Why This Matters

Traditional prospecting is painfully manual. A sales rep might spend 2-3 hours building a list of 50 qualified leads. With AI-powered prospecting, you can generate hundreds of verified contacts in the time it takes to write a sentence.

But the real value isn't speed — it's precision. Natural language queries let you express nuanced criteria that would be impossible to filter in a traditional database:

- "CTOs at companies that recently raised Series A funding and are hiring engineers"
- "Marketing managers at e-commerce brands doing $5-20M in revenue who post about content marketing on LinkedIn"

## Getting Started

Several tools now offer this capability:

- **Clay** — Combines multiple data sources with AI-powered workflows
- **Apollo.io** — Database with AI prospecting features
- **Instantly** — Cold outreach platform with AI lead finding

## Best Practices

1. **Start narrow** — A hyper-specific query produces better results than a broad one
2. **Verify before blasting** — Even "verified" emails have a bounce rate. Send a small test batch first.
3. **Personalize your outreach** — AI-generated lists are only valuable if your message resonates. Use the enrichment data to write relevant openers.
4. **Respect privacy** — Just because you can find someone's contact info doesn't mean they want to hear from you. Lead with value.`,
    category: "ai-tools",
    tags: ["sales", "prospecting", "leads", "claude", "automation", "b2b"],
    difficulty: "intermediate",
    action_items: [
      { label: "Try Clay for AI Prospecting", url: "https://www.clay.com", type: "tool" },
      { label: "Try Apollo.io", url: "https://www.apollo.io", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@nathanhodgson_/video/7610897873974070550",
    source_video_id: "7610897873974070550",
    author_handle: "nathanhodgson_",
    status: "published" as const,
    published_at: toISO(1772050255),
  },

  // ── #3: Marketing agents GitHub repo ──
  {
    title: "This GitHub Repo Turns Claude Into Your Entire Marketing Team",
    slug: "claude-marketing-agents-github-repo",
    summary: "A community-built collection of marketing 'skills' you can copy-paste into Claude Code. Competitor analysis, CRO audits, positioning — all automated.",
    content: `## What Are Claude Code Skills?

Claude Code skills are pre-built workflows that extend Claude's capabilities for specific tasks. Think of them as plugins — you drop them into your project and Claude gains new specialized abilities.

The "Awesome Claude Code Skills" repository on GitHub collects community-built skills across dozens of categories. The marketing section is particularly impressive.

## What's in the Marketing Skills Pack?

The repository includes ready-to-use skills for:

- **Competitor Analysis** — Analyze competitor websites, pricing, positioning, and messaging. Claude crawls their public pages and generates a structured report.
- **CRO Audits** — Conversion rate optimization audits that analyze landing pages for friction points, unclear CTAs, and missed opportunities.
- **Positioning Strategy** — Generate positioning frameworks based on your product, market, and competitive landscape.
- **Content Calendar** — Plan content around your key topics, seasonal trends, and competitor gaps.
- **SEO Analysis** — Technical SEO audits, keyword gap analysis, and content optimization suggestions.

## How to Use Them

### 1. Clone the Skills

The skills are markdown files with structured prompts. Copy the ones you need into your Claude Code project.

### 2. Activate in Claude Code

Reference the skill file in your CLAUDE.md configuration. Claude Code reads it automatically and gains the capability.

### 3. Run the Workflow

Ask Claude to perform the task: "Run a competitor analysis on [company.com]" or "Do a CRO audit on our landing page."

## Why This Matters

Building these workflows from scratch would take weeks of prompt engineering. The community repository gives you battle-tested prompts that have been refined by hundreds of contributors.

The marketing skills are just one category. The repo also includes skills for development, design, data analysis, legal, HR, and more.

## Real-World Results

Teams using these skills report 70-80% time savings on routine marketing tasks. The competitor analysis skill, for example, produces a report in 5 minutes that would take a junior marketer a full day to compile.

The key insight: AI doesn't replace marketing thinking, but it eliminates the busywork that keeps marketers from doing the creative, strategic work that actually moves the needle.`,
    category: "github-repos",
    tags: ["claude-code", "marketing", "skills", "automation", "github", "open-source"],
    difficulty: "intermediate",
    action_items: [
      { label: "Browse Awesome Claude Skills", url: "https://github.com/anthropics/claude-code", type: "repo" },
      { label: "Claude Code Docs", url: "https://docs.anthropic.com/en/docs/claude-code/overview", type: "docs" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@theaiimpact/video/7607190987458497813",
    source_video_id: "7607190987458497813",
    author_handle: "theaiimpact",
    status: "published" as const,
    published_at: toISO(1771187187),
  },

  // ── #4: Scraping with Apify + Claude Code ──
  {
    title: "How to Scrape Any Website Using Apify and Claude Code Skills",
    slug: "scrape-websites-apify-claude-code",
    summary: "A step-by-step guide to combining Apify's scraping actors with Claude Code for automated, structured data extraction from virtually any site.",
    content: `## Why Apify + Claude Code?

Web scraping traditionally requires writing custom parsers for each site. Apify provides pre-built "actors" — scraping templates for common sites (Amazon, Google Maps, LinkedIn, Instagram, etc.) — and Claude Code can orchestrate them via its skill system.

The combination gives you a natural-language interface to web scraping: "Scrape the top 50 results for 'coworking space NYC' from Google Maps and put them in a spreadsheet."

## Setup

### 1. Get an Apify Account

Sign up at apify.com. The free tier includes enough compute for testing.

### 2. Get Your API Token

Find your API token in Apify Console → Settings → Integrations.

### 3. Add the Scraping Skill to Claude Code

Create a skill file that teaches Claude how to interact with the Apify API:

\`\`\`
# In your project's skills directory
- How to call Apify actors via their REST API
- How to parse and structure the results
- How to handle pagination and rate limits
\`\`\`

## Common Scraping Workflows

### Google Maps Businesses
Extract business listings with name, address, phone, rating, and review count. Useful for lead generation and market research.

### E-commerce Price Monitoring
Track competitor pricing across Amazon, Shopify stores, or any product listing page.

### Social Media Profiles
Aggregate public profile data for influencer research or brand monitoring.

### Job Listings
Monitor job postings across multiple boards for competitive intelligence.

## Best Practices

1. **Respect robots.txt** — Always check what the site allows before scraping
2. **Rate limit your requests** — Don't hammer servers. Apify handles this for its built-in actors, but custom scrapers need throttling.
3. **Store data responsibly** — Be mindful of data privacy regulations (GDPR, CCPA) when collecting personal information
4. **Use structured output** — Have Claude format results as CSV, JSON, or directly into your database

## When Not to Scrape

If the site has a public API, use it instead. Scraping is a last resort for data that isn't available through official channels. Many sites offer free API access for reasonable volumes.`,
    category: "tutorials",
    tags: ["scraping", "apify", "claude-code", "data", "automation", "web-scraping"],
    difficulty: "intermediate",
    action_items: [
      { label: "Sign Up for Apify", url: "https://apify.com", type: "tool" },
      { label: "Apify Actor Store", url: "https://apify.com/store", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@olleai/video/7612420322142227734",
    source_video_id: "7612420322142227734",
    author_handle: "olleai",
    status: "published" as const,
    published_at: toISO(1772404730),
  },

  // ── #5: Multi-agent coding ──
  {
    title: "Multi-Agent Coding — Run Multiple AI Developers in Parallel",
    slug: "multi-agent-ai-coding-parallel",
    summary: "The way we code has changed. You can now launch multiple AI agents simultaneously, each building a different feature. Here's how parallel AI development actually works.",
    content: `## The Old Way vs. The New Way

**Old way:** Write code for Feature A. Finish. Move to Feature B. Finish. Move to Feature C. Linear, sequential, one thing at a time.

**New way:** Launch Agent 1 on Feature A, Agent 2 on Feature B, Agent 3 on Feature C. All building simultaneously. You review and merge as they complete.

This isn't theoretical — tools like Claude Code with git worktrees, Cursor with multiple tabs, and frameworks like the Claude Agent SDK make this workflow practical today.

## How Multi-Agent Development Works

### 1. Decompose the Work

Break your project into independent pieces that don't conflict:
- Frontend component A (Agent 1)
- API endpoint B (Agent 2)
- Database migration C (Agent 3)
- Test suite D (Agent 4)

### 2. Isolate Each Agent

Each agent works in its own git branch or worktree. This prevents merge conflicts during development and lets you review each piece independently.

### 3. Define Clear Boundaries

Give each agent:
- A specific task description
- The files it should modify
- The acceptance criteria (tests pass, types check, etc.)
- What NOT to touch

### 4. Review and Merge

As agents complete their work, review each branch, run tests, and merge. The key discipline: never merge without reviewing.

## Tools That Enable This

- **Claude Code** — Supports git worktrees for isolated parallel development
- **Claude Agent SDK** — Build custom multi-agent workflows
- **Cursor** — Multiple AI-assisted editing sessions
- **Aider** — Can be run in multiple terminal sessions on different branches

## When Multi-Agent Works Best

- **Greenfield features** with clear boundaries
- **Test writing** across different modules
- **Refactoring** independent sections of code
- **Documentation** for different parts of the codebase

## When to Stay Sequential

- **Tightly coupled changes** where one feature depends on another
- **Architecture decisions** that affect the whole codebase
- **Debugging** where you need to understand root causes

## The Productivity Multiplier

A single developer orchestrating 3-4 AI agents can accomplish in one day what used to take a week. But the skill isn't in running the agents — it's in decomposing work correctly and reviewing output quality. The developer becomes an architect and reviewer rather than a line-by-line coder.`,
    category: "ai-agents",
    tags: ["multi-agent", "coding", "parallel-development", "productivity", "claude-code", "workflow"],
    difficulty: "advanced",
    action_items: [
      { label: "Claude Agent SDK", url: "https://docs.anthropic.com/en/docs/agent-sdk", type: "docs" },
      { label: "Claude Code Docs", url: "https://docs.anthropic.com/en/docs/claude-code/overview", type: "docs" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@stephengpope/video/7613082094494928159",
    source_video_id: "7613082094494928159",
    author_handle: "stephengpope",
    status: "published" as const,
    published_at: toISO(1772558825),
  },

  // ── #6: 2026 dev stack ──
  {
    title: "The Only Dev Stack You Need in 2026",
    slug: "only-dev-stack-you-need-2026",
    summary: "The modern developer toolkit has converged. Here's the stack that top builders are shipping with — and why you don't need anything else.",
    content: `## The Stack

The 2026 dev stack has crystallized around a few clear winners. Here's what top builders are actually using — not the trending list, but the tools that ship real products.

## Frontend: Next.js + Tailwind CSS v4

Next.js remains the dominant React framework. Version 16 brought performance improvements and simplified the mental model. Tailwind CSS v4 moved to a CSS-first configuration approach that's cleaner and faster.

**Why:** Server components, edge rendering, and a massive ecosystem. Nothing else offers this combination of developer experience and production performance.

## AI Coding: Claude Code + Cursor

The two tools complement each other. Cursor for in-editor AI assistance (autocomplete, inline edits, chat). Claude Code for project-wide changes (refactoring, new features, complex debugging).

**Why:** Using both together gives you the best of line-level and project-level AI assistance. Most developers who try both end up using both.

## Backend & Database: Supabase

Supabase provides PostgreSQL, authentication, file storage, edge functions, and real-time subscriptions in one platform. For most projects, it eliminates the need to think about infrastructure.

**Why:** The combination of a real PostgreSQL database with built-in auth and row-level security means you can ship secure apps without building an auth system from scratch.

## Deployment: Vercel

Git push to deploy. Preview deployments on every PR. Edge functions. Analytics. The developer experience is unmatched.

**Why:** Zero-config deployment for Next.js projects. Automatic preview URLs for every branch make collaboration effortless.

## Design: Figma + shadcn/ui

Figma for design. shadcn/ui for implementation. The component library gives you production-quality UI components that you own (they're copied into your codebase, not imported from a package).

**Why:** shadcn/ui components are beautifully designed, accessible by default, and fully customizable. No more fighting with opinionated component library APIs.

## The Meta-Point

The best stack is the one you ship with. These tools are all excellent, but the reason they won is ergonomics — they remove friction from the development process. Every hour you don't spend configuring infrastructure is an hour you spend building features.

Pick these, learn them well, and ship.`,
    category: "ai-tools",
    tags: ["dev-stack", "nextjs", "tailwind", "supabase", "vercel", "cursor", "claude-code"],
    difficulty: "beginner",
    action_items: [
      { label: "Try Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code/overview", type: "tool" },
      { label: "Try Cursor", url: "https://cursor.com", type: "tool" },
      { label: "Try Supabase", url: "https://supabase.com", type: "tool" },
      { label: "Browse shadcn/ui", url: "https://ui.shadcn.com", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@whymarcuswhy/video/7612679686031707400",
    source_video_id: "7612679686031707400",
    author_handle: "whymarcuswhy",
    status: "published" as const,
    published_at: toISO(1772465115),
  },

  // ── #7: Claude plugins / skills ──
  {
    title: "Claude's New Role-Specific Plugins Turn It Into a Specialist",
    slug: "claude-role-specific-plugins-specialist",
    summary: "Pre-built expertise modules for HR, finance, legal, sales, marketing, and design. Each category turns Claude into a domain specialist with structured workflows.",
    content: `## What Changed

Anthropic's skill system for Claude lets developers create pre-built expertise modules that transform Claude from a generalist into a domain specialist. The community has built skills across every major business function.

## How Skills Work

A skill is a structured prompt template combined with tool configurations and workflow definitions. When you load a skill, Claude gains:

- **Domain knowledge** — Specific terminology, frameworks, and best practices
- **Structured workflows** — Step-by-step processes for common tasks
- **Output formats** — Templates and frameworks relevant to the domain
- **Tool integrations** — Connections to relevant APIs and services

## Available Skill Categories

### Human Resources
- Job description generation from role requirements
- Interview question frameworks by seniority level
- Performance review templates and analysis
- Compensation benchmarking research

### Finance
- Financial model building and analysis
- Budget planning and variance analysis
- Invoice processing and categorization
- Cash flow forecasting

### Legal
- Contract review and risk flagging
- NDA and terms of service drafting
- Compliance checklist generation
- Regulatory research by jurisdiction

### Sales
- Lead qualification frameworks
- Proposal and pitch deck generation
- Competitive battle cards
- Pipeline analysis and forecasting

### Marketing
- Competitor analysis and positioning
- Content calendar planning
- CRO audit workflows
- Brand voice documentation

### Design
- Design system documentation
- Figma workflow automation
- Accessibility audit checklists
- Component specification writing

## Getting Started

1. Browse the skill library in the community repository
2. Copy the skill files you need into your project
3. Reference them in your Claude Code configuration
4. Start using Claude with domain expertise

The skills are open-source and community-maintained, so they improve over time as more practitioners contribute their workflows.`,
    category: "ai-tools",
    tags: ["claude", "plugins", "skills", "enterprise", "productivity", "automation"],
    difficulty: "beginner",
    action_items: [
      { label: "Claude Code Skills", url: "https://docs.anthropic.com/en/docs/claude-code/overview", type: "docs" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@brockmesarich/video/7612681252562357517",
    source_video_id: "7612681252562357517",
    author_handle: "brockmesarich",
    status: "published" as const,
    published_at: toISO(1772465524),
  },

  // ── #8: Claude Cowork future of AI ──
  {
    title: "Why Collaborative AI Workspaces Are the Future of Knowledge Work",
    slug: "collaborative-ai-workspaces-future",
    summary: "The shift from solo AI chat to shared AI workspaces is the biggest UX change since Google Docs. Here's why it matters and how to start using it.",
    content: `## Beyond the Chat Window

For the past three years, AI has lived in a single-player chat window. You type, it responds, you copy the output somewhere useful. That workflow is about to look as quaint as emailing Word documents back and forth.

Collaborative AI workspaces let teams share context, build on each other's AI interactions, and maintain persistent project knowledge. Instead of everyone having separate conversations with AI about the same project, you share one workspace where AI understands the full picture.

## What Makes This Different

### Shared Context
Everyone on the team contributes to the AI's understanding of the project. When the marketing person asks about messaging, the AI already knows the technical constraints the engineering team discussed yesterday.

### Persistent Memory
The workspace remembers past decisions, preferences, and project history. No more re-explaining your brand guidelines every time you start a new chat.

### Collaborative Editing
Multiple team members can work with AI simultaneously on the same document, code, or analysis — like Google Docs but with an AI collaborator that understands the whole project.

## Practical Applications

- **Product teams** sharing research, specs, and design decisions in one AI-aware workspace
- **Engineering teams** maintaining shared context about architecture decisions and code patterns
- **Creative teams** building shared brand knowledge that AI applies consistently across all outputs

## How to Start

You don't need a dedicated tool to begin. Start with these practices:

1. **Create shared prompt libraries** — Document the prompts that work well for your team
2. **Maintain a project brief** — A living document that you include in AI conversations to maintain context
3. **Share AI outputs** — When someone gets a great result from AI, share the prompt and output with the team
4. **Build on each other's work** — Use AI to extend and refine your teammates' outputs rather than starting from scratch

The tools are evolving fast, but the mindset shift — from individual AI use to team AI use — is the more important change.`,
    category: "ai-news",
    tags: ["collaboration", "workspace", "teams", "productivity", "future", "knowledge-work"],
    difficulty: "beginner",
    action_items: [
      { label: "Try Claude for Teams", url: "https://claude.ai", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@nate.b.jones/video/7594962222451838239",
    source_video_id: "7594962222451838239",
    author_handle: "nate.b.jones",
    status: "published" as const,
    published_at: toISO(1768339976),
  },

  // ── #9: Anthropic courses for Claude ──
  {
    title: "Anthropic's Free Claude Courses — The Complete Learning Path for 2026",
    slug: "anthropic-free-claude-courses-2026",
    summary: "Anthropic released a structured curriculum for mastering Claude and Claude Code. Here's what's included and the recommended learning order.",
    content: `## The Course Lineup

Anthropic offers free courses that take you from "What is Claude?" to building production AI applications. The curriculum is structured but flexible — you can jump to whatever's relevant to your skill level.

## Recommended Learning Path

### 1. Claude Fundamentals
Start here if you're new to Claude. Covers the basics of prompting, understanding model capabilities, and getting consistent results.

**What you'll learn:**
- How to write effective prompts
- Understanding Claude's strengths and limitations
- Working with different output formats
- Using system prompts for consistent behavior

### 2. Prompt Engineering
Deeper dive into advanced prompting techniques. This is where most people see a dramatic improvement in their AI results.

**What you'll learn:**
- Chain-of-thought reasoning
- Few-shot examples for consistent formatting
- Handling ambiguity and edge cases
- Prompt caching for performance

### 3. Claude Code for Developers
Hands-on course for using Claude Code in your development workflow. Assumes basic programming knowledge.

**What you'll learn:**
- Installation and setup
- Project configuration with CLAUDE.md
- Writing effective task descriptions
- Working with git integration
- Using skills and tool use

### 4. Tool Use and Function Calling
Building applications that let Claude interact with external systems.

**What you'll learn:**
- Defining tools for Claude to use
- Handling tool results and errors
- Building agentic workflows
- Safety and guardrails

### 5. Building with the API
For developers building Claude-powered applications.

**What you'll learn:**
- API authentication and setup
- Streaming responses
- Managing context windows
- Cost optimization with caching

## Why These Courses Matter

Most AI education is generic — "here's how to use ChatGPT." Anthropic's courses are specific to Claude's architecture and capabilities, which means you learn techniques that actually work with the model rather than fighting against it.

The courses are also updated regularly as Claude's capabilities evolve, so what you learn stays relevant.

## How to Access

All courses are available for free on Anthropic's documentation site. No sign-up required for the educational content.`,
    category: "courses",
    tags: ["anthropic", "courses", "learning", "claude", "claude-code", "education", "free"],
    difficulty: "beginner",
    action_items: [
      { label: "Anthropic Courses", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", type: "docs" },
      { label: "Claude Code Tutorial", url: "https://docs.anthropic.com/en/docs/claude-code/overview", type: "docs" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@nocode.joshua/video/7613728722809621768",
    source_video_id: "7613728722809621768",
    author_handle: "nocode.joshua",
    status: "published" as const,
    published_at: toISO(1772709365),
  },

  // ── #10: Deploy a Claude bot ──
  {
    title: "How to Deploy Your Own AI Bot With Claude — A Practical Guide",
    slug: "deploy-your-own-claude-ai-bot",
    summary: "Stop watching tutorials and actually ship an AI bot. Here's a no-nonsense guide to getting a Claude-powered bot running in a sandboxed environment.",
    content: `## Stop Planning, Start Deploying

The number one reason people don't build AI bots is analysis paralysis. Which framework? Which model? Which hosting? The answer for getting started is simple: pick Claude, pick a framework, deploy in a sandbox, iterate.

## What You'll Build

A conversational AI bot powered by Claude that can:
- Answer questions based on your custom knowledge
- Execute specific tasks you define
- Interact through a web interface or API

## The Architecture

\`\`\`
User → Your App (Next.js/Express) → Claude API → Response
                ↓
         Your Knowledge Base
         (Markdown files, DB)
\`\`\`

## Step-by-Step

### 1. Set Up Your Environment

Create a new project with your preferred framework. For the fastest path:

\`\`\`bash
npx create-next-app my-claude-bot
cd my-claude-bot
npm install @anthropic-ai/sdk
\`\`\`

### 2. Create the API Route

Build a route handler that sends messages to Claude with your system prompt:

- Define your bot's personality and knowledge boundaries
- Add a system prompt that specifies what it can and can't do
- Include relevant context from your knowledge base

### 3. Build the Interface

A simple chat interface: message input, response display, conversation history. Keep it minimal for v1.

### 4. Add Safety Rails

**This is non-negotiable:**
- Rate limiting (prevent abuse)
- Input validation (reject injection attempts)
- Output filtering (catch responses that shouldn't be shown)
- Cost controls (set spending limits on the API)

### 5. Deploy in a Sandbox

Deploy to Vercel (free tier), Railway, or Fly.io. Start with limited access — share the URL with a few trusted users before going public.

## Security Checklist

- API keys stored in environment variables, never in code
- Rate limiting enabled
- Input length limits set
- No direct database access from the client
- Logging enabled for debugging
- Cost alerts configured

## The Right Mindset

Your first bot will be rough. That's fine. The goal isn't perfection — it's getting something running that you can improve. Deploy today, polish tomorrow.`,
    category: "ai-agents",
    tags: ["bot", "deployment", "claude", "api", "tutorial", "sandbox"],
    difficulty: "intermediate",
    action_items: [
      { label: "Anthropic SDK", url: "https://docs.anthropic.com/en/api/getting-started", type: "docs" },
      { label: "Deploy on Vercel", url: "https://vercel.com", type: "tool" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@maven_hq/video/7613804574507371806",
    source_video_id: "7613804574507371806",
    author_handle: "maven_hq",
    status: "published" as const,
    published_at: toISO(1772727062),
  },

  // ── #11: Most powerful Claude Code update ──
  {
    title: "The Most Powerful Claude Code Update in Months — What Changed",
    slug: "most-powerful-claude-code-update",
    summary: "Claude Code got a major update that fundamentally changes how it works with your codebase. Here's what's new and why developers are excited.",
    content: `## The Update That Matters

Claude Code has been shipping updates steadily, but this one stands out. The improvements target the three biggest pain points developers had: context management, tool reliability, and multi-file editing accuracy.

## What Changed

### Smarter Context Management

Claude Code now intelligently prioritizes which files to keep in context based on your current task. Instead of loading everything and running out of context window, it dynamically manages what it's paying attention to.

**What this means for you:** Larger projects work better. You can work on a 500-file codebase without Claude losing track of important files.

### Improved Tool Execution

Tool calls (running tests, building projects, checking git status) are now more reliable and faster. Failed tool calls are automatically retried with adjusted parameters when the error is recoverable.

**What this means for you:** Fewer "let me try that again" moments. Claude Code recovers from errors more gracefully.

### Multi-File Editing Accuracy

The biggest improvement: when Claude Code needs to edit multiple files as part of a single feature, the edits are now more coordinated. Import statements match the exports, types flow correctly across files, and the build passes more often on the first attempt.

**What this means for you:** More complex features can be built in a single prompt without manual fix-up.

## How to Get the Update

Claude Code auto-updates by default. Check your version:

\`\`\`bash
claude --version
\`\`\`

If you're behind, update with:

\`\`\`bash
npm update -g @anthropic-ai/claude-code
\`\`\`

## Tips for Getting the Most From It

1. **Write a CLAUDE.md file** — The new context management works best when it understands your project's structure and conventions
2. **Use specific prompts** — "Add pagination to the /api/users endpoint with cursor-based navigation" beats "add pagination"
3. **Let it run tests** — The improved tool execution shines when Claude can verify its own work
4. **Review the diff** — Better multi-file editing means bigger changes. Bigger changes need more careful review.

## The Trajectory

Each Claude Code update makes the tool closer to a genuine AI pair programmer rather than a fancy autocomplete. We're approaching the point where you can describe a feature in a paragraph and get a working implementation on the first attempt — for most common patterns, we're already there.`,
    category: "ai-news",
    tags: ["claude-code", "update", "developer-tools", "announcement", "productivity"],
    difficulty: "intermediate",
    action_items: [
      { label: "Update Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code/overview", type: "docs" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@zerotopete/video/7603508914688216333",
    source_video_id: "7603508914688216333",
    author_handle: "zerotopete",
    status: "published" as const,
    published_at: toISO(1770329887),
  },

  // ── #13: Claude learns design workflows ──
  {
    title: "Can Claude Learn Your Design Workflow? Yes — Here's How",
    slug: "claude-learns-design-workflow",
    summary: "A GitHub library with 32,000+ stars is teaching Claude to work with Figma, Webflow, Canva, and other design tools. Here's what's possible and how to set it up.",
    content: `## The Design Skills Library

Developers have built Claude Code skills specifically for design workflows. These skills teach Claude how to work with your design tools — not as a replacement for designers, but as an assistant that handles the repetitive parts of the workflow.

## What's Available

### Figma Integration
- Generate component specifications from design files
- Create design tokens from Figma variables
- Document spacing, typography, and color systems
- Export assets with proper naming conventions

### Webflow Workflows
- Generate Webflow-compatible class structures
- Plan responsive breakpoints from designs
- Create CMS collection schemas from design requirements
- Document component patterns for developer handoff

### Design System Documentation
- Auto-generate component documentation from code
- Create usage guidelines from existing patterns
- Build accessibility checklists for each component
- Track design token usage across the codebase

### Canva and Visual Tools
- Generate social media templates from brand guidelines
- Create consistent visual assets across formats
- Maintain brand consistency checks

## How to Set It Up

### 1. Install the Skills

Clone the relevant skills from the repository into your Claude Code project's skills directory.

### 2. Configure for Your Stack

Update the skill configurations to match your design tools and conventions. For example, specify your Figma file IDs, your design token format, and your component naming conventions.

### 3. Use Natural Language

Once configured, you interact naturally:
- "Document the button component's design specs"
- "Generate design tokens from our Figma variables"
- "Create a component specification for the new header design"

## Real-World Impact

Design teams using these skills report:
- **60% faster handoff** — Specifications are generated automatically
- **Fewer implementation bugs** — Claude catches discrepancies between design and code
- **Better documentation** — Every component gets documented because it's automated

## The Bigger Picture

Design has always been hard to automate because it requires visual judgment. These skills don't automate the creative decisions — they automate the documentation, specification, and communication tasks that eat up designer and developer time. The creative work stays human; the busywork becomes automated.`,
    category: "workflows",
    tags: ["design", "figma", "webflow", "design-system", "skills", "automation"],
    difficulty: "intermediate",
    action_items: [
      { label: "Browse Design Skills", url: "https://github.com/anthropics/claude-code", type: "repo" },
      { label: "Figma Developer Docs", url: "https://www.figma.com/developers", type: "docs" },
    ],
    source_tiktok_url: "https://www.tiktok.com/@zerotoui/video/7611610213115858198",
    source_video_id: "7611610213115858198",
    author_handle: "zerotoui",
    status: "published" as const,
    published_at: toISO(1772216111),
  },
];

// Fix existing articles' published_at to match original video dates
const dateFixups = [
  { source_video_id: "7609623318043380999", published_at: toISO(1771753504) }, // ai.with.ni - 2026-02-22
  { source_video_id: "7610475859316673806", published_at: "2026-02-24T12:00:00Z" }, // maven_hq - approximate
  { source_video_id: "7605315700487376149", published_at: "2026-02-11T12:00:00Z" }, // danvmartell - approximate
];

async function seed() {
  console.log("Seeding 12 new articles...");

  let ok = 0;
  let fail = 0;
  for (const article of articles) {
    const { data, error } = await supabase
      .from("articles")
      .upsert(article, { onConflict: "source_video_id" })
      .select("id, slug")
      .single();

    if (error) {
      console.error(`FAIL: ${article.slug}`, error.message);
      fail++;
    } else {
      console.log(`OK: ${data.slug}`);
      ok++;
    }
  }

  console.log(`\nInserted: ${ok}, Failed: ${fail}`);

  console.log("\nFixing existing article dates...");
  for (const fix of dateFixups) {
    const { error } = await supabase
      .from("articles")
      .update({ published_at: fix.published_at })
      .eq("source_video_id", fix.source_video_id);

    if (error) {
      console.error(`Date fix failed for ${fix.source_video_id}:`, error.message);
    } else {
      console.log(`Date fixed: ${fix.source_video_id}`);
    }
  }

  console.log("Done.");
}

seed();
