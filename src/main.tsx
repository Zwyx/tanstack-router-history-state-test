import {
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootRoute = createRootRoute({
	component: () => (
		<>
			<App />
			<TanStackRouterDevtools />
		</>
	),
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: function Index() {
		return (
			<div className="p-2">
				<h3>Welcome Home!</h3>
			</div>
		);
	},
});

const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: function About() {
		return <div className="p-2">Hello from About!</div>;
	},
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}

	// This is nice, although a bit more limited than the `useHistoryState` that I made
	// in the Library of Babel and Detrak, which allows each component to provide its own types
	interface HistoryState {
		prop1?: string;
		prop2?: string;
	}
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
