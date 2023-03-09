import React from "react";
import { useContext } from "react";
import { Context } from "../ContextProvider";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getTime = (createdAt) => {
	if (createdAt) {
		const time = new Date(createdAt);
		const date = time.getDate();
		if (date !== new Date().getDate()) {
			const month = months[time.getMonth() - 1];
			return `${date} ${month}`;
		} else {
			const hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
			const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
			return `${hours}:${minutes}`;
		}
	}
};

const Message = ({ senderId, text, createdAt }) => {
	const { userId } = useContext(Context);

	const timeToShow = getTime(createdAt);
	console.log(timeToShow);

	if (userId === senderId)
		return (
			<div className='ml-auto flex flex-col'>
				<div className='bg-[#339DBB] p-4 rounded-xl rounded-tr-none relative'>{text}</div>
				<div className='ml-auto mr-2 mt-0.5 text-gray-400 text-sm'>{timeToShow}</div>
			</div>
		);
	else
		return (
			<div>
				<div className='bg-[#212629] p-4 rounded-xl rounded-tl-none'>{text}</div>
				<div className='ml-2 mt-0.5 text-gray-400 text-sm'>{timeToShow}</div>
			</div>
		);
};

export default Message;
