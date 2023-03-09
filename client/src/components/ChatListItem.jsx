import React from "react";
import { useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Context } from "../ContextProvider";

const getLatestMessage = (latestMessage) => {
	if (latestMessage) {
		const len = latestMessage.length;
		if (len > 30) {
			latestMessage = latestMessage.substring(0, 30) + "...";
		}
	}
	return latestMessage;
};

const ChatListItem = ({ chatData, randomColor }) => {
	const { setChatId, setChatUserName } = useContext(Context);

	let latestMessage = getLatestMessage(chatData.latestMessage);

	return (
		<div
			className='flex py-4 px-6 gap-6 cursor-pointer hover:bg-[#212629]'
			onClick={() => {
				setChatId(chatData._id);
				setChatUserName(chatData.name);
			}}
		>
			<div className={`p-3 ${randomColor} rounded-full `}>
				<BsFillPersonFill className='w-6 h-6 text-white' />
			</div>
			<div>
				<div className='text-white text-lg capitalize'>{chatData.name}</div>
				<div className='text-sm tracking-wide text-gray-400'>{latestMessage}</div>
			</div>
			<div className='ml-auto text-sm text-gray-300 mt-1'>10:30</div>
		</div>
	);
};

export default ChatListItem;
