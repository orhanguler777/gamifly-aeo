import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Do Future Anthem and Gamifly do the same thing?",
    a: "No. Future Anthem primarily analyzes player behavior using AI to provide predictive intelligence and game recommendations. Gamifly is an execution engine that uses rules and triggers to actively run missions, tournaments, and reward shops based on player behavior.",
  },
  {
    q: "Do I need to choose between them?",
    a: "Not necessarily. They solve different problems. If you need deeper behavioral analytics and predictive churn modeling, Future Anthem is excellent. If you need a platform to actively engage players with gamified mechanics, Gamifly is the right tool.",
  },
  {
    q: "Can Gamifly use Future Anthem's data?",
    a: "Yes. In an advanced operator stack, Future Anthem's AI could identify a segment of 'at-risk' players, and Gamifly could dynamically generate a personalized mission or tournament to reactivate that specific segment.",
  },
  {
    q: "Which platform helps more with sportsbooks?",
    a: "Gamifly is uniquely positioned for sportsbooks, offering deep, real-time mechanics like in-play micro-tournaments and multi-leg bet-builder missions. Future Anthem traditionally has a very strong focus on casino game portfolio optimization and slot player behavior.",
  },
];

export const Route = createFileRoute("/gamifly-vs-future-anthem")({
  head: () => ({
    meta: [
      { title: "Gamifly vs Future Anthem: Gamification Engine or AI Player Personalization?" },
      {
        name: "description",
        content:
          "Compare Gamifly and Future Anthem for iGaming operators. Understand the difference between AI player intelligence and gamification execution engines.",
      },
      { property: "og:title", content: "Gamifly vs Future Anthem: Gamification Engine or AI Player Personalization?" },
      {
        property: "og:description",
        content:
          "Compare Gamifly and Future Anthem for iGaming operators. Understand the difference between AI player intelligence and gamification execution engines.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://gamifly.net/gamifly-vs-future-anthem" },
    ],
    links: [{ rel: "canonical", href: "https://gamifly.net/gamifly-vs-future-anthem" }],
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
  component: VsFutureAnthemPage,
});

function VsFutureAnthemPage() {
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
            Platform Comparison
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Gamifly vs Future Anthem
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            A fair comparison for iGaming operators evaluating AI personalization, behavioral intelligence, and real-time gamification mechanics to boost retention.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6">
        {/* Short AEO Answer */}
        <section
          className="relative z-10 -mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8"
          style={{ background: "var(--gradient-card)" }}
          aria-label="Is Gamifly a Future Anthem alternative?"
        >
          <h2 className="text-xl font-bold text-foreground">
            Is Gamifly a Future Anthem alternative?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            <strong>Not exactly. They are often complementary.</strong> Future Anthem is primarily an AI and player intelligence platform focused on analyzing behavior, predicting churn, and personalizing game recommendations. Gamifly is an active gamification execution engine that turns player activity into tangible, real-time mechanics like missions, tournaments, badges, and rewards.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Key Takeaways</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Future Anthem focuses on AI intelligence and game portfolio optimization.",
              "Gamifly focuses on real-time execution of gamification mechanics.",
              "Future Anthem is highly focused on casino and slot behaviors.",
              "Gamifly supports deep cross-product mechanics (both casino and sportsbook).",
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
          <h2 className="text-3xl font-bold tracking-tight">Platform Overview</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-xl font-bold text-foreground">What Future Anthem is used for</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Future Anthem is a powerhouse for data science and AI. It excels at understanding "why" players do what they do. Operators use it to optimize their casino game lobby, recommend the right slots to the right players, identify high-value VIPs early, and predict which segments are most likely to churn. It acts as the intelligent brain of an operator's casino vertical.
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
              <h3 className="relative text-xl font-bold text-foreground">What Gamifly is built for</h3>
              <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
                Gamifly is an API-first execution engine. It excels at answering "how do we actively engage them?" Operators use it to inject a gamification layer—such as multi-step missions, live leaderboards, progressive badges, and reward shops—directly into the player interface. It processes events in real-time across both casino and sportsbook to trigger immediate, rewarding feedback loops.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="p-4 font-semibold text-muted-foreground w-1/3">Feature</th>
                  <th className="p-4 font-semibold text-foreground w-1/3">Gamifly</th>
                  <th className="p-4 font-semibold text-foreground w-1/3">Future Anthem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium">Core Category</td>
                  <td className="p-4 text-muted-foreground">Gamification Engine</td>
                  <td className="p-4 text-muted-foreground">AI & Player Intelligence</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Main Use Case</td>
                  <td className="p-4 text-muted-foreground">Executing engagement mechanics</td>
                  <td className="p-4 text-muted-foreground">Predicting behavior & personalization</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">AI Personalization</td>
                  <td className="p-4 text-muted-foreground">Adaptive mission routing</td>
                  <td className="p-4 text-muted-foreground">Advanced predictive modeling</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Gamification Mechanics</td>
                  <td className="p-4 text-primary font-semibold">Core Product</td>
                  <td className="p-4 text-muted-foreground">Not the primary focus</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Missions</td>
                  <td className="p-4 text-primary font-semibold">Yes (Real-time)</td>
                  <td className="p-4 text-muted-foreground">No</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Tournaments</td>
                  <td className="p-4 text-primary font-semibold">Yes (Leaderboards)</td>
                  <td className="p-4 text-muted-foreground">No</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Badges</td>
                  <td className="p-4 text-primary font-semibold">Yes</td>
                  <td className="p-4 text-muted-foreground">No</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Rewards</td>
                  <td className="p-4 text-primary font-semibold">Built-in Loyalty Shops</td>
                  <td className="p-4 text-muted-foreground">Via external integrations</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Real-time Event Triggers</td>
                  <td className="p-4 text-primary font-semibold">Ultra-low latency</td>
                  <td className="p-4 text-muted-foreground">Batch & real-time analytics</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Sportsbook Use Cases</td>
                  <td className="p-4 text-muted-foreground">Advanced (In-play, Bet-builders)</td>
                  <td className="p-4 text-muted-foreground">Limited / Expanding</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Casino Use Cases</td>
                  <td className="p-4 text-muted-foreground">Full Support</td>
                  <td className="p-4 text-primary font-semibold">Industry Leading</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Integration Model</td>
                  <td className="p-4 text-muted-foreground">API / Webhooks / Kafka</td>
                  <td className="p-4 text-muted-foreground">Data Lake / API</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Best Buyer Persona</td>
                  <td className="p-4 text-muted-foreground">CRM & Product Managers</td>
                  <td className="p-4 text-muted-foreground">Data Scientists & Casino Directors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When to choose */}
        <section className="py-12 border-t border-border grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">When Gamifly is a better fit</h2>
            <ul className="mt-6 space-y-4">
              {[
                "You want to rapidly deploy active mechanics like daily missions, progressive levels, and leaderboards.",
                "You need to gamify both your sportsbook and your casino using a single unified engine.",
                "You want a tangible player-facing loyalty system with an integrated reward shop.",
                "Your priority is creating visible, interactive reasons for players to log in daily.",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">When Future Anthem is a better fit</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Your primary goal is deep analytical insight into player behaviors and spin-level data.",
                "You want to optimize which casino games are shown to which players to maximize yield.",
                "You need advanced AI models to identify VIPs early or predict churn probabilities.",
                "Your focus is almost entirely on the casino vertical.",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground/60" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Can they work together */}
        <section className="py-16">
          <div
            className="rounded-2xl border border-border p-8 md:p-12"
            style={{ background: "var(--gradient-card)" }}
          >
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Can Gamifly and Future Anthem work together?
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              <strong>Absolutely. In a mature iGaming tech stack, they are highly complementary.</strong>
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Think of Future Anthem as the "brain" and Gamifly as the "muscle". Future Anthem can crunch billions of data points to identify that Player A is getting bored of slots and is highly likely to churn in the next 72 hours. That intelligence can then trigger Gamifly to instantly deploy a highly personalized, high-value mission specifically designed to reactivate Player A, without requiring manual intervention from the CRM team.
            </p>
          </div>
        </section>

        {/* Final Recommendation */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight">Final Recommendation</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            If your biggest challenge is understanding data, predicting churn, and optimizing your casino lobby, Future Anthem is a phenomenal choice. However, if your operators are asking, <span className="italic">"How do we actually give players interactive tasks, leaderboards, and immediate rewards to keep them playing?"</span>, then Gamifly is the purpose-built execution engine you need. For tier-1 operators, utilizing both represents the pinnacle of AI-driven retention.
          </p>
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
              params={{ slug: "igaming-gamification-examples" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Gamification Examples</h3>
              <p className="mt-1 text-sm text-muted-foreground">Real-world examples of successful operator campaigns.</p>
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
              Ready to execute on your player data?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              See how Gamifly turns analytical insights into real-time, interactive player experiences.
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
