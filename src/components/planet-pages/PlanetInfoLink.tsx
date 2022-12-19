import React from "react";

export default function PlanetInfoLink({ number, title, handleClick }: any) {
	return (
		<button className="planet-info-link" onClick={() => handleClick(title)}>
			<p className="planet-info-link-number">{number}</p>
			<p className="planet-info-link-title">{title}</p>
		</button>
	);
}
