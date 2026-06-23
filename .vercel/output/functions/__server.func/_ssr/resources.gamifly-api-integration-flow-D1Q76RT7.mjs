import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CircleCheck, S as Database, h as LayoutTemplate, k as ArrowLeft, p as Network, t as Zap, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as faqs } from "./resources.gamifly-api-integration-flow-I0hAk4Ap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.gamifly-api-integration-flow-D1Q76RT7.js
var import_jsx_runtime = require_jsx_runtime();
var events = [
	{
		name: "player_registered",
		desc: "Triggered when a new user completes KYC/signup."
	},
	{
		name: "deposit_completed",
		desc: "Triggered when funds hit the wallet. Used for deposit missions."
	},
	{
		name: "bet_placed",
		desc: "Triggered upon wager placement (casino spin or sports ticket)."
	},
	{
		name: "casino_round_completed",
		desc: "Contains wager, win amount, multiplier, and game ID."
	},
	{
		name: "sportsbook_bet_settled",
		desc: "Contains settlement status (win/loss/cashout) and final odds."
	},
	{
		name: "mission_completed",
		desc: "Outbound webhook from Gamifly to Operator CRM."
	},
	{
		name: "reward_claimed",
		desc: "Outbound webhook signaling a wallet credit is required."
	}
];
function IntegrationFlowPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark min-h-screen bg-background text-foreground antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "relative overflow-hidden border-b border-border",
			style: { background: "var(--gradient-hero)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.7_0.2_265/0.3)_1px,transparent_0)] [background-size:32px_32px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container relative mx-auto max-w-4xl px-6 pt-12 pb-20 md:pt-16 md:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to Home"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
						children: "Technical Documentation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl",
						children: "Gamifly API Integration Flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground md:text-xl",
						children: "A high-level technical playbook explaining how iGaming operators integrate Gamifly with their PAM, wallet, CRM, and front-end architecture."
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "container mx-auto max-w-4xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative z-10 -mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8",
					style: { background: "var(--gradient-card)" },
					"aria-label": "How does Gamifly integrate with an iGaming platform?",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold text-foreground",
						children: "How does Gamifly integrate with an iGaming platform?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-foreground/90",
						children: "Gamifly integrates via a decoupled, API-first architecture. The operator's Player Account Management (PAM) system streams real-time player actions (spins, bets, deposits) to Gamifly via Kafka, RabbitMQ, or REST Webhooks. Gamifly's rule engine instantly calculates mission progress and leaderboard rankings, pushing outbound webhooks back to the operator to issue rewards, while simultaneously updating front-end Web Components injected into the casino lobby."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Key Takeaways"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: [
							"Integration is modular: connect events, configure rules, embed widgets.",
							"Gamifly is non-custodial and does not hold actual player funds.",
							"Asynchronous event streaming ensures zero latency impact on core gameplay.",
							"CRM systems are enriched with behavioral gamification data via outbound webhooks."
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-base text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-12 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight",
						children: "Core Integration Components"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-6 bg-card/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-6 w-6 text-primary mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold",
										children: "Player Profile Sync"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Operators push anonymized player IDs and segmentation tags to Gamifly. No PII (Personally Identifiable Information) is required."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-6 bg-card/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-6 w-6 text-primary mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold",
										children: "Event Ingestion"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "The core pipeline. Betting, gaming, and deposit events stream into Gamifly's high-throughput intake API or message broker queue."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-6 bg-card/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6 text-primary mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold",
										children: "Wallet / Reward API"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "When a player earns a reward, Gamifly sends an authenticated API call to your PAM/Wallet asking it to credit the player account."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-6 bg-card/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutTemplate, { className: "h-6 w-6 text-primary mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold",
										children: "Front-End Widgets"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Pre-built, responsive UI components (Web Components/Iframes) that render mission progress, notifications, and leaderboards natively in your lobby."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-6 bg-card/40 md:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "h-6 w-6 text-primary mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold",
										children: "CRM / Webhook Triggers"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Outbound data feeds sending milestones (e.g., \"Player reached Level 10\") back to the operator's marketing stack for email/SMS triggering."
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-16 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight mb-8",
						children: "Step-by-Step Integration Flow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent",
						children: [
							{
								title: "Define Player & Event Data",
								desc: "Map your internal PAM event payloads to Gamifly's standard schema. Decide whether to use REST webhooks or Kafka for ingestion."
							},
							{
								title: "Connect the Event Stream",
								desc: "Establish the secure server-to-server connection. Begin streaming live 'bet_placed' and 'round_completed' events to the Gamifly staging environment."
							},
							{
								title: "Configure Reward Rules",
								desc: "Set up the outbound integration. Provide Gamifly with the API endpoint to hit when a player successfully completes a mission and needs to be credited."
							},
							{
								title: "Launch Missions via Dashboard",
								desc: "Your CRM/Product team logs into the Gamifly back-office to create the first test campaigns, setting odds criteria, game targeting, and reward values."
							},
							{
								title: "Embed Front-End Widgets",
								desc: "Inject the Gamifly lightweight JavaScript snippet into your front-end repository. Style the widgets using CSS variables to match your brand."
							},
							{
								title: "Track KPIs & Optimize",
								desc: "Go live. Monitor engagement through the Gamifly analytics dashboard and sync completion events back to your data lake."
							}
						].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-border shadow-[var(--shadow-card)]",
								style: { background: "var(--gradient-card)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-lg mb-1",
									children: step.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: step.desc
								})]
							})]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-16 border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold tracking-tight mb-6",
							children: "Standard Event Dictionary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-8 text-muted-foreground",
							children: "Illustrative examples of the core event payloads operators stream to the Gamifly engine."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto rounded-xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-muted/50 border-b border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-4 font-semibold text-muted-foreground",
										children: "Event Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-4 font-semibold text-foreground",
										children: "Description / Illustrative Payload Data"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
									className: "divide-y divide-border/50",
									children: events.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 font-medium font-mono text-primary",
										children: e.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 text-muted-foreground",
										children: e.desc
									})] }, i))
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-12 border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border p-8 md:p-12",
						style: { background: "var(--gradient-hero)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold tracking-tight",
								children: "High-Level Architecture Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-base text-muted-foreground leading-relaxed",
								children: [
									"The architecture is fundamentally a ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "tri-directional loop" }),
									":"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm text-muted-foreground leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold",
											children: "1"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Ingestion (Backend-to-Backend):" }), " The operator's backend streams activity to Gamifly asynchronously. Gameplay is never blocked waiting for gamification responses."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm text-muted-foreground leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold",
											children: "2"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Resolution (Gamifly-to-Frontend):" }), " Gamifly's rule engine processes the event and pushes UI state updates directly to the player's browser/app via WebSockets or polling, creating instant visual feedback."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm text-muted-foreground leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold",
											children: "3"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Execution (Gamifly-to-Backend):" }),
											" Upon mission completion, Gamifly triggers the operator's reward API endpoint (e.g., ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "POST /api/v1/wallet/credit" }),
											") with a securely signed payload to issue the actual prize."
										] })]
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-12 border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold text-foreground",
									children: "Security and Compliance Considerations"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed mb-4",
								children: "Because Gamifly triggers financial rewards, security is paramount. All outbound webhook requests from Gamifly to the operator's PAM are cryptographically signed (HMAC-SHA256) ensuring request authenticity."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Data Privacy: Gamifly does not require PII (names, emails, passwords). We operate entirely on anonymized Player IDs or Hash IDs. This guarantees GDPR compliance and simplifies regulatory data processing requirements."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-16 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight mb-8",
						children: "Frequently Asked Questions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6",
						children: faqs.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border p-6",
							style: { background: "var(--gradient-card)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: faq.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base text-muted-foreground leading-relaxed",
								children: faq.a
							})]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold tracking-tight mb-6",
						children: "Explore Further"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/resources/$slug",
								params: { slug: "gamification-integration-checklist" },
								className: "group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold group-hover:text-primary transition-colors",
									children: "Integration Checklist"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "The complete list of requirements before starting development."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/resources/$slug",
								params: { slug: "gamification-kpis-for-operators" },
								className: "group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold group-hover:text-primary transition-colors",
									children: "Gamification KPIs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "How to measure the technical and commercial ROI."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/features",
								className: "group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold group-hover:text-primary transition-colors",
									children: "Gamifly Features"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Explore our API-first gamification engine capabilities."
								})]
							})
						]
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
								className: "relative text-3xl font-bold tracking-tight md:text-4xl",
								children: "Ready to review our API documentation?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mx-auto mt-4 max-w-xl text-lg text-muted-foreground",
								children: "Connect with our technical account management team to access our full OpenAPI specification and sandbox environment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-8 flex flex-wrap justify-center gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "border-0 text-primary-foreground shadow-[var(--shadow-glow)] px-8",
									style: { background: "var(--gradient-brand)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Request API Docs"
									})
								})
							})
						]
					})
				})
			]
		})]
	});
}
//#endregion
export { IntegrationFlowPage as component };
