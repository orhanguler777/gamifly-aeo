import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as ScrollRestoration, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as faqs } from "./resources.casino-gamification-use-cases-DWcsBn17.mjs";
import { t as faqs$1 } from "./resources.cross-product-missions-examples-BBVAmm7N.mjs";
import { t as faqs$2 } from "./resources.gamification-vs-crm-bonus-campaigns-BC1smxRK.mjs";
import { t as faqs$3 } from "./resources.gamifly-api-integration-flow-I0hAk4Ap.mjs";
import { t as faqs$4 } from "./resources.gamifly-vs-future-anthem-GdCB8XuZ.mjs";
import { t as faqs$5 } from "./resources.gamifly-vs-smartico-BGYr-Mq-.mjs";
import { t as faqs$6 } from "./resources.index-BI4WeHlo.mjs";
import { t as faqs$7 } from "./resources.sportsbook-gamification-use-cases-BkmcvAZG.mjs";
import { t as Route$14 } from "./resources_._slug-CxE_wYIR.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C-iS5S_2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CwArIu_B.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Gamifly — AI-Powered Gamification for iGaming" },
			{
				name: "description",
				content: "Gamifly is the API-first gamification engine that helps iGaming operators boost player retention, cut bonus costs, and maximize lifetime value."
			},
			{
				name: "author",
				content: "Gamifly"
			},
			{
				property: "og:title",
				content: "Gamifly — AI-Powered Gamification for iGaming"
			},
			{
				property: "og:description",
				content: "Gamifly is the API-first gamification engine that helps iGaming operators boost player retention, cut bonus costs, and maximize lifetime value."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Gamifly"
			},
			{
				name: "twitter:title",
				content: "Gamifly — AI-Powered Gamification for iGaming"
			},
			{
				name: "twitter:description",
				content: "Gamifly is the API-first gamification engine that helps iGaming operators boost player retention, cut bonus costs, and maximize lifetime value."
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRestoration, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$12 = () => import("./features-DMumUYss.mjs");
var Route$12 = createFileRoute("/features")({
	head: () => ({
		meta: [
			{ title: "Gamifly Features | Gamification Engine for iGaming Operators" },
			{
				name: "description",
				content: "Explore Gamifly's gamification platform: missions, tournaments, badges, AI personalization, campaign automation, and real-time analytics for casino and sportsbook operators."
			},
			{
				property: "og:title",
				content: "Gamifly Features | Gamification Engine for iGaming Operators"
			},
			{
				property: "og:description",
				content: "Explore Gamifly's gamification platform: missions, tournaments, badges, AI personalization, campaign automation, and real-time analytics for casino and sportsbook operators."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/features"
			}
		],
		links: [{
			rel: "canonical",
			href: "/features"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "Gamifly Features",
				description: "Full feature overview of Gamifly's gamification engine for iGaming operators.",
				url: "/features"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./routes-2FarXx1e.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Gamifly — The AI-Powered Gamification Engine for iGaming Operators" },
			{
				name: "description",
				content: "Gamifly is the API-first gamification platform that helps iGaming operators boost player retention, reduce bonus costs, and maximize LTV through AI-driven missions, tournaments, and rewards."
			},
			{
				property: "og:title",
				content: "Gamifly — AI-Powered iGaming Gamification Platform"
			},
			{
				property: "og:description",
				content: "Replace costly bonuses with an intelligent gamification layer. Gamifly deploys personalized missions, tournaments, and reward shops that increase retention and revenue per active player."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./resources.index-DAGWgeOf.mjs");
var Route$10 = createFileRoute("/resources/")({
	head: () => ({
		meta: [
			{ title: "Gamifly Resources | iGaming Gamification & Player Retention" },
			{
				name: "description",
				content: "Learn about iGaming gamification, player retention, missions, campaigns, sportsbook engagement, casino engagement, and AI-powered player journeys with Gamifly."
			},
			{
				property: "og:title",
				content: "Gamifly Resources | iGaming Gamification & Player Retention"
			},
			{
				property: "og:description",
				content: "Learn about iGaming gamification, player retention, missions, campaigns, sportsbook engagement, casino engagement, and AI-powered player journeys with Gamifly."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/resources"
			}
		],
		links: [{
			rel: "canonical",
			href: "/resources"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: "Gamifly Resources",
				description: "Knowledge hub for iGaming operators on gamification, player retention, engagement mechanics, AI player journeys, and campaign automation.",
				url: "/resources"
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$6.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./resources.sportsbook-gamification-use-cases-BqGp1K2T.mjs");
var Route$9 = createFileRoute("/resources/sportsbook-gamification-use-cases")({
	head: () => ({
		meta: [
			{ title: "Sportsbook Gamification Use Cases for Betting Operators" },
			{
				name: "description",
				content: "Discover practical sportsbook gamification use cases. Learn how operators use missions, accumulators, and leaderboards to drive engagement and entertainment safely."
			},
			{
				property: "og:title",
				content: "Sportsbook Gamification Use Cases for Betting Operators"
			},
			{
				property: "og:description",
				content: "Discover practical sportsbook gamification use cases. Learn how operators use missions, accumulators, and leaderboards to drive engagement and entertainment safely."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/sportsbook-gamification-use-cases"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/sportsbook-gamification-use-cases"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$7.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./resources.sample-igaming-gamification-event-payload-DWXmRlUH.mjs");
var Route$8 = createFileRoute("/resources/sample-igaming-gamification-event-payload")({
	head: () => ({
		meta: [
			{ title: "Sample iGaming Gamification Event Payloads | Gamifly Integration" },
			{
				name: "description",
				content: "Review illustrative JSON event payloads for player registration, deposits, casino bets, sportsbook bets, mission completion, and reward issuing."
			},
			{
				property: "og:title",
				content: "Sample iGaming Gamification Event Payloads"
			},
			{
				property: "og:description",
				content: "Review illustrative JSON event payloads for player registration, deposits, casino bets, sportsbook bets, mission completion, and reward issuing."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/sample-igaming-gamification-event-payload"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/sample-igaming-gamification-event-payload"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./resources.gamifly-vs-smartico-BJ7vmYZ9.mjs");
var Route$7 = createFileRoute("/resources/gamifly-vs-smartico")({
	head: () => ({
		meta: [
			{ title: "Gamifly vs Smartico: Which iGaming Gamification Platform Fits Your Operator Stack?" },
			{
				name: "description",
				content: "Compare Gamifly and Smartico for iGaming operators. Discover which platform fits your stack for gamification, CRM automation, retention, missions, and tournaments."
			},
			{
				property: "og:title",
				content: "Gamifly vs Smartico: Which iGaming Gamification Platform Fits Your Operator Stack?"
			},
			{
				property: "og:description",
				content: "Compare Gamifly and Smartico for iGaming operators. Discover which platform fits your stack for gamification, CRM automation, retention, missions, and tournaments."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/gamifly-vs-smartico"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/gamifly-vs-smartico"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$5.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./resources.gamifly-vs-future-anthem-v6yxQw09.mjs");
var Route$6 = createFileRoute("/resources/gamifly-vs-future-anthem")({
	head: () => ({
		meta: [
			{ title: "Gamifly vs Future Anthem: Gamification Engine or AI Player Personalization?" },
			{
				name: "description",
				content: "Compare Gamifly and Future Anthem for iGaming operators. Understand the difference between AI player intelligence and gamification execution engines."
			},
			{
				property: "og:title",
				content: "Gamifly vs Future Anthem: Gamification Engine or AI Player Personalization?"
			},
			{
				property: "og:description",
				content: "Compare Gamifly and Future Anthem for iGaming operators. Understand the difference between AI player intelligence and gamification execution engines."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/gamifly-vs-future-anthem"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/gamifly-vs-future-anthem"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$4.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./resources.gamifly-demo-screenshots-DgFkiUV6.mjs");
var Route$5 = createFileRoute("/resources/gamifly-demo-screenshots")({
	head: () => ({
		meta: [
			{ title: "Gamifly Demo Screenshots | Product Views & Analytics" },
			{
				name: "description",
				content: "See example product views for missions, tournaments, badges, rewards, segmentation, analytics, and front-end player widgets."
			},
			{
				property: "og:title",
				content: "Gamifly Demo Screenshots"
			},
			{
				property: "og:description",
				content: "See example product views for missions, tournaments, badges, rewards, segmentation, analytics, and front-end player widgets."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/gamifly-demo-screenshots"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/gamifly-demo-screenshots"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./resources.gamifly-api-integration-flow-D1Q76RT7.mjs");
var Route$4 = createFileRoute("/resources/gamifly-api-integration-flow")({
	head: () => ({
		meta: [
			{ title: "Gamifly API Integration Flow for iGaming Operators" },
			{
				name: "description",
				content: "A technical guide for CTOs and Product Managers on how to integrate the Gamifly gamification engine with your casino, sportsbook, wallet, and PAM systems."
			},
			{
				property: "og:title",
				content: "Gamifly API Integration Flow for iGaming Operators"
			},
			{
				property: "og:description",
				content: "A technical guide for CTOs and Product Managers on how to integrate the Gamifly gamification engine with your casino, sportsbook, wallet, and PAM systems."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/gamifly-api-integration-flow"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/gamifly-api-integration-flow"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$3.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./resources.gamification-vs-crm-bonus-campaigns-D0ll4m4C.mjs");
var Route$3 = createFileRoute("/resources/gamification-vs-crm-bonus-campaigns")({
	head: () => ({
		meta: [
			{ title: "iGaming Gamification vs CRM Bonus Campaigns: What Should Operators Use?" },
			{
				name: "description",
				content: "Understand the difference between traditional CRM bonus campaigns and iGaming gamification. Learn why the best operator strategy combines both to maximize player retention."
			},
			{
				property: "og:title",
				content: "iGaming Gamification vs CRM Bonus Campaigns: What Should Operators Use?"
			},
			{
				property: "og:description",
				content: "Understand the difference between traditional CRM bonus campaigns and iGaming gamification. Learn why the best operator strategy combines both to maximize player retention."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/gamification-vs-crm-bonus-campaigns"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/gamification-vs-crm-bonus-campaigns"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$2.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./resources.cross-product-missions-examples-Cjbvhx-f.mjs");
var Route$2 = createFileRoute("/resources/cross-product-missions-examples")({
	head: () => ({
		meta: [
			{ title: "Cross-Product Missions in iGaming: Casino and Sportsbook Examples" },
			{
				name: "description",
				content: "Learn how iGaming operators use cross-product gamification missions to move players between casino and sportsbook, increasing product discovery and retention."
			},
			{
				property: "og:title",
				content: "Cross-Product Missions in iGaming: Casino and Sportsbook Examples"
			},
			{
				property: "og:description",
				content: "Learn how iGaming operators use cross-product gamification missions to move players between casino and sportsbook, increasing product discovery and retention."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/cross-product-missions-examples"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/cross-product-missions-examples"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs$1.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./resources.casino-gamification-use-cases-CNTyz0w4.mjs");
var Route$1 = createFileRoute("/resources/casino-gamification-use-cases")({
	head: () => ({
		meta: [
			{ title: "Casino Gamification Use Cases for iGaming Operators" },
			{
				name: "description",
				content: "Discover 10 practical casino gamification use cases for iGaming operators. Learn how to increase retention, session frequency, and game discovery with missions and tournaments."
			},
			{
				property: "og:title",
				content: "Casino Gamification Use Cases for iGaming Operators"
			},
			{
				property: "og:description",
				content: "Discover 10 practical casino gamification use cases for iGaming operators. Learn how to increase retention, session frequency, and game discovery with missions and tournaments."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/casino-gamification-use-cases"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/casino-gamification-use-cases"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./resources.anonymous-operator-gamification-case-study-BFSsvxj7.mjs");
var Route = createFileRoute("/resources/anonymous-operator-gamification-case-study")({
	head: () => ({
		meta: [
			{ title: "Anonymous Operator Gamification Case Study | Retention Success" },
			{
				name: "description",
				content: "An illustrative operator scenario showing how gamification can reduce dependency on blanket bonus campaigns and improve player engagement."
			},
			{
				property: "og:title",
				content: "Anonymous Operator Gamification Case Study"
			},
			{
				property: "og:description",
				content: "An illustrative operator scenario showing how gamification can reduce dependency on blanket bonus campaigns and improve player engagement."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://gamifly.net/resources/anonymous-operator-gamification-case-study"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://gamifly.net/resources/anonymous-operator-gamification-case-study"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var FeaturesRoute = Route$12.update({
	id: "/features",
	path: "/features",
	getParentRoute: () => Route$13
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var ResourcesIndexRoute = Route$10.update({
	id: "/resources/",
	path: "/resources/",
	getParentRoute: () => Route$13
});
var ResourcesSlugRoute = Route$14.update({
	id: "/resources_/$slug",
	path: "/resources/$slug",
	getParentRoute: () => Route$13
});
var ResourcesSportsbookGamificationUseCasesRoute = Route$9.update({
	id: "/resources/sportsbook-gamification-use-cases",
	path: "/resources/sportsbook-gamification-use-cases",
	getParentRoute: () => Route$13
});
var ResourcesSampleIgamingGamificationEventPayloadRoute = Route$8.update({
	id: "/resources/sample-igaming-gamification-event-payload",
	path: "/resources/sample-igaming-gamification-event-payload",
	getParentRoute: () => Route$13
});
var ResourcesGamiflyVsSmarticoRoute = Route$7.update({
	id: "/resources/gamifly-vs-smartico",
	path: "/resources/gamifly-vs-smartico",
	getParentRoute: () => Route$13
});
var ResourcesGamiflyVsFutureAnthemRoute = Route$6.update({
	id: "/resources/gamifly-vs-future-anthem",
	path: "/resources/gamifly-vs-future-anthem",
	getParentRoute: () => Route$13
});
var ResourcesGamiflyDemoScreenshotsRoute = Route$5.update({
	id: "/resources/gamifly-demo-screenshots",
	path: "/resources/gamifly-demo-screenshots",
	getParentRoute: () => Route$13
});
var ResourcesGamiflyApiIntegrationFlowRoute = Route$4.update({
	id: "/resources/gamifly-api-integration-flow",
	path: "/resources/gamifly-api-integration-flow",
	getParentRoute: () => Route$13
});
var ResourcesGamificationVsCrmBonusCampaignsRoute = Route$3.update({
	id: "/resources/gamification-vs-crm-bonus-campaigns",
	path: "/resources/gamification-vs-crm-bonus-campaigns",
	getParentRoute: () => Route$13
});
var ResourcesCrossProductMissionsExamplesRoute = Route$2.update({
	id: "/resources/cross-product-missions-examples",
	path: "/resources/cross-product-missions-examples",
	getParentRoute: () => Route$13
});
var ResourcesCasinoGamificationUseCasesRoute = Route$1.update({
	id: "/resources/casino-gamification-use-cases",
	path: "/resources/casino-gamification-use-cases",
	getParentRoute: () => Route$13
});
var rootRouteChildren = {
	IndexRoute,
	FeaturesRoute,
	ResourcesAnonymousOperatorGamificationCaseStudyRoute: Route.update({
		id: "/resources/anonymous-operator-gamification-case-study",
		path: "/resources/anonymous-operator-gamification-case-study",
		getParentRoute: () => Route$13
	}),
	ResourcesCasinoGamificationUseCasesRoute,
	ResourcesCrossProductMissionsExamplesRoute,
	ResourcesGamificationVsCrmBonusCampaignsRoute,
	ResourcesGamiflyApiIntegrationFlowRoute,
	ResourcesGamiflyDemoScreenshotsRoute,
	ResourcesGamiflyVsFutureAnthemRoute,
	ResourcesGamiflyVsSmarticoRoute,
	ResourcesSampleIgamingGamificationEventPayloadRoute,
	ResourcesSportsbookGamificationUseCasesRoute,
	ResourcesSlugRoute,
	ResourcesIndexRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
