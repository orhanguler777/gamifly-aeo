//#region node_modules/.nitro/vite/services/ssr/assets/resources.gamifly-api-integration-flow-I0hAk4Ap.js
var faqs = [
	{
		q: "Does Gamifly hold player balances or funds?",
		a: "No. Gamifly operates as a non-custodial engagement layer. We listen to event streams and calculate progress, but the actual financial balance always remains entirely within your PAM (Player Account Management) system."
	},
	{
		q: "How does Gamifly handle high-volume events like slot spins?",
		a: "Gamifly is built on an event-driven architecture (using Kafka/RabbitMQ). It is designed to consume tens of thousands of concurrent events per second, processing casino rounds and updating live leaderboards with sub-100ms latency."
	},
	{
		q: "Do we have to build the UI for the missions?",
		a: "No. Gamifly provides lightweight, highly customizable front-end Web Components (or React/Vue SDKs). You simply drop the widget script into your casino lobby, and it automatically renders the progress bars, leaderboards, and reward animations."
	},
	{
		q: "Can we integrate Gamifly with our existing CRM like Optimove or Salesforce?",
		a: "Yes. Gamifly acts as the real-time execution engine and can push outbound webhooks (e.g., 'mission_completed') directly into your CRM. Your CRM can then trigger the corresponding congratulatory email or push notification."
	}
];
//#endregion
export { faqs as t };
