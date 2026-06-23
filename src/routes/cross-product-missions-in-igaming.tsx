import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const missionTypes = [
  {
    title: "Sportsbook to Casino Mission",
    desc: "Targeting primarily sports bettors who rarely enter the casino lobby.",
    mechanic: "Place a pre-match accumulator on weekend football, then spin 10 times on a football-themed slot during halftime to earn a free bet.",
  },
  {
    title: "Casino to Sportsbook Mission",
    desc: "Encouraging casino-heavy players to explore high-margin sports betting.",
    mechanic: "Wager €50 on Live Roulette to unlock an exclusive €5 Free Bet for any live NBA match tonight.",
  },
  {
    title: "Weekend Multi-Vertical Challenge",
    desc: "A massive, multi-day campaign requiring engagement across the entire operator product portfolio.",
    mechanic: "The Super Weekend: Place a Bet Builder, spin 50 times on Megaways slots, and play 3 rounds of Crash games. Reward: Gold Profile Badge + Share of €10,000.",
  },
  {
    title: "New Product Discovery Mission",
    desc: "Driving traffic to a newly integrated provider or game category (e.g., Virtual Sports).",
    mechanic: "Bet €10 on Virtual Greyhounds to receive 20 Free Spins on Starburst.",
  },
  {
    title: "VIP Cross-Sell Journey",
    desc: "A personalized, high-value journey for top-tier players.",
    mechanic: "VIP Exclusive: Place a €500 bet on the Champions League Final and receive an invite to a private, high-roller Live Blackjack tournament.",
  },
  {
    title: "Re-Activation Journey",
    desc: "Re-engaging dormant users by offering low-friction entry points across verticals.",
    mechanic: "Welcome Back: Just log in (Reward 1), play 1 spin on any slot (Reward 2), and place a €1 bet on any sport (Reward 3).",
  },
  {
    title: "Seasonal Tournament Journey",
    desc: "A month-long campaign (e.g., Euro Cup or Christmas) tying casino play to sporting event outcomes.",
    mechanic: "Earn 1 leaderboard point for every €10 wagered in the casino. Points are doubled if your selected national team wins their match today.",
  },
];

const faqs = [
  {
    q: "Do cross-product missions require a unified wallet?",
    a: "Ideally, yes. Having a unified wallet where player balances are shared across casino and sportsbook makes cross-product gamification seamless. If you have separate wallets, Gamifly can still track events via your PAM, but the user experience must account for balance transfers.",
  },
  {
    q: "How does Gamifly track events across different verticals?",
    a: "Gamifly integrates directly with your central PAM or event stream (via Kafka, RabbitMQ, or webhooks). Whether a player spins a slot provided by Evolution or places a bet via Kambi, the central PAM forwards the event to Gamifly to update mission progress in real-time.",
  },
  {
    q: "Are cross-product missions compliant with local regulations?",
    a: "Compliance depends on the jurisdiction. Some markets strictly separate casino and sportsbook promotions. Gamifly allows operators to configure jurisdiction-specific eligibility rules, ensuring cross-product missions are only visible to players in permitted regions.",
  },
  {
    q: "Do players find multi-vertical missions confusing?",
    a: "They can be if designed poorly. The key is UI/UX clarity. Gamifly provides an intuitive 'Mission Hub' widget that clearly outlines step-by-step requirements and shows a live progress bar, ensuring the player always knows exactly what to do next.",
  },
];

