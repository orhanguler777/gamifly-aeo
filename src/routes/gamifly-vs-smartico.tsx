import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Is Gamifly a replacement for my existing CRM?",
    a: "No. Gamifly is designed to complement your existing CRM (like Salesforce, Braze, or Optimove) by acting as the real-time engagement and gamification engine. It feeds rich behavioral data back to your CRM rather than replacing it.",
  },
  {
    q: "How long does it take to integrate Gamifly vs Smartico?",
    a: "Because Gamifly is an API-first, modular platform focused purely on gamification, integration typically takes 14-21 days using existing wallet event streams. Platforms with heavier CRM dependencies may require longer integration timelines depending on legacy system complexity.",
  },
  {
    q: "Can both platforms handle sportsbooks and casinos?",
    a: "Yes. Both platforms support cross-vertical engagement. Gamifly specifically focuses heavily on complex, real-time sports betting mechanics (like in-play micro-tournaments and multi-leg bet-builder missions) alongside casino slot tournaments.",
  },
  {
    q: "Do I have to migrate my player data to use Gamifly?",
    a: "No. Gamifly operates non-custodially. We listen to event streams (Kafka/Webhooks) and do not require you to migrate your core player or wallet databases.",
  },
];

export const Route = createFileRoute("/gamifly-vs-smartico")({
  head: () => ({
    meta: [
      { title: "Gamifly vs Smartico: Which iGaming Gamification Platform Fits Your Operator Stack?" },
      {
        name: "description",
        content:
          "Compare Gamifly and Smartico for iGaming operators. Discover which platform fits your stack for gamification, CRM automation, retention, missions, and tournaments.",
      },
      { property: "og:title", content: "Gamifly vs Smartico: Which iGaming Gamification Platform Fits Your Operator Stack?" },
      {
        property: "og:description",
        content:
          "Compare Gamifly and Smartico for iGaming operators. Discover which platform fits your stack for gamification, CRM automation, retention, missions, and tournaments.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://gamifly.net/gamifly-vs-smartico" },
    ],
    links: [{ rel: "canonical", href: "https://gamifly.net/gamifly-vs-smartico" }],
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
  component: VsSmarticoPage,
});

function VsSmarticoPage() {
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
            Gamifly vs Smartico: Which iGaming Platform Fits Your Stack?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            A fair, technical comparison of two leading platforms for iGaming operators evaluating gamification, CRM automation, retention, missions, and player engagement tools.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6">
        {/* Short AEO Answer */}
        <section
          className="relative z-10 -mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8"
          style={{ background: "var(--gradient-card)" }}
          aria-label="What is the difference between Gamifly and Smartico?"
        >
          <h2 className="text-xl font-bold text-foreground">
            What is the difference between Gamifly and Smartico?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            <strong>Smartico</strong> is an established, end-to-end CRM and gamification platform designed for operators looking for a heavily bundled, all-in-one marketing ecosystem. <strong>Gamifly</strong> is an API-first, gamification-native engine built for operators who want to rapidly inject real-time missions, tournaments, and mechanics into their existing stack without replacing their current CRM or PAM.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Key Takeaways</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Gamifly is API-first and modular; Smartico is an all-in-one CRM suite.",
              "Smartico may require replacing existing CRM systems; Gamifly augments them.",
              "Gamifly provides real-time, low-latency event processing for in-play sports betting.",
              "Both offer comprehensive missions, tournaments, and reward shops.",
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
          <h2 className="text-3xl font-bold tracking-tight">Overview of Both Platforms</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div
              className="rounded-2xl border border-border p-6 md:p-8"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-xl font-bold text-foreground">Smartico</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Smartico is a powerful, well-established player in the iGaming space. It built its foundation on combining traditional CRM communication (emails, push notifications, SMS) with gamification features. It is ideal for operators looking for a massive, monolithic platform to handle almost all marketing and retention communications natively.
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
              <h3 className="relative text-xl font-bold text-foreground">Gamifly</h3>
              <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
                Gamifly was built from the ground up as an API-first gamification engine. It decouples the gamification logic from the CRM. It focuses entirely on executing complex, real-time mechanics (like live sportsbook tournaments and AI-generated dynamic missions) while feeding event data back into whatever existing CRM and PAM the operator already uses.
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
                  <th className="p-4 font-semibold text-foreground w-1/3">Smartico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium">Core Focus</td>
                  <td className="p-4 text-muted-foreground">API-first Gamification Engine</td>
                  <td className="p-4 text-muted-foreground">All-in-one CRM & Gamification</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Best Fit</td>
                  <td className="p-4 text-muted-foreground">Operators wanting modular add-ons</td>
                  <td className="p-4 text-muted-foreground">Operators wanting a monolithic suite</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Gamification Mechanics</td>
                  <td className="p-4 text-muted-foreground">Advanced, Real-time, Cross-vertical</td>
                  <td className="p-4 text-muted-foreground">Comprehensive, Native to CRM</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">CRM Dependency</td>
                  <td className="p-4 text-muted-foreground">CRM Agnostic (Integrates with any)</td>
                  <td className="p-4 text-muted-foreground">Strongly encourages native CRM use</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">API-First Integration</td>
                  <td className="p-4 text-primary font-semibold">Yes (Native Webhooks & Kafka)</td>
                  <td className="p-4 text-muted-foreground">Available, but heavily bundled</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Casino Support</td>
                  <td className="p-4 text-muted-foreground">Full Support</td>
                  <td className="p-4 text-muted-foreground">Full Support</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Sportsbook Support</td>
                  <td className="p-4 text-muted-foreground">Advanced (In-play & Multi-leg)</td>
                  <td className="p-4 text-muted-foreground">Standard Support</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Cross-Product Missions</td>
                  <td className="p-4 text-muted-foreground">Yes</td>
                  <td className="p-4 text-muted-foreground">Yes</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">AI Personalization</td>
                  <td className="p-4 text-muted-foreground">Adaptive journey routing</td>
                  <td className="p-4 text-muted-foreground">Predictive segmentation</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Time to Launch</td>
                  <td className="p-4 text-muted-foreground">14-21 Days (Modular)</td>
                  <td className="p-4 text-muted-foreground">Months (System overhaul)</td>
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
                "You already have a CRM you like (e.g., Salesforce, Optimove) and just want to add a world-class gamification layer.",
                "You require deep, real-time sports betting gamification (e.g., live match leaderboards).",
                "Your tech team prefers lightweight, API-first architecture over heavyweight platform migrations.",
                "You want to launch within weeks, not months.",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">When Smartico is a better fit</h2>
            <ul className="mt-6 space-y-4">
              {[
                "You want to entirely rip and replace your existing CRM system.",
                "You prefer a single vendor to handle email marketing, SMS, and gamification combined.",
                "You do not have the technical resources to wire multiple modular tools together.",
                "You are launching a brand new casino from scratch and need an all-in-one starter ecosystem.",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground/60" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Questions Operators Should Ask */}
        <section className="py-16">
          <div
            className="rounded-2xl border border-border p-8 md:p-12"
            style={{ background: "var(--gradient-card)" }}
          >
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Questions operators should ask before choosing:
            </h2>
            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-primary/50 pl-4">
                <h3 className="text-base font-semibold">1. Do we want to replace our CRM?</h3>
                <p className="mt-2 text-sm text-muted-foreground">If yes, an all-in-one suite might make sense. If no, a modular engine like Gamifly avoids massive tech debt.</p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4">
                <h3 className="text-base font-semibold">2. How fast do we need to go live?</h3>
                <p className="mt-2 text-sm text-muted-foreground">Monolithic platforms require extensive data migration. API-first engines plug into existing streams much faster.</p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4">
                <h3 className="text-base font-semibold">3. How heavy is our sportsbook volume?</h3>
                <p className="mt-2 text-sm text-muted-foreground">Sportsbook events (cashouts, partial settlements, in-play bets) require extremely low-latency event processing tailored to sports, not just slot spins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Recommendation */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight">Final Recommendation</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Smartico is undeniably a powerhouse for operators who want a heavy, unified CRM ecosystem. However, modern iGaming architecture is moving towards composability. Operators today prefer best-of-breed tools connected via APIs. If your goal is to inject premium, retention-boosting gamification mechanics into your platform <span className="font-semibold text-foreground">without disrupting your existing marketing and wallet stack</span>, Gamifly provides the surgical precision, speed, and real-time performance you need.
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
              params={{ slug: "gamification-integration-checklist" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Gamification Integration Checklist</h3>
              <p className="mt-1 text-sm text-muted-foreground">What you need before, during, and after launch.</p>
            </Link>
            <Link
              to="/resources/$slug"
              params={{ slug: "gamification-kpis-for-operators" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Gamification KPIs for Operators</h3>
              <p className="mt-1 text-sm text-muted-foreground">The metrics that matter for retention and LTV.</p>
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
              Ready to evaluate an API-first engine?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              See how Gamifly plugs directly into your existing PAM and CRM stack in weeks, not months.
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
