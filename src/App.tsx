import { HistoryState, useLocation, useNavigate } from "@tanstack/react-router";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
	const { state } = useLocation();

	const navigate = useNavigate();

	const mergeState = (newState: HistoryState) => {
		navigate({
			state: {
				...history.state,
				...newState,
			},
		});
	};

	console.log(state);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => mergeState({ prop1: "a" })}>
					prop1 is {state?.prop1}
				</button>

				<button onClick={() => mergeState({ prop2: "b" })}>
					prop2 is {state?.prop2}
				</button>

				<button
					onClick={() =>
						mergeState({
							prop2: "",
							prop1: "",
						})
					}
				>
					clear
				</button>

				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
