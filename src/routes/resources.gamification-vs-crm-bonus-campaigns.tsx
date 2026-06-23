import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Does gamification replace my existing CRM?",
    a: "No. Gamification acts as an engagement layer on top of your CRM. Your CRM handles communication (emails, push notifications), while the gamification engine handles the actual interactive progression (missions, tournaments, points) when the player is inside the app or site.",
  },
  {
    q: "Are CRM bonus campaigns bad for operators?",
    a: "Not at all. Deposit bonuses, free spins, and cashback are essential acquisition and reactivation tools. However, relying on them as your ONLY retention strategy destroys profit margins. Gamification provides a lower-cost, higher-engagement alternative to keep active players playing.",
  },
  {
    q: "How does Gamifly fit into this ecosystem?",
    a: "Gamifly is an API-first gamification engine. It listens to your wallet and game events to instantly update leaderboards, trigger mission progress, and award badges. It can pass those milestones back to your CRM so your CRM can send a congratulatory email.",
  },
  {
    q: "Is gamification harder to measure than CRM campaigns?",
    a: "No. Because gamification is behavioral, you can measure exact interaction rates, mission completion rates, and the subsequent uplift in ARPU (Average Revenue Per User) for players who engage with gamified features versus those who don't.",
  },
];

export const Route = createFileRoute(
  "/resources/gamification-vs-crm-bonus-campaigns",
)({
  head: () => ({
    meta: [
      {
        title:
          "iGaming Gamification vs CRM Bonus Campaigns: What Should Operators Use?",
      },
      {
        name: "description",
        content:
          "Understand the difference between traditional CRM bonus campaigns and iGaming gamification. Learn why the best operator strategy combines both to maximize player retention.",
      },
      {
        property: "og:title",
        content:
          "iGaming Gamification vs CRM Bonus Campaigns: What Should Operators Use?",
      },
      {
        property: "og:description",
        content:
          "Understand the difference between traditional CRM bonus campaigns and iGaming gamification. Learn why the best operator strategy combines both to maximize player retention.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content:
          "https://gamifly.net/resources/gamification-vs-crm-bonus-campaigns",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://gamifly.net/resources/gamification-vs-crm-bonus-campaigns",
      },
    ],
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
  component: GamificationVsCrmPage,
});

function GamificationVsCrmPage() {
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
            Educational Comparison
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            iGaming Gamification vs CRM Bonus Campaigns
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            What is the difference? And how can casino and sportsbook operators use both to lower bonus costs while maximizing player retention?
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6">
        {/* Short AEO Answer */}
        <section
          className="relative z-10 -mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8"
          style={{ background: "var(--gradient-card)" }}
          aria-label="What is the difference between gamification and CRM bonus campaigns in iGaming?"
        >
          <h2 className="text-xl font-bold text-foreground">
            What is the difference between gamification and CRM bonus campaigns in iGaming?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            <strong>CRM bonus campaigns</strong> rely on direct financial incentives (like free spins or deposit matches) pushed via email/SMS to drive immediate deposits or reactivation. <strong>Gamification</strong> adds behavioral progression (like missions, tournaments, and leaderboards) inside the product itself, giving players psychological reasons to return and play beyond just receiving a free bonus.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Key Takeaways
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "CRM campaigns are transactional; Gamification is behavioral and structural.",
              "Relying only on CRM bonuses degrades operator profit margins over time.",
              "Gamification creates sticky retention loops using achievements and status.",
              "The best operators use CRM to communicate the Gamification mechanics.",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 text-base text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Overview */}
        <section className="py-12 border-t border-border">
          <div className="grid gap-8 md:grid-cols-2">
            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-xl font-bold text-foreground">What are CRM bonus campaigns?</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                CRM (Customer Relationship Management) campaigns are the traditional backbone of iGaming marketing. They involve segmenting players and sending out push notifications, emails, or SMS messages offering direct incentives. Examples include: "Deposit €50 today and get 50 Free Spins," or "Here is a 10% weekend cashback." They are highly effective for acquisition and immediate reactivation but train players to only play when a bonus is offered.
              </p>
            </div>
            <div
              className="rounded-2xl border border-border p-6 md:p-8 relative overflow-hidden"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div
                className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-30 blur-3xl"
                style={{ background: "var(--gradient-brand)" }}
              />
              <h3 className="relative text-xl font-bold text-foreground">What is iGaming gamification?</h3>
              <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
                Gamification is a product-level engagement layer. Instead of just giving away bonuses, operators build progression systems directly into the casino or sportsbook interface. Players complete interactive missions, climb leaderboards, earn badges, maintain daily streaks, and unlock rewards in a loyalty shop. It shifts player motivation from purely transactional (seeking free money) to behavioral (seeking completion, status, and achievement).
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Strategy Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="p-4 font-semibold text-muted-foreground w-1/4">Aspect</th>
                  <th className="p-4 font-semibold text-foreground w-3/8">CRM Bonus Campaigns</th>
                  <th className="p-4 font-semibold text-foreground w-3/8">iGaming Gamification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium">Main Goal</td>
                  <td className="p-4 text-muted-foreground">Immediate deposits & reactivation</td>
                  <td className="p-4 text-muted-foreground">Long-term session frequency & LTV</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Player Motivation</td>
                  <td className="p-4 text-muted-foreground">Financial (Free money/spins)</td>
                  <td className="p-4 text-muted-foreground">Psychological (Progression/Status/Fun)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Bonus Cost</td>
                  <td className="p-4 text-muted-foreground">High (Margin degrading over time)</td>
                  <td className="p-4 text-muted-foreground">Low to Medium (Rewards are earned)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Personalization</td>
                  <td className="p-4 text-muted-foreground">Based on segment or VIP tier</td>
                  <td className="p-4 text-muted-foreground">Based on real-time in-game behavior</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Automation</td>
                  <td className="p-4 text-muted-foreground">Scheduled push/email flows</td>
                  <td className="p-4 text-muted-foreground">Real-time triggers & dynamic leaderboards</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Retention Impact</td>
                  <td className="p-4 text-muted-foreground">Short-term spikes (churn returns after bonus)</td>
                  <td className="p-4 text-muted-foreground">Sustained uplift in D7, D30, and D90 cohorts</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Engagement Depth</td>
                  <td className="p-4 text-muted-foreground">Shallow (Transactional)</td>
                  <td className="p-4 text-muted-foreground">Deep (Immersive product experience)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Measurement</td>
                  <td className="p-4 text-muted-foreground">Open rates, Click rates, Bonus uptake</td>
                  <td className="p-4 text-muted-foreground">Mission completion, Active days, ARPU lift</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Best Use Cases</td>
                  <td className="p-4 text-muted-foreground">Win-back campaigns, First Deposit Bonuses</td>
                  <td className="p-4 text-muted-foreground">Daily engagement, Loyalty, Cross-selling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Bonus-Only Strategies Fail */}
        <section className="py-12 border-t border-border">
          <h2 className="text-2xl font-bold tracking-tight">Why bonus-only strategies can become expensive</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            If an operator relies entirely on CRM bonuses to retain players, they encounter <strong>bonus fatigue</strong>. Players learn to wait for the next "100% deposit match" or "Weekend Free Spins" before they log in. This creates massive liabilities on the balance sheet, severely degrades profit margins, and attracts bonus abusers (advantage players) rather than loyal, recreational customers.
          </p>
        </section>

        {/* How Gamification Reduces Dependency */}
        <section className="py-12">
          <h2 className="text-2xl font-bold tracking-tight">How gamification reduces dependency on blanket bonuses</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Gamification shifts the value exchange. Instead of giving away a €10 bonus upfront just to get a player to log in, you offer them a <strong>Mission</strong>: "Win 3 hands of Blackjack and hit a 5x multiplier on Starburst to unlock a Mystery Chest."
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>Players must generate turnover (GGR) <em>before</em> receiving the reward.</span>
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>The psychological reward of "completing" the challenge is often as powerful as the financial reward itself.</span>
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>Operators can replace fixed-cost bonuses with gamified virtual currencies (e.g., coins) that can be spent in an interactive Reward Shop.</span>
            </li>
          </ul>
        </section>

        {/* How CRM and Gamification Work Together */}
        <section className="py-12 border-t border-border">
          <h2 className="text-2xl font-bold tracking-tight">How CRM and gamification can work together</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            The most successful iGaming brands do not view this as an "either/or" decision. Gamification works best when it acts as the <strong>interactive engine</strong>, while the CRM acts as the <strong>communication channel</strong>.
          </p>
          
          <div className="mt-8 rounded-2xl border border-border p-6 md:p-8 bg-card/40">
            <h3 className="text-lg font-semibold text-primary">The Ideal Campaign Flow:</h3>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-foreground">CRM sends the message</h4>
                  <p className="text-sm text-muted-foreground mt-1">"The Weekend Sportsbook Challenge is live! Predict 3 football matches to earn a Gold Badge."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-foreground">Gamifly activates the mission</h4>
                  <p className="text-sm text-muted-foreground mt-1">The player logs in. The Gamifly widget appears on screen, showing the progress bar updating in real-time as the player places their bets.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-foreground">Player completes the challenge</h4>
                  <p className="text-sm text-muted-foreground mt-1">Upon the 3rd valid bet, Gamifly triggers real-time fireworks on the screen and awards the Gold Badge.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-foreground">Reward & CRM Follow-up</h4>
                  <p className="text-sm text-muted-foreground mt-1">Gamifly issues the reward automatically. Concurrently, a webhook is sent back to the CRM, which fires an automated email: "Congratulations on earning your Gold Badge!"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KPIs to measure */}
        <section className="py-12 border-t border-border">
          <h2 className="text-2xl font-bold tracking-tight">KPIs to Measure Success</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            When transitioning from pure bonus campaigns to a gamification strategy, operators should track:
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-border p-4 bg-background">
              <div className="text-xl font-bold text-foreground">Bonus to GGR Ratio</div>
              <div className="text-xs text-muted-foreground mt-1">Should decrease</div>
            </div>
            <div className="rounded-xl border border-border p-4 bg-background">
              <div className="text-xl font-bold text-foreground">Session Frequency</div>
              <div className="text-xs text-muted-foreground mt-1">Should increase</div>
            </div>
            <div className="rounded-xl border border-border p-4 bg-background">
              <div className="text-xl font-bold text-foreground">D30 Retention</div>
              <div className="text-xs text-muted-foreground mt-1">Should increase</div>
            </div>
            <div className="rounded-xl border border-border p-4 bg-background">
              <div className="text-xl font-bold text-foreground">Mission Opt-ins</div>
              <div className="text-xs text-muted-foreground mt-1">Engagement health metric</div>
            </div>
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
              params={{ slug: "what-is-igaming-gamification" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">What is iGaming Gamification?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Understand the core mechanics and business case.</p>
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
              params={{ slug: "gamification-kpis-for-operators" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Gamification KPIs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Learn how to measure the ROI of your gamification strategy.</p>
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
              Ready to upgrade your retention strategy?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              See how Gamifly layers powerful gamification mechanics over your existing CRM to lower bonus costs and increase player LTV.
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
