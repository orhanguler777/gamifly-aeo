import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  Trophy,
  Sparkles,
  Layers,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  Plug,
  LayoutDashboard,
  Gift,
  Swords,
  Medal,
  Bot,
  Workflow,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const highlights = [
  {
    icon: Target,
    title: "Auto-Triggered Quests",
    desc: "Deploy hands-free player missions triggered instantly by real-time events. No manual tracking, no campaign scheduling — completely autonomous onboarding.",
  },
  {
    icon: Trophy,
    title: "Self-Running Tournaments",
    desc: "Run recurring tournament brackets automatically. The system handles opt-in, live scoring updates, and reward payouts without CRM operator intervention.",
  },
  {
    icon: Medal,
    title: "Autonomous Progression",
    desc: "A hands-off loyalty layer that manages XP, levels, and tier changes in the background, keeping VIP players engaged on autopilot.",
  },
  {
    icon: Gift,
    title: "Self-Service Reward Store",
    desc: "Let players redeem points for bonuses on demand, cutting manual bonus crediting down to zero. Full ledger automation.",
  },
  {
    icon: Bot,
    title: "Zero-Management AI Tailoring",
    desc: "Our machine learning engine clusters player habits, auto-assigning targeted quests and optimal rewards individually in real time.",
  },
  {
    icon: Workflow,
    title: "Set-and-Forget Campaigns",
    desc: "Design retention streams once. The engine schedules, runs, and A/B tests campaigns in the background with zero daily CRM workload.",
  },
  {
    icon: Swords,
    title: "Unified Cross-Vertical Engine",
    desc: "Instantly link slots, live tables, and bet builders under one profile and balance, driving cross-play with zero silo management.",
  },
  {
    icon: LineChart,
    title: "Self-Auditing Yield Dashboard",
    desc: "Access real-time GGR, deposit cadence, and retention reports. Automatically measures and prints gamification yield on demand.",
  },
];

const deepDives = [
  {
    icon: Target,
    label: "ZERO-MANAGEMENT MISSIONS",
    title: "Auto-assigned player quests with zero operational overhead",
    points: [
      "Set once, run forever: quests are auto-triggered based on direct player activity streams",
      "Real-time, hands-free progress updates rendered natively inside player lobby",
      "Automatic reward fulfillment — bonuses, free spins, and loyalty tokens credit instantly",
      "Zero-configuration onboarding sequences that engage signups without manual CRM steps",
      "Dynamic automated difficulty scaling that adapts to player skill and stake size",
    ],
    image: null,
  },
  {
    icon: Trophy,
    label: "SELF-RUNNING COMPETITIONS",
    title: "Automated leaderboard cycles that run without manual updates",
    points: [
      "Self-generating daily, weekly, and event-based tournament brackets",
      "Autonomous leaderboards ranking players by wager, wins, or multipliers in real time",
      "Hands-free prize distribution: systems split pools and pay top players instantly",
      "Programmatic segment enrollment based on VIP level, registration date, or vertical affinity",
      "Automated player notifications detailing rank updates to drive urgency on autopilot",
    ],
    image: null,
  },
  {
    icon: Bot,
    label: "HANDS-FREE OPTIMIZATION",
    title: "The engine does the thinking, your team gets the margin",
    points: [
      "Continuous machine learning models cluster player habits and predict churn indicators",
      "Algorithmic quest matching that auto-pairs the best margin mission to the right player",
      "Automated responsible gaming alerts and cohort limits applied programmatically",
      "Autonomous margin protection — rewards scale down for high-value segments automatically",
      "No-touch A/B testing: system automatically shifts traffic to highest converting flows",
    ],
    image: null,
  },
];

const integrationSteps = [
  {
    step: "01",
    title: "Connect Event Broker",
    desc: "Plug your transactional event stream (Kafka or OpenAPI Webhooks) into our gateway. Simple payload structure.",
  },
  {
    step: "02",
    title: "Set-and-Forget Rules",
    desc: "Define your global retention rules and reward triggers once. The engine handles execution autonomously.",
  },
  {
    step: "03",
    title: "Auto-Deploy Widgets",
    desc: "Drop our pre-built SDK widget into your front-end lobby. It renders and scales natively without custom coding.",
  },
  {
    step: "04",
    title: "Scale Autonomously",
    desc: "Our AI continuously optimizes campaign triggers, delivering consistent retention yield with zero ongoing maintenance.",
  },
];

