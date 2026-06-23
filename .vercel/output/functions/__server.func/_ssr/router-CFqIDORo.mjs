import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as ScrollRestoration, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$4 } from "./resources_._slug-CxE_wYIR.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CFqIDORo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-MZCJy8cg.css";
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
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Gamifly Resources is a knowledge hub for iGaming operators to boost player engagement and retention."
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Gamifly Resources is a knowledge hub for iGaming operators to boost player engagement and retention."
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
				content: "@Lovable"
			},
			{
				name: "twitter:title",
				content: "Lovable App"
			},
			{
				name: "twitter:description",
				content: "Gamifly Resources is a knowledge hub for iGaming operators to boost player engagement and retention."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/28d92b26-5b0b-475d-9d34-e28455aea608/id-preview-407052dc--2bc14a9e-1f4e-4da0-8e20-d5f64752c357.lovable.app-1782126288027.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/28d92b26-5b0b-475d-9d34-e28455aea608/id-preview-407052dc--2bc14a9e-1f4e-4da0-8e20-d5f64752c357.lovable.app-1782126288027.png"
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
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$2 = () => import("./features-DMumUYss.mjs");
var Route$2 = createFileRoute("/features")({
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
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-_TNdm3Fq.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Your App" },
		{
			name: "description",
			content: "Replace this with a one-sentence description of your app."
		},
		{
			property: "og:title",
			content: "Your App"
		},
		{
			property: "og:description",
			content: "Replace this with a one-sentence description of your app."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./resources.index-CmIiA8-s.mjs");
var faqs = [
	{
		q: "What is iGaming gamification?",
		a: "iGaming gamification is the use of missions, campaigns, badges, tournaments, leaderboards, levels, rewards, progress mechanics, and personalized journeys inside casino and sportsbook platforms to increase player engagement, activity, retention, and lifetime value."
	},
	{
		q: "Why do iGaming operators need gamification?",
		a: "iGaming operators use gamification to increase session frequency, retention, product differentiation, cross-product activity, and player lifetime value (LTV) while reducing marketing bonus dependency and player acquisition costs."
	},
	{
		q: "How does gamification improve player retention?",
		a: "Gamification builds structural retention loops. Daily missions, progression levels, tournament cycles, and personalized streaks give players clear, rewarding goals to return tomorrow, improving 7-day, 30-day, and 90-day retention cohorts."
	},
	{
		q: "Can gamification work for both casino and sportsbook?",
		a: "Yes. Gamification is vertical-agnostic. For casinos, it powers slots challenges and live-dealer tournaments. For sportsbooks, it powers bet-builder missions, live-betting streaks, and multi-sport leaderboard campaigns."
	},
	{
		q: "How does Gamifly help operators?",
		a: "Gamifly is an AI-powered gamification engine that connects to casino and sportsbook platforms via API/SDK. It enables product, CRM, and marketing teams to configure and launch real-time missions, campaigns, tournaments, badges, and loyalty shops from a single dashboard without development overhead."
	}
];
var Route = createFileRoute("/resources/")({
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
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var FeaturesRoute = Route$2.update({
	id: "/features",
	path: "/features",
	getParentRoute: () => Route$3
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$3
});
var ResourcesIndexRoute = Route.update({
	id: "/resources/",
	path: "/resources/",
	getParentRoute: () => Route$3
});
var rootRouteChildren = {
	IndexRoute,
	FeaturesRoute,
	ResourcesSlugRoute: Route$4.update({
		id: "/resources_/$slug",
		path: "/resources/$slug",
		getParentRoute: () => Route$3
	}),
	ResourcesIndexRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
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
