import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const ChatListItem = ({ chatData, randomColor }) => {
	return (
		<div className='flex py-2 px-8 gap-6 items-center border-b border-b-gray-100'>
			<div className={`p-4 ${randomColor} rounded-full `}>
				<BsFillPersonFill className='w-10 h-10 text-white' />
			</div>
			<div>
				<div className='text-white capitalize text-2xl tracking-wider font-bold'>
					{chatData.name}
				</div>
				<div className='text-lg text-red-200 tracking-wider'>Last Message</div>
			</div>
		</div>
	);
};

export default ChatListItem;
