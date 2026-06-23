import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.sample-igaming-gamification-event-payload-DWXmRlUH.js
var import_jsx_runtime = require_jsx_runtime();
function PayloadPage() {
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
						children: "Technical Guide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-4xl font-bold tracking-tight md:text-5xl",
						children: "Sample iGaming Gamification Event Payloads"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground md:text-xl",
						children: "Illustrative JSON event payloads for integrating Gamifly into your PAM."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "container mx-auto max-w-4xl px-6 mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold mb-4",
					children: "1. Casino Round Completed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-muted/50 p-6 rounded-xl overflow-x-auto border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "text-sm font-mono text-primary",
						children: `{
  "event_id": "evt_123456789",
  "event_type": "casino_round_completed",
  "timestamp": "2026-06-23T15:45:00Z",
  "player_id": "usr_98765xyz",
  "currency": "EUR",
  "data": {
    "game_id": "starburst_netent",
    "provider": "netent",
    "wager_amount": 5.00,
    "win_amount": 25.00,
    "multiplier": 5.0
  }
}`
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold mb-4",
					children: "2. Sportsbook Bet Settled"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-muted/50 p-6 rounded-xl overflow-x-auto border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "text-sm font-mono text-primary",
						children: `{
  "event_id": "evt_987654321",
  "event_type": "sportsbook_bet_settled",
  "timestamp": "2026-06-23T16:00:00Z",
  "player_id": "usr_98765xyz",
  "currency": "EUR",
  "data": {
    "bet_id": "bet_abc123",
    "bet_type": "accumulator",
    "legs": 4,
    "wager_amount": 10.00,
    "win_amount": 150.00,
    "status": "won",
    "total_odds": 15.0
  }
}`
					})
				})]
			})]
		})]
	});
}
//#endregion
export { PayloadPage as component };