export const Route = createFileRoute("/cross-product-missions-in-igaming")({
  head: () => ({
    meta: [
      { title: "Cross-Product Missions in iGaming: Casino and Sportsbook Examples" },
      {
        name: "description",
        content:
          "Learn how iGaming operators use cross-product gamification missions to move players between casino and sportsbook, increasing product discovery and retention.",
      },
      { property: "og:title", content: "Cross-Product Missions in iGaming: Casino and Sportsbook Examples" },
      {
        property: "og:description",
        content:
          "Learn how iGaming operators use cross-product gamification missions to move players between casino and sportsbook, increasing product discovery and retention.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://gamifly.net/cross-product-missions-in-igaming" },
    ],
    links: [{ rel: "canonical", href: "https://gamifly.net/cross-product-missions-in-igaming" }],
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
  component: CrossProductMissionsPage,
});

function CrossProductMissionsPage() {
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
            Cross-Product Missions in iGaming
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            How multi-vertical operators use gamification to bridge the gap between casino and sportsbook, increasing product discovery and player lifetime value.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6">
        {/* Short AEO Answer */}
        <section
          className="relative z-10 -mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8"
          style={{ background: "var(--gradient-card)" }}
          aria-label="What are cross-product missions in iGaming?"
        >
          <h2 className="text-xl font-bold text-foreground">
            What are cross-product missions in iGaming?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            <strong>Cross-product missions</strong> are gamified challenges that require a player to engage with multiple different verticals (e.g., sportsbook, casino, live casino, or mini-games) to unlock a single reward or badge. By structurally linking these products through a unified progression system, operators can successfully cross-sell players, increase product discovery, and activate dormant areas of their portfolio without relying solely on aggressive CRM bonus emails.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Key Takeaways</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Cross-selling increases player lifetime value (LTV) and reduces churn probability.",
              "Gamified missions feel like an achievement rather than a sales push.",
              "Operators can use high-volume sportsbook events to drive high-margin casino traffic.",
              "A unified gamification engine is required to process events from both PAMs simultaneously.",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 text-base text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why Cross-Product Missions Matter */}
        <section className="py-12 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight">Why Cross-Product Missions Matter</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            In iGaming, single-vertical players (e.g., users who exclusively bet on football or exclusively play slots) are highly prone to churn if their specific interest wanes. A player whose team gets knocked out of a tournament may simply stop logging in. 
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Data consistently shows that multi-vertical players—those who interact with both the sportsbook and the casino—have a significantly higher Lifetime Value (LTV) and much longer retention curves. Cross-product missions provide a natural, entertaining bridge to guide players across your platform ecosystem.
          </p>
        </section>

        {/* Mission Types Grid */}
        <section className="py-16 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight mb-8">7 Common Cross-Product Mission Types</h2>
          <div className="grid gap-6">
            {missionTypes.map((uc, i) => (
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
                
                <p className="text-sm font-semibold text-primary mb-2">{uc.desc}</p>
                <p className="text-muted-foreground leading-relaxed bg-muted/30 p-4 rounded-lg mt-2">
                  <span className="font-semibold text-foreground">Mechanic:</span> {uc.mechanic}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Example Campaign Table */}
        <section className="py-16 border-t border-border">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Example Strategy: The Multi-Vertical Matrix</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="p-4 font-semibold text-muted-foreground">Mission Name</th>
                  <th className="p-4 font-semibold text-foreground">Target Segment</th>
                  <th className="p-4 font-semibold text-foreground">Required Actions</th>
                  <th className="p-4 font-semibold text-foreground">Reward</th>
                  <th className="p-4 font-semibold text-foreground">KPI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium">Halftime Hero</td>
                  <td className="p-4 text-muted-foreground">Sportsbook VIPs</td>
                  <td className="p-4 text-muted-foreground">1. Place a pre-match bet.<br/>2. Play 20 spins on Casino during halftime.</td>
                  <td className="p-4 text-emerald-500 font-medium">Free Live Bet</td>
                  <td className="p-4 text-muted-foreground">Halftime Casino GGR</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">The Explorer</td>
                  <td className="p-4 text-muted-foreground">Slot-only players</td>
                  <td className="p-4 text-muted-foreground">1. Wager €10 on Slots.<br/>2. Place €5 on a Bet Builder.</td>
                  <td className="p-4 text-emerald-500 font-medium">Explorer Badge + 50 Coins</td>
                  <td className="p-4 text-muted-foreground">Sportsbook Discovery Rate</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Weekend Warrior</td>
                  <td className="p-4 text-muted-foreground">All Active Users</td>
                  <td className="p-4 text-muted-foreground">1. Live Roulette Spin.<br/>2. Crash Game Round.<br/>3. Sports Bet.</td>
                  <td className="p-4 text-emerald-500 font-medium">Multiplier Token</td>
                  <td className="p-4 text-muted-foreground">Verticals per User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Player Journey */}
        <section className="py-12 border-t border-border">
          <h2 className="text-2xl font-bold tracking-tight">The Ideal Player Journey</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            A successful cross-product mission feels natural and highly rewarding. Here is how it flows:
          </p>
          
          <div className="mt-8 rounded-2xl border border-border p-6 md:p-8 bg-card/40">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-foreground">Player places a sportsbook bet</h4>
                  <p className="text-sm text-muted-foreground mt-1">A recreational player logs in on Saturday morning and places a €20 bet on their favorite football team.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-foreground">Receives cross-sell mission</h4>
                  <p className="text-sm text-muted-foreground mt-1">Gamifly detects the bet and pops up an interactive widget: "You placed a sports bet! Now, try 10 spins on Starburst to unlock the Weekend Warrior Badge."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-foreground">Completes casino challenge</h4>
                  <p className="text-sm text-muted-foreground mt-1">While waiting for the match to start, the player navigates to the casino and completes the 10 spins. The progress bar fills to 100%.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-foreground">Joins leaderboard</h4>
                  <p className="text-sm text-muted-foreground mt-1">Completing the mission automatically enrolls the player into the "Weekend Warrior Leaderboard" against other cross-product players.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">5</div>
                <div>
                  <h4 className="font-semibold text-foreground">Personalized Reward</h4>
                  <p className="text-sm text-muted-foreground mt-1">The player receives their Badge and Gamifly Coins, which they can spend in the Reward Shop for either Free Spins or Free Bets based on their preference.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Gamifly Supports */}
        <section className="py-12 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight">How Gamifly Supports Cross-Product Missions</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Building cross-product mechanics internally is notoriously difficult because operators often use separate backend providers for Casino (e.g., EveryMatrix, Soft2Bet) and Sportsbook (e.g., Kambi, Altenar). 
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Gamifly acts as the unifying layer. By ingesting event streams from your central PAM, Gamifly maintains a single, unified player profile. Our rule engine can simultaneously listen for a "Bet Settled" event from the sportsbook provider and a "Spin Completed" event from the casino aggregator, seamlessly updating a single mission progress bar in real-time.
          </p>
        </section>

        {/* Required Integration Data & KPIs */}
        <section className="py-12 border-t border-border grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Required Integration Data</h2>
            <p className="mt-4 text-sm text-muted-foreground mb-4">To execute cross-vertical campaigns, the gamification engine needs:</p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-muted-foreground items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Unified Player ID</li>
              <li className="flex gap-3 text-sm text-muted-foreground items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Casino Spin/Wager Events</li>
              <li className="flex gap-3 text-sm text-muted-foreground items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Sportsbook Bet Placed Events</li>
              <li className="flex gap-3 text-sm text-muted-foreground items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Sportsbook Bet Settled Events</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">KPIs to Measure</h2>
            <p className="mt-4 text-sm text-muted-foreground mb-4">Track the success of cross-sell efforts using:</p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-muted-foreground items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Cross-Sell Opt-in Rate</li>
              <li className="flex gap-3 text-sm text-muted-foreground items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> Average Verticals per User</li>
              <li className="flex gap-3 text-sm text-muted-foreground items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> D30 Retention (Cross-sold vs Single)</li>
              <li className="flex gap-3 text-sm text-muted-foreground items-center"><CheckCircle2 className="h-4 w-4 text-primary" /> ARPU Uplift</li>
            </ul>
          </div>
        </section>

        {/* Responsible Gaming */}
        <section className="py-12 border-t border-border">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-6 w-6 text-destructive" />
              <h2 className="text-xl font-bold text-foreground">Compliance and Responsible Gaming</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When designing cross-product missions, operators must adhere to local responsible gaming regulations. Gamifly allows operators to enforce strict participation limits, ensuring players are not pressured into verticals they may not understand or cannot afford. If a player triggers a self-exclusion or hits a deposit limit in the casino, Gamifly instantly halts their participation in all cross-product missions across the entire platform.
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
              params={{ slug: "what-is-player-retention-in-igaming" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Player Retention in iGaming</h3>
              <p className="mt-1 text-sm text-muted-foreground">How gamification moves the curve on D7 and D30 cohorts.</p>
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
              Ready to unify your player journey?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              See how Gamifly connects your casino and sportsbook products into a single, seamless gamification layer.
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
