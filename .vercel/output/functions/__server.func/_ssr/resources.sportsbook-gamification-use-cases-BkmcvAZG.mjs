//#region node_modules/.nitro/vite/services/ssr/assets/resources.sportsbook-gamification-use-cases-BkmcvAZG.js
var faqs = [
	{
		q: "How does real-time gamification work for sportsbooks?",
		a: "Sportsbook events (like cashouts, partial settlements, and in-play bets) require extremely low-latency processing. Gamifly integrates with your bet slip or PAM via Kafka or webhooks to instantly process bet placement and settlement events, updating progress bars in real-time."
	},
	{
		q: "Can we restrict missions to certain odds or markets?",
		a: "Yes. Eligibility rules are critical for sportsbooks. You can configure missions to only accept bets with minimum odds (e.g., 1.50+), specific bet types (pre-match only), or exclude cashed-out bets from counting towards mission progress."
	},
	{
		q: "Is gamification safe for responsible gaming?",
		a: "Yes, when implemented correctly. Gamifly provides jurisdiction-aware controls, allowing operators to cap campaign participation, exclude vulnerable segments, and respect responsible campaign limits to ensure entertainment remains safe."
	},
	{
		q: "Can sports and casino gamification run simultaneously?",
		a: "Absolutely. With Gamifly, operators can run cross-vertical missions (e.g., 'Place a bet on the NBA and spin 10 times on a slot') using a unified player profile and reward wallet."
	}
];
//#endregion
export { faqs as t };
