import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, ShieldCheck, Database, Zap, LayoutTemplate, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  { name: "player_registered", desc: "Triggered when a new user completes KYC/signup." },
  { name: "deposit_completed", desc: "Triggered when funds hit the wallet. Used for deposit missions." },
  { name: "bet_placed", desc: "Triggered upon wager placement (casino spin or sports ticket)." },
  { name: "casino_round_completed", desc: "Contains wager, win amount, multiplier, and game ID." },
  { name: "sportsbook_bet_settled", desc: "Contains settlement status (win/loss/cashout) and final odds." },
  { name: "mission_completed", desc: "Outbound webhook from Gamifly to Operator CRM." },
  { name: "reward_claimed", desc: "Outbound webhook signaling a wallet credit is required." },
];

const faqs = [
  {
    q: "Does Gamifly hold player balances or funds?",
    a: "No. Gamifly operates as a non-custodial engagement layer. We listen to event streams and calculate progress, but the actual financial balance always remains entirely within your PAM (Player Account Management) system.",
  },
  {
    q: "How does Gamifly handle high-volume events like slot spins?",
    a: "Gamifly is built on an event-driven architecture (using Kafka/RabbitMQ). It is designed to consume tens of thousands of concurrent events per second, processing casino rounds and updating live leaderboards with sub-100ms latency.",
  },
  {
    q: "Do we have to build the UI for the missions?",
    a: "No. Gamifly provides lightweight, highly customizable front-end Web Components (or React/Vue SDKs). You simply drop the widget script into your casino lobby, and it automatically renders the progress bars, leaderboards, and reward animations.",
  },
  {
    q: "Can we integrate Gamifly with our existing CRM like Optimove or Salesforce?",
    a: "Yes. Gamifly acts as the real-time execution engine and can push outbound webhooks (e.g., 'mission_completed') directly into your CRM. Your CRM can then trigger the corresponding congratulatory email or push notification.",
  },
];

