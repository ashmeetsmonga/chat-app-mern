import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
	return (
		<div className='w-screen h-screen overflow-x-hidden flex justify-center items-center'>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
