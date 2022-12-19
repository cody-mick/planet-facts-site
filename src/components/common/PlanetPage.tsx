import { useAtom } from "jotai";
import { useState } from "react";
import planetAtom from "../../utilities/planets";
import PlanetFact from "../planet-pages/PlanetFact";
import PlanetImage from "../planet-pages/PlanetImage";
import PlanetInfo from "../planet-pages/PlanetInfo";
import PlanetInfoLink from "../planet-pages/PlanetInfoLink";

export default function PlanetPage({ activePlanet }: any) {
	const planetsData = useAtom(planetAtom);
	const planets = planetsData[0];
	const currentPlanet = planets.find((p) => p.name === activePlanet);
	const [planetState, setPlanetState] = useState("overview");
	const handlePlanetStateChange = (newPlanetState: any) => {
		setPlanetState(newPlanetState);
		console.log(planetState);
	};

	return (
		<div className="grid-container">
			<PlanetInfo currentPlanet={currentPlanet} />
			<PlanetImage currentPlanet={currentPlanet} />
			<div className="planet-info-links">
				<PlanetInfoLink
					number="01"
					title="Overview"
					onClick={() => handlePlanetStateChange("overview")}
				/>
				<PlanetInfoLink
					number="02"
					title="Internal Structure"
					onClick={() =>
						handlePlanetStateChange("internal-structure")
					}
				/>
				<PlanetInfoLink
					number="03"
					title="Surface Geology"
					onClick={() => handlePlanetStateChange("surface-geology")}
				/>
			</div>
			<div className="planet-fact-cards">
				<PlanetFact
					title="Rotation Time"
					fact={currentPlanet?.rotation}
					className="rotation"
				/>
				<PlanetFact
					title="Revolution Time"
					fact={currentPlanet?.revolution}
					className="revolution"
				/>
				<PlanetFact
					title="Radius"
					fact={currentPlanet?.radius}
					className="radius"
				/>
				<PlanetFact
					title="Average Temp"
					fact={currentPlanet?.temperature}
					className="avgTemp"
				/>
			</div>
		</div>
	);
}
