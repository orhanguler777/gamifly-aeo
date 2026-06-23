import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Trophy,
  Users,
  Target,
  Activity,
  Dice5,
  Sparkles,
  Plug,
  Building2,
  ArrowRight,
  BookOpen,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "What is iGaming gamification?",
    a: "iGaming gamification is the use of game mechanics — missions, badges, tournaments, leaderboards, levels, and rewards — inside casino and sportsbook products to make the player experience more engaging, habit-forming, and rewarding. For operators it becomes a platform layer that drives activity, retention, and lifetime value.",
  },
  {
    q: "Why do iGaming operators need gamification?",
    a: "Player acquisition costs keep rising while product differentiation between operators shrinks. Gamification gives operators a structural way to increase session frequency, deposit cadence, cross-product play, and retention without relying solely on bonuses or free bets.",
  },
  {
    q: "How does gamification improve player retention?",
    a: "Missions and progression systems give players a reason to return tomorrow, not just today. Personalized journeys, streaks, badges, and tournament cycles create short, medium, and long-term goals that compound into higher 7, 30, and 90-day retention.",
  },
  {
    q: "Can gamification work for both casino and sportsbook?",
    a: "Yes. The mechanics adapt to the vertical — slots missions, table-game challenges, and live-casino tournaments on the casino side; bet-builder missions, multi-sport challenges, and in-play tournaments on the sportsbook side — all running on the same engine and player profile.",
  },
  {
    q: "How does Gamifly integrate with operator platforms?",
    a: "Gamifly connects via API/SDK to the operator's wallet, player account, and game/bet event streams. Integration is designed to be incremental: start with a single mission engine, then layer in campaigns, badges, tournaments, rewards, and AI personalization.",
  },
  {
    q: "What is AI-based player retention?",
    a: "AI-based player retention uses behavioral signals — game preferences, session timing, bet patterns, churn risk — to automatically assign the right mission, reward, or campaign to the right player at the right moment, replacing static, segment-level CRM with individualized journeys.",
  },
];

const categories = [
  { icon: Trophy, title: "iGaming Gamification", desc: "Core mechanics, frameworks, and platform strategy." },
  { icon: Users, title: "Player Retention", desc: "Cohort behavior, churn, and lifetime value." },
  { icon: Target, title: "Missions & Campaigns", desc: "Designing missions, quests, and seasonal events." },
  { icon: Activity, title: "Sportsbook Gamification", desc: "Bet missions, in-play tournaments, multi-sport challenges." },
  { icon: Dice5, title: "Casino Gamification", desc: "Slots, table game, and live casino mechanics." },
  { icon: Sparkles, title: "AI Personalization", desc: "Behavioral targeting and adaptive player journeys." },
  { icon: Plug, title: "Integration Guides", desc: "API, SDK, wallet and event-stream integration." },
  { icon: Building2, title: "Operator Use Cases", desc: "Real-world deployments and operator playbooks." },
];

const featured = [
  {
    href: "/resources/what-is-igaming-gamification",
    tag: "iGaming Gamification",
    title: "What is iGaming Gamification?",
    desc: "A complete primer on gamification for casino and sportsbook operators — mechanics, business case, and platform layer.",
  },
  {
    href: "/resources/what-is-player-retention-in-igaming",
    tag: "Player Retention",
    title: "What is Player Retention in iGaming?",
    desc: "How operators measure retention, why churn happens, and where gamification moves the curve.",
  },
  {
    href: "/resources/igaming-gamification-examples",
    tag: "Examples",
    title: "iGaming Gamification Examples",
    desc: "Real-world mission, tournament, and badge designs used by leading casino and sportsbook brands.",
  },
  {
    href: "/resources/gamification-kpis-for-operators",
    tag: "KPIs",
    title: "Gamification KPIs for Operators",
    desc: "The metrics that matter: activity rate, retention uplift, mission completion, and revenue per active player.",
  },
  {
    href: "/resources/igaming-retention-strategy",
    tag: "Strategy",
    title: "iGaming Retention Strategy",
    desc: "A practical playbook for building a retention layer with missions, campaigns, and AI personalization.",
  },
  {
    href: "/resources/gamification-integration-checklist",
    tag: "Integration",
    title: "Gamification Integration Checklist",
    desc: "Everything technical and product teams need before, during, and after launching a gamification platform.",
  },
];

