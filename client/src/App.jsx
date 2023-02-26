import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
	return (
		<div className='w-screen h-screen overflow-x-hidden flex justify-center items-center'>
			<Routes>
				<Route path='/' element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
