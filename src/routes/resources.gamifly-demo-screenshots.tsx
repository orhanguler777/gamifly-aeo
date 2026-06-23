import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/resources/gamifly-demo-screenshots")({
  head: () => ({
    meta: [
      { title: "Gamifly Demo Screenshots | Product Views & Analytics" },
      { name: "description", content: "See example product views for missions, tournaments, badges, rewards, segmentation, analytics, and front-end player widgets." },
      { property: "og:title", content: "Gamifly Demo Screenshots" },
      { property: "og:description", content: "See example product views for missions, tournaments, badges, rewards, segmentation, analytics, and front-end player widgets." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://gamifly.net/resources/gamifly-demo-screenshots" },
    ],
    links: [{ rel: "canonical", href: "https://gamifly.net/resources/gamifly-demo-screenshots" }],
  }),
  component: DemoPage,
});

function DemoPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased pb-24">
      <header className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container relative mx-auto max-w-4xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Link to="/resources" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>
          <div className="mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Demo Guide</div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Gamifly Demo Screenshots</h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">A visual tour of the Gamifly back-office and player-facing widgets.</p>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6 mt-12">
        <section className="mb-12">
          <div className="rounded-2xl border border-border p-12 text-center bg-card/40 flex flex-col items-center justify-center min-h-[300px]">
            <ImageIcon className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
            <h2 className="text-xl font-bold mb-2">Back-Office Mission Builder</h2>
            <p className="text-muted-foreground">Screenshots illustrating the drag-and-drop mission builder for CRM teams.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
