import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const ChatListItem = () => {
	return (
		<div className='flex py-2 px-8 gap-6 items-center border-b border-b-gray-100'>
			<div>
				<BsFillPersonFill className='w-10 h-10 text-white' />
			</div>
			<div>
				<div className='text-white text-2xl tracking-wider font-bold'>Avneet</div>
				<div className='text-lg text-red-200 tracking-wider'>Last Message</div>
			</div>
		</div>
	);
};

export default ChatListItem;
