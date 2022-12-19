import React from "react";

export default function PlanetFact({ title, fact }: any) {
	return (
		<div className="planet-fact-card">
			<div className="planet-fact-card-content">
				<p className="planet-fact-title">{title.toUpperCase()}</p>
				<p className="planet-fact-text">{fact.toUpperCase()}</p>
			</div>
		</div>
	);
}
