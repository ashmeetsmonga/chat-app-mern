import React from "react";

const Login = () => {
	return (
		<div className='w-full h-full flex'>
			<div className='w-full flex flex-col items-center justify-center gap-8'>
				<h1 className='uppercase text-6xl font-bold tracking-widest text-red-700'>Login</h1>
				<form action='' className='flex flex-col gap-6'>
					<input
						className='bg-red-700 text-white p-4 text-2xl tracking-wider text-center rounded-3xl outline-none placeholder-red-400'
						type='text'
						placeholder='Email'
					/>
					<input
						className='bg-red-700 text-white p-4 text-2xl tracking-wider text-center rounded-3xl outline-none placeholder-red-400'
						type='text'
						placeholder='Password'
					/>
					<button
						className='text-2xl uppercase tracking-wider p-3 font-bold rounded-3xl border border-red-700 text-red-700'
						type='submit'
					>
						Submit
					</button>
				</form>
			</div>
			<div className='w-full bg-red-700'></div>
		</div>
	);
};

export default Login;
