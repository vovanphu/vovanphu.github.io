import "./App.css";
import Background from "./Background";
import Header from "./Header";
import Welcome from "./Welcome";

function App() {
	return (
		<div className="app antialiased text-slate-400 bg-slate-900">
			<div className="min-h-screen relative">
				<Background />
				<Header />
				<Welcome />
			</div>
		</div>
	);
}

export default App;

// tailwindcss text align adjusted
