import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const ChatListItem = ({ chatData, randomColor }) => {
	console.log(chatData);
	return (
		<div className='flex py-4 px-6 gap-6 items-center'>
			<div className={`p-3 ${randomColor} rounded-full `}>
				<BsFillPersonFill className='w-6 h-6 text-white' />
			</div>
			<div>
				<div className='text-white capitalize text-xl'>{chatData.name}</div>
				<div className='text-sm tracking-wide text-gray-400'>Last Message</div>
			</div>
		</div>
	);
};

export default ChatListItem;
