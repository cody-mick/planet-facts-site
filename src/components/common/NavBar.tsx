import { useAtom } from "jotai";
import planetAtom from "../../utilities/planets";

export default function NavBar({ onPlanetSelect }: any) {
	const planetsData = useAtom(planetAtom);
	const planets = planetsData[0];

	return (
		<div className="nav-bar">
			<p className="nav-title">THE PLANETS</p>
			<div className="planet-links">
				{planets.map((p) => (
					<p
						className="planet-link"
						onClick={() => onPlanetSelect(p.name)}>
						{p.name}
					</p>
				))}
			</div>
		</div>
	);
}
