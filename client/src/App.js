import React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";

import Navigation from "./components/shared/Navigation/Navigation";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/register'
					element={<Register />}
				/>
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
