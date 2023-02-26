import React, { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<div className='w-full h-full flex'>
			<div className='w-full flex flex-col items-center justify-center gap-8'>
				<h1 className='uppercase text-6xl font-bold tracking-widest text-red-700'>Login</h1>
				<form action='' className='w-3/5 flex flex-col items-center gap-6'>
					<input
						className='w-full bg-red-700 text-white p-4 text-2xl tracking-wider text-center rounded-3xl outline-none placeholder-red-400'
						type='text'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className='w-full bg-red-700 text-white p-4 text-2xl tracking-wider text-center rounded-3xl outline-none placeholder-red-400'
						type='text'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className='w-1/2 mt-4 text-2xl uppercase tracking-wider p-3 font-bold rounded-3xl border border-red-700 text-red-700'
						type='submit'
					>
						Submit
					</button>
				</form>
				<div className='text-red-700 text-lg tracking-wider'>
					Do not have an account? <span className='font-bold underline'>Register</span>
				</div>
			</div>
			<div className='w-full bg-red-700'></div>
		</div>
	);
};

export default Login;
