import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/resources/anonymous-operator-gamification-case-study")({
  head: () => ({
    meta: [
      { title: "Anonymous Operator Gamification Case Study | Retention Success" },
      { name: "description", content: "An illustrative operator scenario showing how gamification can reduce dependency on blanket bonus campaigns and improve player engagement." },
      { property: "og:title", content: "Anonymous Operator Gamification Case Study" },
      { property: "og:description", content: "An illustrative operator scenario showing how gamification can reduce dependency on blanket bonus campaigns and improve player engagement." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://gamifly.net/resources/anonymous-operator-gamification-case-study" },
    ],
    links: [{ rel: "canonical", href: "https://gamifly.net/resources/anonymous-operator-gamification-case-study" }],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased pb-24">
      <header className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container relative mx-auto max-w-4xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Link to="/resources" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>
          <div className="mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Case Study</div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Anonymous Operator Case Study</h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">How a Tier-2 Casino & Sportsbook operator reduced bonus hunting and increased D30 retention by 14%.</p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6 mt-12">
        <section className="mb-12">
          <div className="rounded-2xl border border-border p-8 bg-card/40">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">The operator was heavily reliant on weekly deposit bonuses. While DAU was stable, the Bonus-to-GGR ratio was unsustainably high, and players quickly churned after clearing their bonuses.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">They implemented Gamifly to launch daily 'No-Deposit' missions that required players to generate organic turnover (e.g., spin 100 times) to unlock a daily reward chest.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Results</h2>
            <ul className="list-disc pl-5 mt-4 text-muted-foreground space-y-2">
              <li>14% increase in D30 Retention among opted-in players.</li>
              <li>22% decrease in overall bonus spend within 60 days.</li>
              <li>Significant increase in average sessions per user (ASPU).</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