const caseStudies = [
  {
    metric: "+28%",
    label: "30-Day Retention Uplift",
    operatorType: "Tier-1 European Sportsbook",
    headline: "How a Tier-1 European Sportsbook Achieved a +28% Uplift in 30-Day Player Retention",
    challenge: "High player acquisition costs (CAC) paired with rapid churn immediately following signup promotions.",
    solution: "Integrated Gamifly to launch personalized 'Weekly Bet Tournaments' and 'Live Bet Builder Missions' that reward engagement over transaction.",
    result: "Achieved a +28% lift in 30-day retention cohorts and a +19% increase in average weekly session frequency."
  },
  {
    metric: "+40%",
    label: "Higher Quest Completion",
    operatorType: "Fast-Growing LatAm Casino",
    headline: "How a Fast-Growing LatAm Casino Brand Generated 40% Higher Quest Completion & +15% ARPU",
    challenge: "Stagnant player lifetime value (LTV) and low cross-product migration from classic slots to live dealer tables.",
    solution: "Deployed unified 'Live Casino Quests' and an automated Rewards Shop where points earned on slots could be redeemed for live casino chips.",
    result: "Drove 40% higher quest completion rates, alongside a +15% increase in Average Revenue Per User (ARPU)."
  },
  {
    metric: "-22%",
    label: "Reduction in Player Churn",
    operatorType: "Multi-Brand Operator Group",
    headline: "How a Multi-Brand Operator Group Reduced Player Churn by 22% via AI-Driven Journeys",
    challenge: "High VIP segment churn rates and manual CRM marketing scheduling overhead.",
    solution: "Used Gamifly's AI Personalization engine to automatically trigger real-time, behavior-based recovery campaigns and retention streaks.",
    result: "Reduced player churn by 22% within 60 days, yielding a 3.5× increase in campaign conversion efficiency."
  }
];

/* ------------------------------------------------------------------ */
/*  Route                                                             */
/* ------------------------------------------------------------------ */

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Gamifly Features | Gamification Engine for iGaming Operators" },
      {
        name: "description",
        content:
          "Explore Gamifly's gamification platform: missions, tournaments, badges, AI personalization, campaign automation, and real-time analytics for casino and sportsbook operators.",
      },
      {
        property: "og:title",
        content: "Gamifly Features | Gamification Engine for iGaming Operators",
      },
      {
        property: "og:description",
        content:
          "Explore Gamifly's gamification platform: missions, tournaments, badges, AI personalization, campaign automation, and real-time analytics for casino and sportsbook operators.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Gamifly Features",
          description:
            "Full feature overview of Gamifly's gamification engine for iGaming operators.",
          url: "/features",
        }),
      },
    ],
  }),
  component: FeaturesPage,
});

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

function FeaturesPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      {/* ─── Hero ─── */}
      <header
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* dot grid */}
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.7_0.2_265/0.3)_1px,transparent_0)] [background-size:32px_32px]" />

        {/* floating glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[140%] -translate-x-1/2 opacity-40 blur-3xl"
          style={{ background: "var(--gradient-brand)" }}
        />

        <div className="container relative mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Layers className="h-3.5 w-3.5 text-primary" />
            Platform Features
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Everything operators need
            </span>{" "}
            to gamify the player experience
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Missions, tournaments, badges, rewards, AI personalization, and
            campaign automation — built for casino and sportsbook platforms from
            day one.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="border-0 text-primary-foreground shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-brand)" }}
            >
              <a href="/contact">Book a Demo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/40 backdrop-blur">
              <Link to="/resources">Read the Guides</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6">
        {/* ─── Feature Grid ─── */}
        <section className="py-24" aria-labelledby="features-grid">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Core Capabilities
            </p>
            <h2 id="features-grid" className="mt-2 text-3xl font-bold md:text-4xl">
              A complete gamification stack
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every component an operator needs — from mission design to AI-driven
              player journeys — unified in one platform.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-card)" }}
              >
                {/* subtle hover glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-30"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div
                  className="relative mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="relative text-lg font-semibold">{f.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Deep Dives ─── */}
        <section className="pb-24" aria-labelledby="deep-dives">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Deep Dive
            </p>
            <h2 id="deep-dives" className="mt-2 text-3xl font-bold md:text-4xl">
              Built for operators, powered by data
            </h2>
          </div>

          <div className="space-y-10">
            {deepDives.map((dd, idx) => (
              <div
                key={dd.title}
                className="overflow-hidden rounded-3xl border border-border"
                style={{ background: "var(--gradient-card)" }}
              >
                <div
                  className={`flex flex-col gap-8 p-8 md:p-12 ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* text */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <dd.icon className="h-3.5 w-3.5" />
                      {dd.label}
                    </div>
                    <h3 className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">
                      {dd.title}
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {dd.points.map((p) => (
                        <li key={p} className="flex gap-3 text-base text-foreground/85">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* visual placeholder */}
                  <div className="flex flex-1 items-center justify-center">
                    <div
                      className="flex h-56 w-full items-center justify-center rounded-2xl border border-border/50 md:h-72"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, oklch(0.3 0.12 280 / 0.4), transparent 70%)",
                      }}
                    >
                      <dd.icon className="h-16 w-16 text-primary/30" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── What is Gamifly — static HTML for AEO / SEO / LLM crawlers ─── */}
        <section className="pb-24" aria-labelledby="what-is-gamifly">
          <div
            className="overflow-hidden rounded-3xl border border-border p-10 md:p-16"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                About
              </p>
              <h2 id="what-is-gamifly" className="mt-2 text-3xl font-bold md:text-4xl">
                What is Gamifly?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/85 md:text-lg">
                Gamifly is an AI-powered gamification and engagement engine for iGaming operators.
                It helps casino and sportsbook platforms increase player retention, activity, and
                lifetime value through missions, campaigns, badges, tournaments, rewards, AI
                personalization, and campaign automation.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Example KPIs ─── */}
        <section className="pb-24" aria-labelledby="example-kpis">
          <div
            className="overflow-hidden rounded-3xl border border-border p-10 md:p-16"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Measurable Impact
              </p>
              <h2 id="example-kpis" className="mt-2 text-3xl font-bold md:text-4xl">
                Example KPIs operators can measure after integrating Gamifly
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/85 md:text-lg">
                Operators can track session frequency, 30-day retention, deposit activity, mission
                completion rate, reward usage, campaign conversion, and revenue per active player to
                measure the impact of gamification across casino and sportsbook verticals.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Session frequency",
                  "30-day retention",
                  "Deposit activity",
                  "Mission completion rate",
                  "Reward usage & redemption",
                  "Campaign conversion",
                  "Revenue per active player",
                  "Cross-product play rate",
                  "Churn reduction",
                ].map((kpi) => (
                  <div
                    key={kpi}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm font-medium">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Micro-Case Studies ─── */}
        <section className="pb-24" aria-labelledby="case-studies">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Success Stories
            </p>
            <h2 id="case-studies" className="mt-2 text-3xl font-bold md:text-4xl">
              iGaming Micro-Case Studies
            </h2>
            <p className="mt-4 text-muted-foreground">
              Discover how sportsbooks and casino operators leverage Gamifly's retention engine to drive significant player engagement and lifetime value.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <div
                key={cs.headline}
                className="flex flex-col justify-between rounded-3xl border border-border p-8 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-card)" }}
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-primary">
                      {cs.metric}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {cs.label}
                    </span>
                  </div>
                  <span className="mt-4 inline-block rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {cs.operatorType}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-foreground">
                    {cs.headline}
                  </h3>
                  <div className="mt-6 space-y-4 text-sm">
                    <div>
                      <span className="font-semibold text-foreground/90 block">Challenge:</span>
                      <p className="mt-1 text-muted-foreground leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground/90 block">Solution:</span>
                      <p className="mt-1 text-muted-foreground leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <span className="font-semibold text-primary block text-xs uppercase tracking-wider">Key Result:</span>
                  <p className="mt-1.5 text-sm font-medium text-foreground leading-relaxed">
                    {cs.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Integration ─── */}
        <section className="pb-24" aria-labelledby="integration">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Integration
            </p>
            <h2 id="integration" className="mt-2 text-3xl font-bold md:text-4xl">
              Live in weeks, not months
            </h2>
            <p className="mt-4 text-muted-foreground">
              Gamifly is designed for incremental rollout. Connect your event streams,
              configure mechanics, embed widgets, and go live.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {integrationSteps.map((s) => (
              <div
                key={s.step}
                className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all hover:border-primary/50"
                style={{ background: "var(--gradient-card)" }}
              >
                <span
                  className="text-5xl font-black tracking-tighter"
                  style={{
                    backgroundImage: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 0.25,
                  }}
                >
                  {s.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Platform Pillars ─── */}
        <section className="pb-24" aria-labelledby="pillars">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Why Gamifly
            </p>
            <h2 id="pillars" className="mt-2 text-3xl font-bold md:text-4xl">
              Built different
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Multi-vertical",
                desc: "Casino, live casino, and sportsbook all share a single gamification engine and player profile. No silos.",
              },
              {
                icon: Shield,
                title: "Compliance-ready",
                desc: "Jurisdiction-aware rules engine. Mechanics adapt to regulatory requirements per market automatically.",
              },
              {
                icon: Zap,
                title: "Real-time",
                desc: "Sub-second event processing. Players see mission progress, leaderboard changes, and reward credits the moment they act.",
              },
              {
                icon: LayoutDashboard,
                title: "Operator dashboard",
                desc: "Design, schedule, and monitor every mechanic from one console. No engineering tickets required.",
              },
              {
                icon: Plug,
                title: "API-first",
                desc: "REST + WebSocket APIs with full OpenAPI spec. Integrate with any PAM, wallet, or CRM stack.",
              },
              {
                icon: TrendingUp,
                title: "Revenue-aligned",
                desc: "Every feature is designed to move operator KPIs: activity rate, retention, deposits per player, and LTV.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border p-6 transition-all hover:border-primary/50"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/60 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="pb-24" aria-labelledby="features-cta">
          <div
            className="relative overflow-hidden rounded-3xl border border-border p-10 text-center md:p-16"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div
              className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 opacity-50 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <h2
              id="features-cta"
              className="relative text-3xl font-bold tracking-tight md:text-5xl"
            >
              Stop Burning Margin on Bonuses. Make Your Lobby Sticky.
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
                <Link to="/resources">
                  Explore Resources
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
