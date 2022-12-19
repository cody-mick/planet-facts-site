import React from "react";

export default function PlanetImage({ currentPlanet }: any) {
	return (
		<div className="planet-image">
			<img src={currentPlanet.images.planet} alt={currentPlanet.name} />
		</div>
	);
}
