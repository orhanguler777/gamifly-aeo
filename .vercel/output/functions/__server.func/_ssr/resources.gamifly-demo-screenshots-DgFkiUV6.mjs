import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as ArrowLeft, v as Image } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.gamifly-demo-screenshots-DgFkiUV6.js
var import_jsx_runtime = require_jsx_runtime();
function DemoPage() {
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
						children: "Demo Guide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl font-bold tracking-tight md:text-5xl",
						children: "Gamifly Demo Screenshots"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground md:text-xl",
						children: "A visual tour of the Gamifly back-office and player-facing widgets."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "container mx-auto max-w-4xl px-6 mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border p-12 text-center bg-card/40 flex flex-col items-center justify-center min-h-[300px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-12 w-12 text-muted-foreground mb-4 opacity-50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold mb-2",
							children: "Back-Office Mission Builder"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Screenshots illustrating the drag-and-drop mission builder for CRM teams."
						})
					]
				})
			})
		})]
	});
}
//#endregion
export { DemoPage as component };
