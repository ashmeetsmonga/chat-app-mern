import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const ChatListItem = () => {
	return (
		<div className='flex justify-around p-4 items-center border-b border-b-gray-100'>
			<div>
				<BsFillPersonFill />
			</div>
			<div>
				<div className='text-white text-2xl tracking-wider'>Avneet</div>
				<div>Last Message</div>
			</div>
		</div>
	);
};

export default ChatListItem;
