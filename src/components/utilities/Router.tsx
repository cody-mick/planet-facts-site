import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Page";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Page />}>
					<Route path="/mercury"></Route>
					<Route path="/venus"></Route>
					<Route path="/earth"></Route>
					<Route path="/mars"></Route>
					<Route path="/jupiter"></Route>
					<Route path="/saturn"></Route>
					<Route path="/uranus"></Route>
					<Route path="/neptune"></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
