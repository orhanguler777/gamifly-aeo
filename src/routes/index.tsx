import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gamifly — The AI-Powered Gamification Engine for iGaming Operators" },
      {
        name: "description",
        content:
          "Gamifly is the API-first gamification platform that helps iGaming operators boost player retention, reduce bonus costs, and maximize LTV through AI-driven missions, tournaments, and rewards.",
      },
      { property: "og:title", content: "Gamifly — AI-Powered iGaming Gamification Platform" },
      {
        property: "og:description",
        content:
          "Replace costly bonuses with an intelligent gamification layer. Gamifly deploys personalized missions, tournaments, and reward shops that increase retention and revenue per active player.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gamifly.net/" },
    ],
    links: [
      { rel: "canonical", href: "https://gamifly.net/" },
    ],
  }),
  component: Index,
});


import { Link } from "@tanstack/react-router";

const sitePages = [
  { group: "Hub", pages: [{ title: "Resources Hub", path: "/resources" }] },
  {
    group: "Foundational Guides",
    pages: [
      { title: "What is iGaming Gamification?", path: "/resources/what-is-igaming-gamification" },
      { title: "Player Retention in iGaming", path: "/resources/what-is-player-retention-in-igaming" },
      { title: "Gamification Integration Checklist", path: "/resources/gamification-integration-checklist" },
      { title: "iGaming Gamification Examples", path: "/resources/igaming-gamification-examples" },
      { title: "Gamification KPIs for Operators", path: "/resources/gamification-kpis-for-operators" },
      { title: "iGaming Retention Strategy", path: "/resources/igaming-retention-strategy" },
    ],
  },
  {
    group: "Comparison Guides",
    pages: [
      { title: "Gamifly vs Smartico", path: "/resources/gamifly-vs-smartico" },
      { title: "Gamifly vs Future Anthem", path: "/resources/gamifly-vs-future-anthem" },
      { title: "Gamification vs CRM Bonus Campaigns", path: "/resources/gamification-vs-crm-bonus-campaigns" },
    ],
  },
  {
    group: "Use Cases",
    pages: [
      { title: "Casino Gamification Use Cases", path: "/resources/casino-gamification-use-cases" },
      { title: "Sportsbook Gamification Use Cases", path: "/resources/sportsbook-gamification-use-cases" },
      { title: "Cross-Product Missions", path: "/resources/cross-product-missions-examples" },
    ],
  },
  {
    group: "Technical Guides",
    pages: [
      { title: "Gamifly API Integration Flow", path: "/resources/gamifly-api-integration-flow" },
      { title: "Sample Event Payloads", path: "/resources/sample-igaming-gamification-event-payload" },
      { title: "Demo Screenshots", path: "/resources/gamifly-demo-screenshots" },
      { title: "Case Study", path: "/resources/anonymous-operator-gamification-case-study" },
    ],
  },
];

function Index() {
  return (
    <div
      className="flex flex-col min-h-screen items-center py-20 px-6"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <div className="mb-12">
        <img src="/logo.png" alt="Gamifly" className="h-16 w-auto" />
      </div>

      <div className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold mb-8 text-gray-900 border-b pb-4">
          Site Directory (Sitemap)
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sitePages.map((section) => (
            <div key={section.group}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                {section.group}
              </h2>
              <ul className="space-y-3">
                {section.pages.map((page) => (
                  <li key={page.path}>
                    <Link
                      to={page.path}
                      className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

