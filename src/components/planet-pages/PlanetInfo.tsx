import React from "react";

export default function PlanetInfo({ currentPlanet, detailState }: any) {
	return (
		<div className="planet-info">
			<p className="planet-info-name">{currentPlanet?.name}</p>
			<p className="planet-info-text">
				{currentPlanet?.overview.content}
			</p>
			<p className="planet-info-source-link">
				Source: <a href={currentPlanet?.overview.source}>Wikipedia</a>{" "}
				↗️
			</p>
		</div>
	);
}
