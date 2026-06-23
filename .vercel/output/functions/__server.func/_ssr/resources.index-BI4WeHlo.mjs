//#region node_modules/.nitro/vite/services/ssr/assets/resources.index-BI4WeHlo.js
var faqs = [
	{
		q: "Will integrating Gamifly disrupt or add latency to our existing PAM and wallet system?",
		a: "Zero disruption. Gamifly operates as a completely non-custodial engagement layer. It consumes event payloads asynchronously (via Kafka or OpenAPI Webhooks) and never writes to or locking-reads your wallet database. Balances and funds remain 100% under your control, ensuring zero impact on transaction latency or financial integrity."
	},
	{
		q: "We cannot afford a 6-month development project. What is the real-world integration timeline?",
		a: "14 to 21 days with a single engineer. Because Gamifly is API-first, you only need to point your existing transaction event streams to our gateway. Our pre-built lobby widgets are copy-paste SDK scripts, requiring no custom frontend rendering or game logic rewrites."
	},
	{
		q: "How does the platform ensure compliance in strictly regulated jurisdictions (e.g. UKGC, MGA, DGOJ)?",
		a: "Compliance is handled via jurisdiction-aware configuration profiles. Our dashboard lets compliance teams toggle mechanics (like prize wheels, progression loot boxes, or live rankings) dynamically per user country. All transaction logs and rewards are fully traceable and cryptographically audited, keeping you 100% compliant."
	},
	{
		q: "Can Gamifly handle high-volume traffic spike loads during major sporting events?",
		a: "Easily. Our engine scales horizontally using a cloud-native, distributed event broker system (Kafka) capable of processing over 50,000 game-bet events per second. Live leaderboard rankings and player milestone triggers hydrate under 100ms, ensuring your platform's lobby remains ultra-responsive even during World Cup finals."
	}
];
//#endregion
export { faqs as t };
