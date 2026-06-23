import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    title: "Matchday Missions",
    goal: "Drive engagement and entertainment around a specific marquee event (e.g., Champions League Final).",
    mechanic: "Complete 3 bets on the highlighted match to earn a badge.",
    action: "Place a pre-match bet, a live bet, and a bet builder on the specific match (minimum odds apply).",
    reward: "Exclusive Matchday Badge and a Free Bet.",
    kpi: "Event Turnover, Mission Opt-in Rate.",
  },
  {
    title: "Accumulator Challenges",
    goal: "Increase accumulator (parlay) participation for higher margin entertainment.",
    mechanic: "The Weekend Acca Builder.",
    action: "Place a 4-leg accumulator on weekend football matches.",
    reward: "Profit boost token for the next accumulator.",
    kpi: "Accumulator Bet Count, Margin per User.",
  },
  {
    title: "Live Betting Missions",
    goal: "Increase in-play engagement and session duration.",
    mechanic: "In-Play Explorer.",
    action: "Place 3 live bets during the second half of a designated fixture.",
    reward: "Virtual Coins for the Reward Shop.",
    kpi: "Live Betting Turnover, In-Play Active Users.",
  },
  {
    title: "Sport-Specific Challenges",
    goal: "Cross-sell users to different sports or leagues.",
    mechanic: "The Tennis Grand Slam Journey.",
    action: "Place a qualifying bet on 5 different matches during Wimbledon.",
    reward: "Tennis Expert Badge and a sports bonus.",
    kpi: "Cross-Sport Activity Rate, Event Specific GGR.",
  },
  {
    title: "Prediction Streaks",
    goal: "Build daily/weekly habit-forming entertainment without requiring high spend.",
    mechanic: "Free-to-play Prediction Streak.",
    action: "Correctly predict the first goalscorer in the weekend's top match for 3 weeks in a row.",
    reward: "Scaling rewards (Week 1: Coins, Week 3: VIP Sports Package).",
    kpi: "Weekly Return Rate (D7 Retention), Opt-in Rate.",
  },
  {
    title: "Tournament Leaderboards",
    goal: "Foster community competition based on skill or activity.",
    mechanic: "Highest Winning Odds Leaderboard.",
    action: "Place winning bets. The player with the highest winning odds ticket of the week climbs the leaderboard.",
    reward: "Share of a weekly prize pool.",
    kpi: "Leaderboard Page Views, Average Bet Odds.",
  },
  {
    title: "Bet Builder Challenges",
    goal: "Educate players on high-entertainment bet builder features.",
    mechanic: "The Bet Builder Master.",
    action: "Create and place a custom bet builder with at least 3 selections.",
    reward: "Bet Builder Master Badge.",
    kpi: "Bet Builder Usage Rate, Feature Adoption.",
  },
  {
    title: "Weekend Football Campaigns",
    goal: "Maximize activity during peak traffic windows.",
    mechanic: "Super Saturday Quest.",
    action: "Log in on Saturday and complete a 2-step mission across top European leagues.",
    reward: "Sunday Free Bet.",
    kpi: "Weekend Active Users, Saturday to Sunday Retention.",
  },
  {
    title: "Re-activation Missions",
    goal: "Re-engage dormant players before major sporting events.",
    mechanic: "Welcome Back: World Cup Edition.",
    action: "Log in during the group stages to claim a mystery box.",
    reward: "Randomized reward (Free Bet, Coins, or Profit Boost).",
    kpi: "Reactivation Rate, Post-Event Retention.",
  },
  {
    title: "Odds Boost Missions",
    goal: "Incentivize exploration of promotional markets.",
    mechanic: "Boost Hunter.",
    action: "Place a bet on 3 different 'Daily Boosted Odds' markets.",
    reward: "Gamifly Coins.",
    kpi: "Boosted Market Turnover.",
  },
];

const faqs = [
  {
    q: "How does real-time gamification work for sportsbooks?",
    a: "Sportsbook events (like cashouts, partial settlements, and in-play bets) require extremely low-latency processing. Gamifly integrates with your bet slip or PAM via Kafka or webhooks to instantly process bet placement and settlement events, updating progress bars in real-time.",
  },
  {
    q: "Can we restrict missions to certain odds or markets?",
    a: "Yes. Eligibility rules are critical for sportsbooks. You can configure missions to only accept bets with minimum odds (e.g., 1.50+), specific bet types (pre-match only), or exclude cashed-out bets from counting towards mission progress.",
  },
  {
    q: "Is gamification safe for responsible gaming?",
    a: "Yes, when implemented correctly. Gamifly provides jurisdiction-aware controls, allowing operators to cap campaign participation, exclude vulnerable segments, and respect responsible campaign limits to ensure entertainment remains safe.",
  },
  {
    q: "Can sports and casino gamification run simultaneously?",
    a: "Absolutely. With Gamifly, operators can run cross-vertical missions (e.g., 'Place a bet on the NBA and spin 10 times on a slot') using a unified player profile and reward wallet.",
  },
];

