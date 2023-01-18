import React from "react";

export default function PlanetInfoLink({
	number,
	title,
	handleClick,
	active,
}: any) {
	return (
		<button
			className={active ? "planet-info-link-active" : "planet-info-link"}
			onClick={() => handleClick(title)}
			style={{}}>
			<p className="planet-info-link-number">{number}</p>
			<p className="planet-info-link-title">{title}</p>
		</button>
	);
}
