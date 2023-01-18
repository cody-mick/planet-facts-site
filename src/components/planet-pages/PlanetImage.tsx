import React from "react";

export default function PlanetImage({ currentPlanet, detailState }: any) {
	let image;
	if (detailState === "Overview") {
		image = currentPlanet.images.planet;
	}
	if (detailState === "Internal Structure") {
		image = currentPlanet.images.internal;
	}
	if (detailState === "Surface Geology") {
		image = currentPlanet.images.planet;
	}
	console.log(currentPlanet);
	console.log(detailState);
	return (
		<div className="planet-image">
			<img src={image} alt={currentPlanet.name} />
			{detailState === "Surface Geology" && (
				<img
					className="surface-geology"
					src={currentPlanet.images.geology}
					alt={currentPlanet.name}
				/>
			)}
		</div>
	);
}
