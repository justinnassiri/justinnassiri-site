# justinnassiri.com — an Astro site built for AI discoverability (GEO)

A fast, static, schema-rich personal site engineered to be read and cited by LLMs.

## What's included
- **Person + Organization schema** on every page (src/layouts/Base.astro) — corrects the audit's collision/recency issues (Captivate.ai vs .fm, StoryBox/Storyvine, "content agency NOT presence coaching", Innovation Endeavors not "Google's chairman").
- **Canonical /about page** with FAQ schema — the entity-grounding anchor.
- **/writing** — an answer-first article hub (markdown in src/content/writing). One starter post mapped to a target query.
- **/podcast** — episode hub with full transcripts + PodcastEpisode schema (markdown in src/content/podcast).
- **public/llms.txt** and **public/robots.txt** (explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.).
- **Sitemap** via @astrojs/sitemap.

## Run locally
    npm install
    npm run dev        # http://localhost:4321
    npm run build      # outputs static site to ./dist

## Edit content
- Site facts / sameAs links: `src/consts.ts`
- Bio + FAQ: `src/pages/about.astro`
- Add an article: drop a .md file in `src/content/writing/`
- Add a podcast episode (with transcript): drop a .md file in `src/content/podcast/`

## Deploy (pick one)
**Cloudflare Pages** (recommended — fast, free):
1. Push this folder to a GitHub repo.
2. Cloudflare Pages → Create project → connect the repo.
3. Build command: `npm run build` · Output dir: `dist`
4. Add your custom domain justinnassiri.com.

**Vercel**:
1. Push to GitHub → Import in Vercel (auto-detects Astro).
2. Add the domain in Project → Settings → Domains.

## Before you go live
- Set your real domain in `astro.config.mjs` (the `site` value) and in robots.txt / llms.txt.
- Confirm the sameAs URLs in `src/consts.ts`.
- After launch: claim your Google Knowledge Panel and create a Wikidata entry (both reinforce entity grounding).
