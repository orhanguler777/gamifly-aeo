import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CircleCheck, k as ArrowLeft, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as faqs } from "./resources.sportsbook-gamification-use-cases-BkmcvAZG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.sportsbook-gamification-use-cases-BqGp1K2T.js
var import_jsx_runtime = require_jsx_runtime();
var useCases = [
	{
		title: "Matchday Missions",
		goal: "Drive engagement and entertainment around a specific marquee event (e.g., Champions League Final).",
		mechanic: "Complete 3 bets on the highlighted match to earn a badge.",
		action: "Place a pre-match bet, a live bet, and a bet builder on the specific match (minimum odds apply).",
		reward: "Exclusive Matchday Badge and a Free Bet.",
		kpi: "Event Turnover, Mission Opt-in Rate."
	},
	{
		title: "Accumulator Challenges",
		goal: "Increase accumulator (parlay) participation for higher margin entertainment.",
		mechanic: "The Weekend Acca Builder.",
		action: "Place a 4-leg accumulator on weekend football matches.",
		reward: "Profit boost token for the next accumulator.",
		kpi: "Accumulator Bet Count, Margin per User."
	},
	{
		title: "Live Betting Missions",
		goal: "Increase in-play engagement and session duration.",
		mechanic: "In-Play Explorer.",
		action: "Place 3 live bets during the second half of a designated fixture.",
		reward: "Virtual Coins for the Reward Shop.",
		kpi: "Live Betting Turnover, In-Play Active Users."
	},
	{
		title: "Sport-Specific Challenges",
		goal: "Cross-sell users to different sports or leagues.",
		mechanic: "The Tennis Grand Slam Journey.",
		action: "Place a qualifying bet on 5 different matches during Wimbledon.",
		reward: "Tennis Expert Badge and a sports bonus.",
		kpi: "Cross-Sport Activity Rate, Event Specific GGR."
	},
	{
		title: "Prediction Streaks",
		goal: "Build daily/weekly habit-forming entertainment without requiring high spend.",
		mechanic: "Free-to-play Prediction Streak.",
		action: "Correctly predict the first goalscorer in the weekend's top match for 3 weeks in a row.",
		reward: "Scaling rewards (Week 1: Coins, Week 3: VIP Sports Package).",
		kpi: "Weekly Return Rate (D7 Retention), Opt-in Rate."
	},
	{
		title: "Tournament Leaderboards",
		goal: "Foster community competition based on skill or activity.",
		mechanic: "Highest Winning Odds Leaderboard.",
		action: "Place winning bets. The player with the highest winning odds ticket of the week climbs the leaderboard.",
		reward: "Share of a weekly prize pool.",
		kpi: "Leaderboard Page Views, Average Bet Odds."
	},
	{
		title: "Bet Builder Challenges",
		goal: "Educate players on high-entertainment bet builder features.",
		mechanic: "The Bet Builder Master.",
		action: "Create and place a custom bet builder with at least 3 selections.",
		reward: "Bet Builder Master Badge.",
		kpi: "Bet Builder Usage Rate, Feature Adoption."
	},
	{
		title: "Weekend Football Campaigns",
		goal: "Maximize activity during peak traffic windows.",
		mechanic: "Super Saturday Quest.",
		action: "Log in on Saturday and complete a 2-step mission across top European leagues.",
		reward: "Sunday Free Bet.",
		kpi: "Weekend Active Users, Saturday to Sunday Retention."
	},
	{
		title: "Re-activation Missions",
		goal: "Re-engage dormant players before major sporting events.",
		mechanic: "Welcome Back: World Cup Edition.",
		action: "Log in during the group stages to claim a mystery box.",
		reward: "Randomized reward (Free Bet, Coins, or Profit Boost).",
		kpi: "Reactivation Rate, Post-Event Retention."
	},
	{
		title: "Odds Boost Missions",
		goal: "Incentivize exploration of promotional markets.",
		mechanic: "Boost Hunter.",
		action: "Place a bet on 3 different 'Daily Boosted Odds' markets.",
		reward: "Gamifly Coins.",
		kpi: "Boosted Market Turnover."
	}
];
function SportsbookUseCasesPage() {
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
						children: "Operator Playbook"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl",
						children: "10 Sportsbook Gamification Use Cases for Operators"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground md:text-xl",
						children: "A practical guide to implementing missions, tournaments, and streaks to drive engagement, entertainment, and safe retention in your sportsbook."
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "container mx-auto max-w-4xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative z-10 -mt-10 rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] md:-mt-12 md:p-8",
					style: { background: "var(--gradient-card)" },
					"aria-label": "How can sportsbook operators use gamification?",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold text-foreground",
						children: "How can sportsbook operators use gamification?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-foreground/90",
						children: "Sportsbook operators use gamification to add a layer of structured entertainment over traditional betting markets. By offering real-time missions, free-to-play prediction streaks, and accumulator challenges, operators can guide players toward new sports or bet types (like live betting or bet builders). This shifts the player experience from purely transactional wagers to an engaging, rewarding journey, improving retention and session frequency safely."
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
							"Gamification drives adoption of high-margin products like bet builders and accumulators.",
							"Live betting missions increase in-play engagement and session duration.",
							"Free-to-play streaks are excellent for building daily retention safely.",
							"Gamifly handles the complex, low-latency event processing required for sportsbooks."
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
						children: "Why Sportsbook Gamification Matters"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground leading-relaxed",
						children: "Unlike casino games, sports betting is inherently tied to external, real-world events. Players often place a bet and close the app until the match is over. Gamification provides operators with tools to keep players engaged within the app before, during, and after the match. By introducing leaderboards, badges, and interactive missions, operators can increase entertainment value, encourage exploration of new betting markets, and build brand loyalty in a highly commoditized market."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-16 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight mb-8",
						children: "10 Practical Sportsbook Gamification Use Cases"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6",
						children: useCases.map((uc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border p-6 md:p-8",
							style: { background: "var(--gradient-card)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold",
									children: uc.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-sm mt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lg:col-span-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold text-primary mb-1",
											children: "Goal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground leading-relaxed",
											children: uc.goal
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lg:col-span-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold text-primary mb-1",
											children: "Example Mechanic"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground leading-relaxed",
											children: uc.mechanic
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lg:col-span-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold text-primary mb-1",
											children: "Player Action"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground leading-relaxed",
											children: uc.action
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lg:col-span-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold text-primary mb-1",
											children: "Reward Type"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground leading-relaxed",
											children: uc.reward
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lg:col-span-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold text-primary mb-1",
											children: "KPI to Measure"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground leading-relaxed font-mono text-xs bg-muted/50 p-1 rounded",
											children: uc.kpi
										})]
									})
								]
							})]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-16 border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold tracking-tight mb-6",
							children: "Example: A Marquee Matchday Campaign"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-8 text-muted-foreground",
							children: "How multiple gamification mechanics combine for a major sporting event."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto rounded-xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-muted/50 border-b border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4 font-semibold text-muted-foreground",
											children: "Timing"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4 font-semibold text-foreground",
											children: "Mission Trigger"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4 font-semibold text-foreground",
											children: "Eligibility Rules"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4 font-semibold text-foreground",
											children: "Operator Value"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
									className: "divide-y divide-border/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 font-medium",
												children: "Pre-Match (Friday)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-muted-foreground",
												children: "Place a Bet Builder on the upcoming match."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-muted-foreground",
												children: "Min odds 2.0, pre-match only."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-emerald-500 font-medium",
												children: "Early liquidity & engagement"
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 font-medium",
												children: "Matchday (Saturday)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-muted-foreground",
												children: "Free-to-play Prediction: Guess the first goalscorer."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-muted-foreground",
												children: "Open to all active accounts."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-emerald-500 font-medium",
												children: "Drives app logins before kickoff"
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 font-medium",
												children: "In-Play (Saturday)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-muted-foreground",
												children: "Place a Live Bet during the second half."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-muted-foreground",
												children: "Min odds 1.50, live markets only."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-emerald-500 font-medium",
												children: "Increases session duration"
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 font-medium",
												children: "Post-Match (Sunday)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-muted-foreground",
												children: "Reward issued for completing all 3 steps."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-muted-foreground",
												children: "Must complete all prior missions."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-emerald-500 font-medium",
												children: "Retention for Sunday matches"
											})
										] })
									]
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-12 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight",
						children: "How Gamifly Supports Sportsbook Gamification"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground leading-relaxed",
						children: "Gamifly is engineered for the complex data demands of sportsbooks. It natively supports eligibility rules like minimum odds, bet types (single, accumulator, bet builder), and market states (pre-match vs. live). Connecting via fast event streams (Kafka/Webhooks), Gamifly processes bet placements, cashouts, and settlements in real-time, instantly updating player progress bars and leaderboards without manual CRM intervention."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "py-12 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold tracking-tight",
						children: "KPIs Sportsbook Operators Should Track"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-4 md:grid-cols-3",
						children: [
							"Bet Builder Adoption Rate",
							"In-Play Turnover Growth",
							"D7 and D30 Retention Uplift",
							"Mission Opt-in Rate",
							"Cross-Sport Bet Ratio",
							"Accumulator Margin Lift"
						].map((kpi, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground items-center rounded-lg border border-border p-4 bg-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 flex-shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: kpi
							})]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-12 border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-destructive/20 bg-destructive/5 p-6 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold text-foreground",
								children: "Responsible Campaign Limits & Compliance"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: "Sportsbook gamification must prioritize entertainment and safety. Gamifly provides robust, jurisdiction-aware controls. Operators can enforce responsible campaign limits, exclude vulnerable players from marketing segments automatically, and ensure that missions promote varied, recreational play rather than encouraging chasing losses. Eligibility rules are strictly enforced to align with local regulatory frameworks."
						})]
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
								params: { slug: "igaming-gamification-examples" },
								className: "group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold group-hover:text-primary transition-colors",
									children: "iGaming Gamification Examples"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Deep dive into real-world mission and tournament designs."
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
									children: "Learn how to measure the ROI of your gamification strategy."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/resources/$slug",
								params: { slug: "gamification-integration-checklist" },
								className: "group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold group-hover:text-primary transition-colors",
									children: "Gamification Integration Checklist"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "The technical and product requirements for launching."
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
								children: "Ready to gamify your sportsbook?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mx-auto mt-4 max-w-xl text-lg text-muted-foreground",
								children: "See how Gamifly allows operators to deploy complex sports betting missions, live leaderboards, and safe engagement campaigns in minutes."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-8 flex flex-wrap justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "border-0 text-primary-foreground shadow-[var(--shadow-glow)] px-8",
									style: { background: "var(--gradient-brand)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Book a Technical Demo"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "bg-card/40 backdrop-blur px-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/features",
										children: "View Gamifly Features"
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
export { SportsbookUseCasesPage as component };
