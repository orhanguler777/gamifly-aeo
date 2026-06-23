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
      { property: "og:url", content: "https://gamifly.co/" },
    ],
    links: [
      { rel: "canonical", href: "https://gamifly.co/" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    </div>
  );
}
