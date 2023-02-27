import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";

function App() {
	return (
		<div className='w-screen h-screen overflow-x-hidden flex justify-center items-center'>
			<Routes>
				<Route path='/' element={<RequireAuth />}>
					<Route index element={<Layout />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
