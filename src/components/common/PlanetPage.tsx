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
	const [planetState, setPlanetState] = useState("Overview");
	const handlePlanetDetailClick = (newPlanetState: any) => {
		setPlanetState(newPlanetState);
	};

	return (
		<div className="grid-container">
			<PlanetInfo
				currentPlanet={currentPlanet}
				detailState={planetState}
			/>
			<PlanetImage
				currentPlanet={currentPlanet}
				detailState={planetState}
			/>
			<div className="planet-info-links">
				<PlanetInfoLink
					number="01"
					title="Overview"
					handleClick={handlePlanetDetailClick}
					active={planetState === "Overview" ? true : false}
				/>
				<PlanetInfoLink
					number="02"
					title="Internal Structure"
					handleClick={handlePlanetDetailClick}
					active={planetState === "Internal Structure" ? true : false}
				/>
				<PlanetInfoLink
					number="03"
					title="Surface Geology"
					handleClick={handlePlanetDetailClick}
					active={planetState === "Surface Geology" ? true : false}
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