const startHere = [
  {
    icon: BookOpen,
    href: "/resources/what-is-igaming-gamification",
    title: "What is iGaming Gamification?",
    desc: "Start with the fundamentals — what gamification actually means in iGaming and why it's now a platform layer.",
  },
  {
    icon: Rocket,
    href: "/resources/what-is-player-retention-in-igaming",
    title: "How to Increase Player Retention in iGaming",
    desc: "A strategic walkthrough of the mechanics that move 7, 30, and 90-day retention for casino and sportsbook.",
  },
  {
    icon: CheckCircle2,
    href: "/resources/gamification-integration-checklist",
    title: "Gamification Integration Checklist for Operators",
    desc: "The product, tech, and CRM checklist for a clean rollout — from wallet integration to AI journeys.",
  },
];

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Gamifly Resources | iGaming Gamification & Player Retention" },
      {
        name: "description",
        content:
          "Learn about iGaming gamification, player retention, missions, campaigns, sportsbook engagement, casino engagement, and AI-powered player journeys with Gamifly.",
      },
      { property: "og:title", content: "Gamifly Resources | iGaming Gamification & Player Retention" },
      {
        property: "og:description",
        content:
          "Learn about iGaming gamification, player retention, missions, campaigns, sportsbook engagement, casino engagement, and AI-powered player journeys with Gamifly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Gamifly Resources",
          description:
            "Knowledge hub for iGaming operators on gamification, player retention, engagement mechanics, AI player journeys, and campaign automation.",
          url: "/resources",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <header
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.7_0.2_265/0.3)_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="container relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Gamifly Resources
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              iGaming Gamification
            </span>{" "}
            Resources for Operators
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Learn how iGaming operators can increase player engagement, retention, activity, and
            lifetime value through missions, campaigns, badges, tournaments, rewards, and AI-powered
            personalization.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6">
        {/* Short answer block (AEO) */}
        <section aria-label="Overview" className="relative z-10 -mt-10 md:-mt-12">
          <div
            className="rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:p-8"
            style={{ background: "var(--gradient-card)" }}
          >
            <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
              <span className="font-semibold text-foreground">Gamifly Resources</span> is a knowledge
              hub for iGaming operators, platform providers, casino brands, and sportsbook brands
              looking to understand gamification, player retention, engagement mechanics, AI-based
              player journeys, and campaign automation.
            </p>
          </div>
        </section>

        {/* Start Here */}
        <section className="py-20" aria-labelledby="start-here">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Start Here
              </p>
              <h2 id="start-here" className="mt-2 text-3xl font-bold md:text-4xl">
                Three articles to read first
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {startHere.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-card)" }}
              >
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="py-12" aria-labelledby="categories">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Browse by Category
            </p>
            <h2 id="categories" className="mt-2 text-3xl font-bold md:text-4xl">
              Topics across the operator stack
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.title}
                to="/resources"
                className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/60 text-primary transition-colors group-hover:text-accent">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20" aria-labelledby="featured">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Featured Resources
            </p>
            <h2 id="featured" className="mt-2 text-3xl font-bold md:text-4xl">
              Deep dives for product & CRM teams
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <article
                key={item.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{item.desc}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-6 w-fit -ml-3 text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Link to={item.href}>
                      Read more
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" aria-labelledby="faq">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">FAQ</p>
            <h2 id="faq" className="mt-2 text-3xl font-bold md:text-4xl">
              Common questions from operators
            </h2>
          </div>

          <div
            className="rounded-2xl border border-border p-2 md:p-4"
            style={{ background: "var(--gradient-card)" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border px-4">
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline md:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24" aria-labelledby="cta">
          <div
            className="relative overflow-hidden rounded-3xl border border-border p-10 text-center md:p-16"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div
              className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 opacity-50 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <h2
              id="cta"
              className="relative text-3xl font-bold tracking-tight md:text-5xl"
            >
              Ready to turn player engagement into a platform layer?
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Gamifly helps operators build missions, campaigns, badges, tournaments, rewards, and
              personalized journeys into their casino and sportsbook experience.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="border-0 text-primary-foreground shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-brand)" }}
              >
                <a href="/contact">Book a Demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-card/40 backdrop-blur">
                <a href="/features">Explore Gamifly Features</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
