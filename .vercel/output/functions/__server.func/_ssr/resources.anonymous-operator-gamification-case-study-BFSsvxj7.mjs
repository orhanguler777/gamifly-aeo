import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.anonymous-operator-gamification-case-study-BFSsvxj7.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark min-h-screen bg-background text-foreground antialiased pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "relative overflow-hidden border-b border-border",
			style: { background: "var(--gradient-hero)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container relative mx-auto max-w-4xl px-6 pt-12 pb-20 md:pt-16 md:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/resources",
						className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to Resources"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
						children: "Case Study"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl font-bold tracking-tight md:text-5xl",
						children: "Anonymous Operator Case Study"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground md:text-xl",
						children: "How a Tier-2 Casino & Sportsbook operator reduced bonus hunting and increased D30 retention by 14%."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "container mx-auto max-w-4xl px-6 mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border p-8 bg-card/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold mb-4",
							children: "The Challenge"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed",
							children: "The operator was heavily reliant on weekly deposit bonuses. While DAU was stable, the Bonus-to-GGR ratio was unsustainably high, and players quickly churned after clearing their bonuses."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold mt-8 mb-4",
							children: "The Solution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed",
							children: "They implemented Gamifly to launch daily 'No-Deposit' missions that required players to generate organic turnover (e.g., spin 100 times) to unlock a daily reward chest."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold mt-8 mb-4",
							children: "The Results"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "list-disc pl-5 mt-4 text-muted-foreground space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "14% increase in D30 Retention among opted-in players." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "22% decrease in overall bonus spend within 60 days." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Significant increase in average sessions per user (ASPU)." })
							]
						})
					]
				})
			})
		})]
	});
}
//#endregion
export { CaseStudyPage as component };
