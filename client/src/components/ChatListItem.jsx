import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const ChatListItem = ({ chatData, randomColor }) => {
	const updatedDate = new Date(chatData.updatedAt);
	console.log(chatData);
	return (
		<div className='flex py-4 px-6 gap-6 cursor-pointer hover:bg-[#212629]'>
			<div className={`p-3 ${randomColor} rounded-full `}>
				<BsFillPersonFill className='w-6 h-6 text-white' />
			</div>
			<div>
				<div className='text-white text-lg capitalize'>{chatData.name}</div>
				<div className='text-sm tracking-wide text-gray-400'>Last Message</div>
			</div>
			<div className='ml-auto text-sm text-gray-300 mt-1'>10:30</div>
		</div>
	);
};

export default ChatListItem;
