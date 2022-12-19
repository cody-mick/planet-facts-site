import NavBar from "../common/NavBar";
import { Outlet } from "react-router-dom";

export default function Page() {
	return (
		<div>
			<NavBar />
			<div className="outlet-page">
				<Outlet />
			</div>
		</div>
	);
}
