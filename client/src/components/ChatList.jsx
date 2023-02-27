import React from "react";
import { RiAddFill } from "react-icons/ri";

const ChatList = () => {
	return (
		<div className='w-full h-full flex flex-col gap-8 bg-red-700'>
			<div className='w-full p-4 flex flex-col gap-4 items-center'>
				<form className='w-full flex justify-center relative'>
					<input
						className='w-4/5 text-red-700 p-3 text-xl tracking-wider rounded-lg outline-none placeholder-red-400'
						type='text'
						placeholder='Create New Chat (Email)'
					/>
					<button className='-ml-12' type='submit'>
						<RiAddFill className='w-10 h-10 text-red-700' />
					</button>
				</form>
			</div>
			<div></div>
		</div>
	);
};

export default ChatList;
