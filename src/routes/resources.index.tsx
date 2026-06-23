import { useState } from "react";
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
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "What is iGaming gamification?",
    a: "iGaming gamification is the use of missions, campaigns, badges, tournaments, leaderboards, levels, rewards, progress mechanics, and personalized journeys inside casino and sportsbook platforms to increase player engagement, activity, retention, and lifetime value.",
  },
  {
    q: "Why do iGaming operators need gamification?",
    a: "iGaming operators use gamification to increase session frequency, retention, product differentiation, cross-product activity, and player lifetime value (LTV) while reducing marketing bonus dependency and player acquisition costs.",
  },
  {
    q: "How does gamification improve player retention?",
    a: "Gamification builds structural retention loops. Daily missions, progression levels, tournament cycles, and personalized streaks give players clear, rewarding goals to return tomorrow, improving 7-day, 30-day, and 90-day retention cohorts.",
  },
  {
    q: "Can gamification work for both casino and sportsbook?",
    a: "Yes. Gamification is vertical-agnostic. For casinos, it powers slots challenges and live-dealer tournaments. For sportsbooks, it powers bet-builder missions, live-betting streaks, and multi-sport leaderboard campaigns.",
  },
  {
    q: "How does Gamifly help operators?",
    a: "Gamifly is an AI-powered gamification engine that connects to casino and sportsbook platforms via API/SDK. It enables product, CRM, and marketing teams to configure and launch real-time missions, campaigns, tournaments, badges, and loyalty shops from a single dashboard without development overhead.",
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
    slug: "what-is-igaming-gamification",
    tag: "iGaming Gamification",
    title: "What is iGaming Gamification?",
    desc: "A complete primer on gamification for casino and sportsbook operators — mechanics, business case, and platform layer.",
  },
  {
    slug: "what-is-player-retention-in-igaming",
    tag: "Player Retention",
    title: "What is Player Retention in iGaming?",
    desc: "How operators measure retention, why churn happens, and where gamification moves the curve.",
  },
  {
    slug: "igaming-gamification-examples",
    tag: "Examples",
    title: "iGaming Gamification Examples",
    desc: "Real-world mission, tournament, and badge designs used by leading casino and sportsbook brands.",
  },
  {
    slug: "gamification-kpis-for-operators",
    tag: "KPIs",
    title: "Gamification KPIs for Operators",
    desc: "The metrics that matter: activity rate, retention uplift, mission completion, and revenue per active player.",
  },
  {
    slug: "igaming-retention-strategy",
    tag: "Strategy",
    title: "iGaming Retention Strategy",
    desc: "A practical playbook for building a retention layer with missions, campaigns, and AI personalization.",
  },
  {
    slug: "gamification-integration-checklist",
    tag: "Integration",
    title: "Gamification Integration Checklist",
    desc: "Everything technical and product teams need before, during, and after launching a gamification platform.",
  },
];

