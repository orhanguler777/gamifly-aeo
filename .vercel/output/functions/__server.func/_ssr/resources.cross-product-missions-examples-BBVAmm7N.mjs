//#region node_modules/.nitro/vite/services/ssr/assets/resources.cross-product-missions-examples-BBVAmm7N.js
var faqs = [
	{
		q: "Do cross-product missions require a unified wallet?",
		a: "Ideally, yes. Having a unified wallet where player balances are shared across casino and sportsbook makes cross-product gamification seamless. If you have separate wallets, Gamifly can still track events via your PAM, but the user experience must account for balance transfers."
	},
	{
		q: "How does Gamifly track events across different verticals?",
		a: "Gamifly integrates directly with your central PAM or event stream (via Kafka, RabbitMQ, or webhooks). Whether a player spins a slot provided by Evolution or places a bet via Kambi, the central PAM forwards the event to Gamifly to update mission progress in real-time."
	},
	{
		q: "Are cross-product missions compliant with local regulations?",
		a: "Compliance depends on the jurisdiction. Some markets strictly separate casino and sportsbook promotions. Gamifly allows operators to configure jurisdiction-specific eligibility rules, ensuring cross-product missions are only visible to players in permitted regions."
	},
	{
		q: "Do players find multi-vertical missions confusing?",
		a: "They can be if designed poorly. The key is UI/UX clarity. Gamifly provides an intuitive 'Mission Hub' widget that clearly outlines step-by-step requirements and shows a live progress bar, ensuring the player always knows exactly what to do next."
	}
];
//#endregion
export { faqs as t };
