import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { articles } from "@/lib/resources-content";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const article = articles[params.slug];
    if (!article) throw notFound();
    return article;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [] };
    const a = loaderData;
    const url = `/resources/${params.slug}`;
    return {
      meta: [
        { title: a.metaTitle },
        { name: "description", content: a.metaDescription },
        { property: "og:title", content: a.metaTitle },
        { property: "og:description", content: a.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.metaDescription,
            articleSection: a.tag,
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: a.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Resources", item: "/resources" },
              { "@type": "ListItem", position: 2, name: a.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return (
      <div className="dark min-h-screen bg-background px-6 py-24 text-foreground">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="mt-3 text-muted-foreground">
            We couldn't find "{slug}". Browse all resources instead.
          </p>
          <Button asChild className="mt-6">
            <Link to="/resources">Back to Resources</Link>
          </Button>
        </div>
      </div>
    );
  },
});

function ArticlePage() {
  const a = Route.useLoaderData();

  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <header
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.7_0.2_265/0.3)_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="container relative mx-auto max-w-3xl px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <Link
            to="/resources"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All Resources
          </Link>
          <div className="mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {a.tag}
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              {a.h1}
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">{a.intro}</p>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-6">
        {/* TL;DR */}
        <section
          className="-mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8"
          style={{ background: "var(--gradient-card)" }}
          aria-label="Key takeaways"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Key Takeaways
          </h2>
          <ul className="mt-4 space-y-3">
            {a.tldr.map((t) => (
              <li key={t} className="flex gap-3 text-base text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sections */}
        <article className="py-16">
          {a.sections.map((s) => (
            <section key={s.h2} className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{s.h2}</h2>
              <div className="mt-5 space-y-4">
                {s.body.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
              </div>
              {s.h3 && (
                <div className="mt-8 grid gap-5">
                  {s.h3.map((sub) => (
                    <div
                      key={sub.h3}
                      className="rounded-xl border border-border p-5"
                      style={{ background: "var(--gradient-card)" }}
                    >
                      <h3 className="text-lg font-semibold">{sub.h3}</h3>
                      {sub.body.map((p, i) => (
                        <p key={i} className="mt-2 text-sm text-muted-foreground">
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>

        {/* FAQ */}
        <section className="pb-16" aria-labelledby="article-faq">
          <h2 id="article-faq" className="text-2xl font-bold tracking-tight md:text-3xl">
            Frequently asked questions
          </h2>
          <div
            className="mt-6 rounded-2xl border border-border p-2 md:p-4"
            style={{ background: "var(--gradient-card)" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {a.faq.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="border-border px-4">
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related */}
        {a.related.length > 0 && (
          <section className="pb-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Related resources</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {a.related.map((slug) => {
                const r = articles[slug];
                if (!r) return null;
                return (
                  <Link
                    key={slug}
                    to="/resources/$slug"
                    params={{ slug }}
                    className="group rounded-xl border border-border p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                    style={{ background: "var(--gradient-card)" }}
                  >
                    <span className="text-xs font-medium text-primary">{r.tag}</span>
                    <h3 className="mt-2 text-base font-semibold">{r.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                      Read
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

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
            <h2 className="relative text-2xl font-bold tracking-tight md:text-4xl">
              Ready to put this into production?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Gamifly helps operators build missions, campaigns, badges, tournaments, rewards, and
              personalized journeys into their casino and sportsbook experience.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="border-0 text-primary-foreground shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-brand)" }}
              >
                <a href="/contact">Book a Demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-card/40 backdrop-blur">
                <a href="/features">Explore Gamifly Features</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
