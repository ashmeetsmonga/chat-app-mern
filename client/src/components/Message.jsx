import React from "react";
import { useContext } from "react";
import { Context } from "../ContextProvider";

const Message = ({ senderId, text }) => {
	const { userId } = useContext(Context);

	if (userId === senderId) return <div className='bg-[#339DBB] p-8'>{text}</div>;
	else return <div className='bg-[#212629] p-4 rounded-xl rounded-tl-none'>{text}</div>;
};

export default Message;
