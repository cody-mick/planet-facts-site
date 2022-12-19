import React from "react";

export default function PlanetInfoLink({ number, title }: any) {
	return (
		<div className="planet-info-link">
			<p className="planet-info-link-number">{number}</p>
			<p className="planet-info-link-title">{title}</p>
		</div>
	);
}
