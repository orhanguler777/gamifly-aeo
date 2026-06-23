import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CircleCheck, O as ArrowRight, k as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as articles, t as Route } from "./resources_._slug-CxE_wYIR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources_._slug-g4U7_Ajd.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const a = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark min-h-screen bg-background text-foreground antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "relative overflow-hidden border-b border-border",
			style: { background: "var(--gradient-hero)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.7_0.2_265/0.3)_1px,transparent_0)] [background-size:32px_32px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container relative mx-auto max-w-3xl px-6 pt-12 pb-20 md:pt-16 md:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/resources",
						className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "All Resources"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
						children: a.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl font-bold tracking-tight md:text-5xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-clip-text text-transparent",
							style: { backgroundImage: "var(--gradient-brand)" },
							children: a.h1
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground md:text-xl",
						children: a.intro
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "container mx-auto max-w-3xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "-mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8",
					style: { background: "var(--gradient-card)" },
					"aria-label": "Key takeaways",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Key Takeaways"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: a.tldr.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-base text-foreground/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
						}, t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "py-16",
					children: a.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold tracking-tight md:text-3xl",
								children: s.h2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-4",
								children: s.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base leading-relaxed text-foreground/85",
									children: p
								}, i))
							}),
							s.h3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-5",
								children: s.h3.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border p-5",
									style: { background: "var(--gradient-card)" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold",
										children: sub.h3
									}), sub.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: p
									}, i))]
								}, sub.h3))
							})
						]
					}, s.h2))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "pb-16",
					"aria-labelledby": "article-faq",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "article-faq",
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "Frequently asked questions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-6",
						children: a.faq.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border p-6 md:p-8",
							style: { background: "var(--gradient-card)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold md:text-lg",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-muted-foreground",
								children: f.a
							})]
						}, f.q))
					})]
				}),
				a.related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "pb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold tracking-tight md:text-3xl",
						children: "Related resources"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-3",
						children: a.related.map((slug) => {
							const r = articles[slug];
							if (!r) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/resources/$slug",
								params: { slug },
								className: "group rounded-xl border border-border p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50",
								style: { background: "var(--gradient-card)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-primary",
										children: r.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-base font-semibold",
										children: r.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-1 text-sm text-primary",
										children: ["Read", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
									})
								]
							}, slug);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "pb-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl border border-border p-10 text-center md:p-14",
						style: { background: "var(--gradient-hero)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 opacity-50 blur-3xl",
								style: { background: "var(--gradient-brand)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "relative text-2xl font-bold tracking-tight md:text-4xl",
								children: "Ready to put this into production?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mx-auto mt-4 max-w-xl text-base text-muted-foreground",
								children: "Gamifly helps operators build missions, campaigns, badges, tournaments, rewards, and personalized journeys into their casino and sportsbook experience."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-7 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "border-0 text-primary-foreground shadow-[var(--shadow-glow)]",
									style: { background: "var(--gradient-brand)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/contact",
										children: "Book a Demo"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "bg-card/40 backdrop-blur",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/features",
										children: "Explore Gamifly Features"
									})
								})]
							})
						]
					})
				})
			]
		})]
	});
}
//#endregion
export { ArticlePage as component };