export const Route = createFileRoute("/resources/sportsbook-gamification-use-cases")({
  head: () => ({
    meta: [
      { title: "Sportsbook Gamification Use Cases for Betting Operators" },
      {
        name: "description",
        content:
          "Discover practical sportsbook gamification use cases. Learn how operators use missions, accumulators, and leaderboards to drive engagement and entertainment safely.",
      },
      { property: "og:title", content: "Sportsbook Gamification Use Cases for Betting Operators" },
      {
        property: "og:description",
        content:
          "Discover practical sportsbook gamification use cases. Learn how operators use missions, accumulators, and leaderboards to drive engagement and entertainment safely.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://gamifly.net/resources/sportsbook-gamification-use-cases" },
    ],
    links: [{ rel: "canonical", href: "https://gamifly.net/resources/sportsbook-gamification-use-cases" }],
    scripts: [
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
  component: SportsbookUseCasesPage,
});

function SportsbookUseCasesPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <header
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.7_0.2_265/0.3)_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="container relative mx-auto max-w-4xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Operator Playbook
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            10 Sportsbook Gamification Use Cases for Operators
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            A practical guide to implementing missions, tournaments, and streaks to drive engagement, entertainment, and safe retention in your sportsbook.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6">
        {/* Short AEO Answer */}
        <section
          className="relative z-10 -mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8"
          style={{ background: "var(--gradient-card)" }}
          aria-label="How can sportsbook operators use gamification?"
        >
          <h2 className="text-xl font-bold text-foreground">
            How can sportsbook operators use gamification?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            Sportsbook operators use gamification to add a layer of structured entertainment over traditional betting markets. By offering real-time missions, free-to-play prediction streaks, and accumulator challenges, operators can guide players toward new sports or bet types (like live betting or bet builders). This shifts the player experience from purely transactional wagers to an engaging, rewarding journey, improving retention and session frequency safely.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Key Takeaways</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Gamification drives adoption of high-margin products like bet builders and accumulators.",
              "Live betting missions increase in-play engagement and session duration.",
              "Free-to-play streaks are excellent for building daily retention safely.",
              "Gamifly handles the complex, low-latency event processing required for sportsbooks.",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 text-base text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why Sportsbook Gamification Matters */}
        <section className="py-12 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight">Why Sportsbook Gamification Matters</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Unlike casino games, sports betting is inherently tied to external, real-world events. Players often place a bet and close the app until the match is over. Gamification provides operators with tools to keep players engaged within the app before, during, and after the match. By introducing leaderboards, badges, and interactive missions, operators can increase entertainment value, encourage exploration of new betting markets, and build brand loyalty in a highly commoditized market.
          </p>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight mb-8">10 Practical Sportsbook Gamification Use Cases</h2>
          <div className="grid gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border p-6 md:p-8"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold">{uc.title}</h3>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-sm mt-6">
                  <div className="lg:col-span-1">
                    <span className="block font-semibold text-primary mb-1">Goal</span>
                    <span className="text-muted-foreground leading-relaxed">{uc.goal}</span>
                  </div>
                  <div className="lg:col-span-1">
                    <span className="block font-semibold text-primary mb-1">Example Mechanic</span>
                    <span className="text-muted-foreground leading-relaxed">{uc.mechanic}</span>
                  </div>
                  <div className="lg:col-span-1">
                    <span className="block font-semibold text-primary mb-1">Player Action</span>
                    <span className="text-muted-foreground leading-relaxed">{uc.action}</span>
                  </div>
                  <div className="lg:col-span-1">
                    <span className="block font-semibold text-primary mb-1">Reward Type</span>
                    <span className="text-muted-foreground leading-relaxed">{uc.reward}</span>
                  </div>
                  <div className="lg:col-span-1">
                    <span className="block font-semibold text-primary mb-1">KPI to Measure</span>
                    <span className="text-muted-foreground leading-relaxed font-mono text-xs bg-muted/50 p-1 rounded">{uc.kpi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Example Campaign Table */}
        <section className="py-16 border-t border-border">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Example: A Marquee Matchday Campaign</h2>
          <p className="mb-8 text-muted-foreground">How multiple gamification mechanics combine for a major sporting event.</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="p-4 font-semibold text-muted-foreground">Timing</th>
                  <th className="p-4 font-semibold text-foreground">Mission Trigger</th>
                  <th className="p-4 font-semibold text-foreground">Eligibility Rules</th>
                  <th className="p-4 font-semibold text-foreground">Operator Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium">Pre-Match (Friday)</td>
                  <td className="p-4 text-muted-foreground">Place a Bet Builder on the upcoming match.</td>
                  <td className="p-4 text-muted-foreground">Min odds 2.0, pre-match only.</td>
                  <td className="p-4 text-emerald-500 font-medium">Early liquidity & engagement</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Matchday (Saturday)</td>
                  <td className="p-4 text-muted-foreground">Free-to-play Prediction: Guess the first goalscorer.</td>
                  <td className="p-4 text-muted-foreground">Open to all active accounts.</td>
                  <td className="p-4 text-emerald-500 font-medium">Drives app logins before kickoff</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">In-Play (Saturday)</td>
                  <td className="p-4 text-muted-foreground">Place a Live Bet during the second half.</td>
                  <td className="p-4 text-muted-foreground">Min odds 1.50, live markets only.</td>
                  <td className="p-4 text-emerald-500 font-medium">Increases session duration</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Post-Match (Sunday)</td>
                  <td className="p-4 text-muted-foreground">Reward issued for completing all 3 steps.</td>
                  <td className="p-4 text-muted-foreground">Must complete all prior missions.</td>
                  <td className="p-4 text-emerald-500 font-medium">Retention for Sunday matches</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How Gamifly Supports */}
        <section className="py-12 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight">How Gamifly Supports Sportsbook Gamification</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Gamifly is engineered for the complex data demands of sportsbooks. It natively supports eligibility rules like minimum odds, bet types (single, accumulator, bet builder), and market states (pre-match vs. live). Connecting via fast event streams (Kafka/Webhooks), Gamifly processes bet placements, cashouts, and settlements in real-time, instantly updating player progress bars and leaderboards without manual CRM intervention.
          </p>
        </section>

        {/* KPIs to Track */}
        <section className="py-12 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight">KPIs Sportsbook Operators Should Track</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Bet Builder Adoption Rate",
              "In-Play Turnover Growth",
              "D7 and D30 Retention Uplift",
              "Mission Opt-in Rate",
              "Cross-Sport Bet Ratio",
              "Accumulator Margin Lift",
            ].map((kpi, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground items-center rounded-lg border border-border p-4 bg-background">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="font-medium text-foreground">{kpi}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Responsible Gaming */}
        <section className="py-12 border-t border-border">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-6 w-6 text-destructive" />
              <h2 className="text-xl font-bold text-foreground">Responsible Campaign Limits & Compliance</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sportsbook gamification must prioritize entertainment and safety. Gamifly provides robust, jurisdiction-aware controls. Operators can enforce responsible campaign limits, exclude vulnerable players from marketing segments automatically, and ensure that missions promote varied, recreational play rather than encouraging chasing losses. Eligibility rules are strictly enforced to align with local regulatory frameworks.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border p-6"
                style={{ background: "var(--gradient-card)" }}
              >
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Resources / Internal Links */}
        <section className="py-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Explore Further</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/resources/$slug"
              params={{ slug: "igaming-gamification-examples" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">iGaming Gamification Examples</h3>
              <p className="mt-1 text-sm text-muted-foreground">Deep dive into real-world mission and tournament designs.</p>
            </Link>
            <Link
              to="/resources/$slug"
              params={{ slug: "gamification-kpis-for-operators" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Gamification KPIs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Learn how to measure the ROI of your gamification strategy.</p>
            </Link>
            <Link
              to="/resources/$slug"
              params={{ slug: "gamification-integration-checklist" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Gamification Integration Checklist</h3>
              <p className="mt-1 text-sm text-muted-foreground">The technical and product requirements for launching.</p>
            </Link>
            <Link
              to="/features"
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Gamifly Features</h3>
              <p className="mt-1 text-sm text-muted-foreground">Explore our API-first gamification engine capabilities.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div
            className="relative overflow-hidden rounded-3xl border border-border p-10 text-center md:p-14"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div
              className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 opacity-50 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <h2 className="relative text-3xl font-bold tracking-tight md:text-4xl">
              Ready to gamify your sportsbook?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              See how Gamifly allows operators to deploy complex sports betting missions, live leaderboards, and safe engagement campaigns in minutes.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="border-0 text-primary-foreground shadow-[var(--shadow-glow)] px-8"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Link to="/contact">Book a Technical Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-card/40 backdrop-blur px-8">
                <Link to="/features">View Gamifly Features</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