const startHere = [
  {
    icon: BookOpen,
    slug: "what-is-igaming-gamification",
    title: "What is iGaming Gamification?",
    desc: "Start with the fundamentals — what gamification actually means in iGaming and why it's now a platform layer.",
  },
  {
    icon: Rocket,
    slug: "what-is-player-retention-in-igaming",
    title: "How to Increase Player Retention in iGaming",
    desc: "A strategic walkthrough of the mechanics that move 7, 30, and 90-day retention for casino and sportsbook.",
  },
  {
    icon: CheckCircle2,
    slug: "gamification-integration-checklist",
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

function ROICalculator() {
  const [mau, setMau] = useState(50000);
  const [arpu, setArpu] = useState(100);
  const [bonusRatio, setBonusRatio] = useState(25);
  const [retention, setRetention] = useState(15);

  // Calculations
  const ggr = mau * arpu;
  const bonusSpend = ggr * (bonusRatio / 100);
  
  // Assume relative 25% retention improvement (from e.g. 15% to 18.75%)
  // Extra GGR retention lift assumes 40% of retained users deposit extra ARPU
  const projectedGgrLift = ggr * ((retention * 0.25) / 100) * 0.40;
  
  // 15% reduction in direct bonus cost by swapping push bonuses with quest rewards
  const savedBonusCost = bonusSpend * 0.15;
  
  const totalAnnualValue = (projectedGgrLift + savedBonusCost) * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-20 border-y border-border" aria-labelledby="roi-calc-title">
      <div className="mb-12 text-center md:text-left">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">Interactive Tool</p>
        <h2 id="roi-calc-title" className="mt-2 text-3xl font-bold md:text-4xl">
          iGaming Gamification ROI Calculator
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Estimate the annual revenue lift and bonus margin savings you can unlock by replacing generic player bonuses with Gamifly's gamified retention loops.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Sliders */}
        <div className="lg:col-span-7 space-y-6 rounded-2xl border border-border p-6 md:p-8 bg-card/40 backdrop-blur">
          <h3 className="text-lg font-semibold text-foreground border-b border-border pb-3">Input Operator Metrics</h3>
          
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="mau-input" className="text-sm font-medium text-muted-foreground">Monthly Active Users (MAU)</label>
              <span className="text-sm font-semibold text-foreground">{mau.toLocaleString()}</span>
            </div>
            <input
              id="mau-input"
              type="range"
              min="5000"
              max="500000"
              step="5000"
              value={mau}
              onChange={(e) => setMau(Number(e.target.value))}
              className="w-full accent-primary bg-muted rounded-lg h-2 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="arpu-input" className="text-sm font-medium text-muted-foreground">Average Monthly Deposit (ARPU)</label>
              <span className="text-sm font-semibold text-foreground">{formatCurrency(arpu)}</span>
            </div>
            <input
              id="arpu-input"
              type="range"
              min="10"
              max="1000"
              step="10"
              value={arpu}
              onChange={(e) => setArpu(Number(e.target.value))}
              className="w-full accent-primary bg-muted rounded-lg h-2 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="bonus-ratio-input" className="text-sm font-medium text-muted-foreground">Current Monthly Bonus/GGR Ratio</label>
              <span className="text-sm font-semibold text-foreground">{bonusRatio}%</span>
            </div>
            <input
              id="bonus-ratio-input"
              type="range"
              min="5"
              max="50"
              step="1"
              value={bonusRatio}
              onChange={(e) => setBonusRatio(Number(e.target.value))}
              className="w-full accent-primary bg-muted rounded-lg h-2 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="retention-input" className="text-sm font-medium text-muted-foreground">Current 30-Day Player Retention</label>
              <span className="text-sm font-semibold text-foreground">{retention}%</span>
            </div>
            <input
              id="retention-input"
              type="range"
              min="5"
              max="40"
              step="1"
              value={retention}
              onChange={(e) => setRetention(Number(e.target.value))}
              className="w-full accent-primary bg-muted rounded-lg h-2 cursor-pointer"
            />
          </div>
        </div>

        {/* Results Card */}
        <div 
          className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-border p-6 md:p-8 relative overflow-hidden"
          style={{ background: "var(--gradient-card)" }}
        >
          {/* subtle ambient glow */}
          <div 
            className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "var(--gradient-brand)" }}
          />

          <div className="relative">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-3">Projected Annual Yield</h3>
            
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-sm text-muted-foreground">Annual Bonus Waste Saved</span>
                <span className="text-base font-semibold text-emerald-400">+{formatCurrency(savedBonusCost * 12)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-sm text-muted-foreground">Annual Retention Revenue Uplift</span>
                <span className="text-base font-semibold text-emerald-400">+{formatCurrency(projectedGgrLift * 12)}</span>
              </div>
            </div>

            <div className="mt-8 text-center bg-background/50 rounded-xl p-4 border border-border/50">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Total Growth Potential</span>
              <p 
                className="text-3xl md:text-4xl font-extrabold mt-2 bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                {formatCurrency(totalAnnualValue)}
              </p>
            </div>
          </div>

          <div className="mt-8 relative z-10">
            <Button
              asChild
              className="w-full border-0 text-primary-foreground shadow-[var(--shadow-glow)] py-6 text-sm font-semibold rounded-xl"
              style={{ background: "var(--gradient-brand)" }}
            >
              <a href={`/contact?source=roi-calc&value=${Math.round(totalAnnualValue)}`}>
                Claim Your Custom {formatCurrency(totalAnnualValue)} Blueprint
              </a>
            </Button>
            <p className="text-[10px] text-muted-foreground text-center mt-3">
              Calculations based on standard European and LatAm iGaming operator performance data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
                key={item.slug}
                to="/resources/$slug"
                params={{ slug: item.slug }}
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
                key={item.slug}
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
                    <Link to="/resources/$slug" params={{ slug: item.slug }}>
                      Read more
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ROICalculator />

        {/* Quick Answers for Operators — static HTML for SEO / AEO / GEO / LLM crawlers */}
        <section className="py-20" aria-labelledby="quick-answers">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Quick Answers
            </p>
            <h2 id="quick-answers" className="mt-2 text-3xl font-bold md:text-4xl">
              Quick answers for operators
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-lg font-semibold">What is iGaming gamification?</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                iGaming gamification is the application of game-design mechanics — missions, badges,
                tournaments, leaderboards, levels, and rewards — inside casino and sportsbook
                products. It transforms the player experience from a purely transactional interface
                into a structured, habit-forming progression system that drives activity, retention,
                and lifetime value for operators.
              </p>
            </div>

            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-lg font-semibold">Why do iGaming operators need gamification?</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Player acquisition costs keep rising while product differentiation between operators
                shrinks. Gamification gives operators a structural way to increase session frequency,
                deposit cadence, cross-product play, and retention — without relying solely on
                margin-destroying bonuses or free bets. It makes the product itself stickier.
              </p>
            </div>

            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-lg font-semibold">How does gamification improve player retention?</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Missions and progression systems give players a reason to return tomorrow, not just
                today. Personalized journeys, streaks, badges, and tournament cycles create short,
                medium, and long-term goals that compound into measurably higher 7-day, 30-day, and
                90-day retention cohorts for casino and sportsbook operators.
              </p>
            </div>

            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-lg font-semibold">Can gamification work for both casino and sportsbook?</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Yes. The mechanics adapt to the vertical — slots missions, table-game challenges, and
                live-casino tournaments on the casino side; bet-builder missions, multi-sport
                challenges, and in-play tournaments on the sportsbook side — all running on the same
                engine, the same player profile, and the same reward wallet.
              </p>
            </div>

            <div
              className="rounded-2xl border border-border p-6 md:col-span-2 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-lg font-semibold">How does Gamifly help operators?</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Gamifly is a gamification platform built specifically for iGaming operators. It
                connects via API/SDK to the operator's wallet, player account, and game/bet event
                streams. Operators can design and launch missions, campaigns, badges, tournaments,
                reward shops, and AI-personalized player journeys from a single console — without
                engineering tickets. Integration is designed to be incremental: start with a simple
                mission engine, then layer in tournaments, shops, and AI personalization over time.
              </p>
            </div>
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

          <div className="space-y-6">
            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-base font-semibold md:text-lg">Will integrating Gamifly disrupt or add latency to our existing PAM and wallet system?</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Zero disruption. Gamifly operates as a completely non-custodial engagement layer. It consumes event payloads asynchronously (via Kafka or OpenAPI Webhooks) and never writes to or locking-reads your wallet database. Balances and funds remain 100% under your control, ensuring zero impact on transaction latency or financial integrity.
              </p>
            </div>

            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-base font-semibold md:text-lg">We cannot afford a 6-month development project. What is the real-world integration timeline?</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                14 to 21 days with a single engineer. Because Gamifly is API-first, you only need to point your existing transaction event streams to our gateway. Our pre-built lobby widgets are copy-paste SDK scripts, requiring no custom frontend rendering or game logic rewrites.
              </p>
            </div>

            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-base font-semibold md:text-lg">How does the platform ensure compliance in strictly regulated jurisdictions (e.g. UKGC, MGA, DGOJ)?</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Compliance is handled via jurisdiction-aware configuration profiles. Our dashboard lets compliance teams toggle mechanics (like prize wheels, progression loot boxes, or live rankings) dynamically per user country. All transaction logs and rewards are fully traceable and cryptographically audited, keeping you 100% compliant.
              </p>
            </div>

            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-base font-semibold md:text-lg">Can Gamifly handle high-volume traffic spike loads during major sporting events?</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Easily. Our engine scales horizontally using a cloud-native, distributed event broker system (Kafka) capable of processing over 50,000 game-bet events per second. Live leaderboard rankings and player milestone triggers hydrate under 100ms, ensuring your platform's lobby remains ultra-responsive even during World Cup finals.
              </p>
            </div>
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
              Stop Burning Margin on Bonuses. Make Your lobby Sticky.
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Stop letting player acquisition leak through immediate churn. Integrate Gamifly's API-first gamification engine in weeks to build habit-forming loyalty loops players won't abandon — without engineering overhead.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="border-0 text-primary-foreground shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-brand)" }}
              >
                <a href="/contact">Book Retention Audit & Demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-card/40 backdrop-blur">
                <a href="/features">Explore Features</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
