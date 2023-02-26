import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<div className='w-full h-full flex'>
			<div className='w-full'></div>
			<div className='w-full bg-red-700 flex flex-col items-center justify-center gap-8'>
				<h1 className='uppercase text-6xl font-bold tracking-widest text-white'>Register</h1>
				<form action='' className='w-3/5 flex flex-col items-center gap-6'>
					<input
						className='w-full text-red-700 p-4 text-2xl tracking-wider text-center rounded-3xl outline-none placeholder-red-400'
						type='text'
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className='w-full text-red-700 p-4 text-2xl tracking-wider text-center rounded-3xl outline-none placeholder-red-400'
						type='text'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className='w-full text-red-700 p-4 text-2xl tracking-wider text-center rounded-3xl outline-none placeholder-red-400'
						type='text'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className='w-1/2 mt-4 text-2xl uppercase tracking-wider p-3 font-bold rounded-3xl border border-white text-white'
						type='submit'
					>
						Submit
					</button>
				</form>
				<div className='text-white text-lg tracking-wider'>
					Do not have an account?{" "}
					<Link to='/' className='font-bold underline'>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
