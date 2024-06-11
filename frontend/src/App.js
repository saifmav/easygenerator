import { Route, Routes, Navigate } from "react-router-dom";
import Sigup from "./components/Sigup";
import Login from "./components/Login";
import Main from "./components/Main";


function App() {
	const user = localStorage.getItem("token");
	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Sigup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;