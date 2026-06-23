import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/resources/sample-igaming-gamification-event-payload")({
  head: () => ({
    meta: [
      { title: "Sample iGaming Gamification Event Payloads | Gamifly Integration" },
      { name: "description", content: "Review illustrative JSON event payloads for player registration, deposits, casino bets, sportsbook bets, mission completion, and reward issuing." },
      { property: "og:title", content: "Sample iGaming Gamification Event Payloads" },
      { property: "og:description", content: "Review illustrative JSON event payloads for player registration, deposits, casino bets, sportsbook bets, mission completion, and reward issuing." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://gamifly.net/resources/sample-igaming-gamification-event-payload" },
    ],
    links: [{ rel: "canonical", href: "https://gamifly.net/resources/sample-igaming-gamification-event-payload" }],
  }),
  component: PayloadPage,
});

function PayloadPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased pb-24">
      <header className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container relative mx-auto max-w-4xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Link to="/resources" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>
          <div className="mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Technical Guide</div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Sample iGaming Gamification Event Payloads</h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">Illustrative JSON event payloads for integrating Gamifly into your PAM.</p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6 mt-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Casino Round Completed</h2>
          <div className="bg-muted/50 p-6 rounded-xl overflow-x-auto border border-border">
            <pre className="text-sm font-mono text-primary">
{`{
  "event_id": "evt_123456789",
  "event_type": "casino_round_completed",
  "timestamp": "2026-06-23T15:45:00Z",
  "player_id": "usr_98765xyz",
  "currency": "EUR",
  "data": {
    "game_id": "starburst_netent",
    "provider": "netent",
    "wager_amount": 5.00,
    "win_amount": 25.00,
    "multiplier": 5.0
  }
}`}
            </pre>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Sportsbook Bet Settled</h2>
          <div className="bg-muted/50 p-6 rounded-xl overflow-x-auto border border-border">
            <pre className="text-sm font-mono text-primary">
{`{
  "event_id": "evt_987654321",
  "event_type": "sportsbook_bet_settled",
  "timestamp": "2026-06-23T16:00:00Z",
  "player_id": "usr_98765xyz",
  "currency": "EUR",
  "data": {
    "bet_id": "bet_abc123",
    "bet_type": "accumulator",
    "legs": 4,
    "wager_amount": 10.00,
    "win_amount": 150.00,
    "status": "won",
    "total_odds": 15.0
  }
}`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
