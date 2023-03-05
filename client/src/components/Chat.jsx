import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Chat = () => {
	return (
		<div className='w-full h-full bg-[#0C1011]'>
			<div className='flex justify-between p-6 items-center border-b-2 border-[#1F2126]'>
				<div className='flex gap-6 items-center'>
					<div className='rounded-full p-3 bg-purple-500'>
						<BsFillPersonFill className='w-6 h-6 text-white' />
					</div>
					<div className=''>
						<div className='text-white text-lg font-[500] capitalize'>
							{localStorage.getItem("chat-app-name")}
						</div>
						<div className='text-gray-400 text-md'>Last Message</div>
					</div>
				</div>
				<div className='p-2 rounded-full border-2 border-gray-500 hover:border-white text-white cursor-pointer transition-colors'>
					<BiDotsVerticalRounded className='w-7 h-7' />
				</div>
			</div>
		</div>
	);
};

export default Chat;