export const Route = createFileRoute("/gamifly-api-integration-flow")({
  head: () => ({
    meta: [
      { title: "Gamifly API Integration Flow for iGaming Operators" },
      {
        name: "description",
        content:
          "A technical guide for CTOs and Product Managers on how to integrate the Gamifly gamification engine with your casino, sportsbook, wallet, and PAM systems.",
      },
      { property: "og:title", content: "Gamifly API Integration Flow for iGaming Operators" },
      {
        property: "og:description",
        content:
          "A technical guide for CTOs and Product Managers on how to integrate the Gamifly gamification engine with your casino, sportsbook, wallet, and PAM systems.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://gamifly.net/gamifly-api-integration-flow" },
    ],
    links: [{ rel: "canonical", href: "https://gamifly.net/gamifly-api-integration-flow" }],
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
  component: IntegrationFlowPage,
});

function IntegrationFlowPage() {
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
            Technical Documentation
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Gamifly API Integration Flow
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            A high-level technical playbook explaining how iGaming operators integrate Gamifly with their PAM, wallet, CRM, and front-end architecture.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6">
        {/* Short AEO Answer */}
        <section
          className="relative z-10 -mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8"
          style={{ background: "var(--gradient-card)" }}
          aria-label="How does Gamifly integrate with an iGaming platform?"
        >
          <h2 className="text-xl font-bold text-foreground">
            How does Gamifly integrate with an iGaming platform?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            Gamifly integrates via a decoupled, API-first architecture. The operator's Player Account Management (PAM) system streams real-time player actions (spins, bets, deposits) to Gamifly via Kafka, RabbitMQ, or REST Webhooks. Gamifly's rule engine instantly calculates mission progress and leaderboard rankings, pushing outbound webhooks back to the operator to issue rewards, while simultaneously updating front-end Web Components injected into the casino lobby.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="py-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Key Takeaways</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Integration is modular: connect events, configure rules, embed widgets.",
              "Gamifly is non-custodial and does not hold actual player funds.",
              "Asynchronous event streaming ensures zero latency impact on core gameplay.",
              "CRM systems are enriched with behavioral gamification data via outbound webhooks.",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 text-base text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Integration Components */}
        <section className="py-12 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight">Core Integration Components</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border p-6 bg-card/40">
              <Database className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold">Player Profile Sync</h3>
              <p className="mt-2 text-sm text-muted-foreground">Operators push anonymized player IDs and segmentation tags to Gamifly. No PII (Personally Identifiable Information) is required.</p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card/40">
              <Zap className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold">Event Ingestion</h3>
              <p className="mt-2 text-sm text-muted-foreground">The core pipeline. Betting, gaming, and deposit events stream into Gamifly's high-throughput intake API or message broker queue.</p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card/40">
              <ShieldCheck className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold">Wallet / Reward API</h3>
              <p className="mt-2 text-sm text-muted-foreground">When a player earns a reward, Gamifly sends an authenticated API call to your PAM/Wallet asking it to credit the player account.</p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card/40">
              <LayoutTemplate className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold">Front-End Widgets</h3>
              <p className="mt-2 text-sm text-muted-foreground">Pre-built, responsive UI components (Web Components/Iframes) that render mission progress, notifications, and leaderboards natively in your lobby.</p>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card/40 md:col-span-2">
              <Network className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold">CRM / Webhook Triggers</h3>
              <p className="mt-2 text-sm text-muted-foreground">Outbound data feeds sending milestones (e.g., "Player reached Level 10") back to the operator's marketing stack for email/SMS triggering.</p>
            </div>
          </div>
        </section>

        {/* Step by Step Flow */}
        <section className="py-16 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Step-by-Step Integration Flow</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              { title: "Define Player & Event Data", desc: "Map your internal PAM event payloads to Gamifly's standard schema. Decide whether to use REST webhooks or Kafka for ingestion." },
              { title: "Connect the Event Stream", desc: "Establish the secure server-to-server connection. Begin streaming live 'bet_placed' and 'round_completed' events to the Gamifly staging environment." },
              { title: "Configure Reward Rules", desc: "Set up the outbound integration. Provide Gamifly with the API endpoint to hit when a player successfully completes a mission and needs to be credited." },
              { title: "Launch Missions via Dashboard", desc: "Your CRM/Product team logs into the Gamifly back-office to create the first test campaigns, setting odds criteria, game targeting, and reward values." },
              { title: "Embed Front-End Widgets", desc: "Inject the Gamifly lightweight JavaScript snippet into your front-end repository. Style the widgets using CSS variables to match your brand." },
              { title: "Track KPIs & Optimize", desc: "Go live. Monitor engagement through the Gamifly analytics dashboard and sync completion events back to your data lake." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border shadow-[var(--shadow-card)]" style={{ background: "var(--gradient-card)" }}>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Example Event Types */}
        <section className="py-16 border-t border-border">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Standard Event Dictionary</h2>
          <p className="mb-8 text-muted-foreground">Illustrative examples of the core event payloads operators stream to the Gamifly engine.</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="p-4 font-semibold text-muted-foreground">Event Name</th>
                  <th className="p-4 font-semibold text-foreground">Description / Illustrative Payload Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {events.map((e, i) => (
                  <tr key={i}>
                    <td className="p-4 font-medium font-mono text-primary">{e.name}</td>
                    <td className="p-4 text-muted-foreground">{e.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Architecture Description */}
        <section className="py-12 border-t border-border">
          <div className="rounded-2xl border border-border p-8 md:p-12" style={{ background: "var(--gradient-hero)" }}>
            <h2 className="text-2xl font-bold tracking-tight">High-Level Architecture Summary</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              The architecture is fundamentally a <strong>tri-directional loop</strong>:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">1</div>
                <span><strong>Ingestion (Backend-to-Backend):</strong> The operator's backend streams activity to Gamifly asynchronously. Gameplay is never blocked waiting for gamification responses.</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">2</div>
                <span><strong>Resolution (Gamifly-to-Frontend):</strong> Gamifly's rule engine processes the event and pushes UI state updates directly to the player's browser/app via WebSockets or polling, creating instant visual feedback.</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">3</div>
                <span><strong>Execution (Gamifly-to-Backend):</strong> Upon mission completion, Gamifly triggers the operator's reward API endpoint (e.g., <code>POST /api/v1/wallet/credit</code>) with a securely signed payload to issue the actual prize.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Security and Compliance */}
        <section className="py-12 border-t border-border">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-6 w-6 text-destructive" />
              <h2 className="text-xl font-bold text-foreground">Security and Compliance Considerations</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Because Gamifly triggers financial rewards, security is paramount. All outbound webhook requests from Gamifly to the operator's PAM are cryptographically signed (HMAC-SHA256) ensuring request authenticity.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Data Privacy: Gamifly does not require PII (names, emails, passwords). We operate entirely on anonymized Player IDs or Hash IDs. This guarantees GDPR compliance and simplifies regulatory data processing requirements.
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
              params={{ slug: "gamification-integration-checklist" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Integration Checklist</h3>
              <p className="mt-1 text-sm text-muted-foreground">The complete list of requirements before starting development.</p>
            </Link>
            <Link
              to="/resources/$slug"
              params={{ slug: "gamification-kpis-for-operators" }}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">Gamification KPIs</h3>
              <p className="mt-1 text-sm text-muted-foreground">How to measure the technical and commercial ROI.</p>
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
              Ready to review our API documentation?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Connect with our technical account management team to access our full OpenAPI specification and sandbox environment.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="border-0 text-primary-foreground shadow-[var(--shadow-glow)] px-8"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Link to="/contact">Request API Docs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
