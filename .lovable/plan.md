# Plan: Gamifly /resources Hub Page

Create a new route at `/resources` as the SEO/AEO knowledge hub. The route doesn't exist yet — this is a greenfield page.

## Route file

Create `src/routes/resources.tsx` with full `head()` metadata:
- Title: "Gamifly Resources | iGaming Gamification & Player Retention"
- Meta description, og:title, og:description, og:type=website, og:url=/resources
- Canonical: /resources
- JSON-LD: `CollectionPage` + `FAQPage` schema (for answer-engine friendliness / AEO)

## Page sections (in order)

1. **Hero** — H1 "iGaming Gamification Resources for Operators", subtitle, gradient background.
2. **Short answer block** — single highlighted paragraph (AEO-optimized snippet) describing what Gamifly Resources is.
3. **Start Here** (H2) — 3 prominent recommended-article cards:
   - What is iGaming Gamification? → /resources/what-is-igaming-gamification
   - How to Increase Player Retention in iGaming → /resources/what-is-player-retention-in-igaming
   - Gamification Integration Checklist for Operators → /resources/gamification-integration-checklist
4. **Browse by Category** (H2) — grid of 8 category cards (iGaming Gamification, Player Retention, Missions & Campaigns, Sportsbook Gamification, Casino Gamification, AI Personalization, Integration Guides, Operator Use Cases). Each card: icon (lucide-react), title, short description. Links to category landing routes (placeholder hrefs, e.g. `/resources/category/...`) — clickable but those routes won't exist yet.
5. **Featured Resources** (H2) — 6 article cards (title, short description, tag/category badge, "Read more" button) linking to the 6 listed `/resources/...` slugs. Slugs are placeholders; landing pages are out of scope here.
6. **FAQ** (H2) — 6 Q&A items using shadcn `Accordion`. Same questions feed the FAQPage JSON-LD with brief expert answers.
7. **CTA section** — "Ready to turn player engagement into a platform layer?", primary "Book a Demo" + secondary "Explore Gamifly Features" buttons.

## Design system

Update `src/styles.css` to add dark navy/charcoal theme tokens and electric blue/purple accent tokens (semantic only — no hardcoded colors in components):
- `--background` deep navy/charcoal
- `--primary` electric blue, `--accent` purple
- New tokens: `--gradient-hero` (blue→purple), `--gradient-card`, `--shadow-glow`, `--shadow-card`
- Keep light/dark variables in oklch; this page renders in dark style by default (force dark class on the page wrapper, or theme the page locally with semantic tokens already configured for dark surfaces).

Components use shadcn primitives already in the repo: `Card`, `Button`, `Badge`, `Accordion`. No new deps.

## Responsive layout

- Container max-width with generous spacing
- Category grid: 1 col mobile → 2 col tablet → 4 col desktop
- Featured grid: 1 → 2 → 3 col
- Start Here: 1 → 3 col

## Out of scope

- Building individual `/resources/<slug>` article pages (links will 404 until built — can follow up).
- Adding a sitemap entry (can do after article pages exist).

## Closing

After approval I'll create the route and wire the theme tokens.