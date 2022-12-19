import { useState } from "react";
import "./App.css";
import NavBar from "./components/common/NavBar";
import PlanetPage from "./components/common/PlanetPage";

function App() {
	const [activePlanet, setActivePlanet] = useState("Mercury");
	const onPlanetSelect = (planet: any) => {
		setActivePlanet(planet);
	};
	return (
		<div className="App">
			<NavBar onPlanetSelect={onPlanetSelect} />
			<PlanetPage activePlanet={activePlanet} />
		</div>
	);
}

export default App;
