# Project Guidelines & Preferences (zakrulabd)

## Identity & Persona
- **Developer:** Muhamad Zaqrul (`zakrulabd`)
- **Email:** `zakrulabd@gmail.com`
- **Location:** Selangor, Malaysia
- **Role:** Senior Full-Stack Engineer (about five years in production) who also takes freelance web projects directly. Solo, so no agency / no team wording. Only state confirmed experience: a large AWS ecommerce platform (sole engineer from 2021), a healthcare monitoring platform on Azure (five codebases), and AI automation with n8n and OpenAI agents. Do not name past employers on the site.
- **Communication Tone:** First-person direct and plain ("Let’s Discuss", "How I Work"). Avoid marketing filler and stacked em dashes in site copy.
- **WhatsApp:** Pre-filled `wa.me` messages stay in Malay and address the owner as "Zakrul".
- **Pricing:** Starter is a fixed RM800 (no hosting or custom domain). Professional is "From RM1,500" (custom domain for the first year, no hosting). Advanced is quoted per project. Keep prices in sync across `content.ts`, `content-ms.ts`, `faq-ms.ts`, `legal-ms.ts`, and `compare-ms.ts`.

## Architecture & Code Standards
- **Framework:** Next.js (App Router, Turbopack, standalone static generation)
- **Proxy Convention:** Use `src/proxy.ts` (named export `export function proxy(request: NextRequest)`) instead of deprecated middleware.
- **Language:** English copy lives in `src/lib/content.ts` (exported as `content`). Malay copy lives in `src/lib/content-ms.ts` (plus `faq-ms.ts`, `legal-ms.ts`, `compare-ms.ts`) and is served under `/ms`. Change both languages together.

## UI & Design System
- **Palette:** High-contrast neutral base (navy `#171717`, background `#f5f5f5`, white `#ffffff`) with amber/yellow accent (`#fbcf33` / `#f7c325`).
- **Highlight Text:** Always use `.hl` class with dark text over amber pills.
- **Typography:** Inter (`--font-inter`) for body, Plus Jakarta Sans (`--font-jakarta`) for display/headings, JetBrains Mono (`--font-jetbrains-mono`) for code/tech tags.
- **Navigation:** Sticky header (`sticky top-0 z-50`) with mobile subnav tabs and yellow animated hover underline.
- **Scrolling:** Smooth scrolling (`scroll-behavior: smooth`, `scroll-padding-top: 5rem`).

## Security & Crawl Policies
- **Authorized Bots:** Googlebot, Bingbot, DuckDuckBot, Baiduspider, YandexBot, and search AI bots (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-Web`).
- **Blocked Scrapers:** Aggressive training scrapers (`GPTBot`, `CCBot`, `Bytespider`, `anthropic-ai`, `ClaudeBot`, `FacebookBot`, `Scrapy`, etc.) are blocked via `robots.ts` and `src/proxy.ts` (403 Forbidden).
- **Security Headers:** Strict HSTS, X-Frame-Options SAMEORIGIN, nosniff, Referrer-Policy, Permissions-Policy, poweredByHeader disabled in `next.config.ts`.
- **Anti-Brute Force:** Rate limiter and scanner exploit path filtering in `src/proxy.ts`.


## Active Space 3 handoff

Before continuing Space 3 work, read `docs/space3-claude-resume.md`. It records the current shared-tree changes and what still needs verification.
