import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./resources_._slug-CxE_wYIR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources_._slug-BABilIwc.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dark min-h-screen bg-background px-6 py-24 text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "Article not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted-foreground",
					children: [
						"We couldn't find \"",
						slug,
						"\". Browse all resources instead."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/resources",
						children: "Back to Resources"
					})
				})
			]
		})
	});
};
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
