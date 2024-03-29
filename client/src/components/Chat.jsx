import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import { useGetAllMessages } from "../api/query-hooks/useGetAllMessages";
import Message from "./Message";
import { useCreateNewMessage } from "../api/query-hooks/useCreateNewMessage";

const Chat = () => {
	const [message, setMessage] = useState("");

	const { userId, chatId, chatUserName } = useContext(Context);
	const { data } = useGetAllMessages({ chatId });

	const { mutate: createNewMessageMutation } = useCreateNewMessage();

	const handleSubmit = (e) => {
		e.preventDefault();
		createNewMessageMutation({ userId, chatId, message });
		setMessage("");
	};

	return (
		<div className='w-full h-full bg-[#0C1011] flex flex-col justify-between relative'>
			<div className='flex justify-between p-6 items-center border-b-2 border-[#1F2126]'>
				<div className='flex gap-6 items-center'>
					<div className='rounded-full p-3 bg-purple-500'>
						<BsFillPersonFill className='w-6 h-6 text-white' />
					</div>
					<div className=''>
						<div className='text-white text-lg font-[500] capitalize'>{chatUserName}</div>
						<div className='text-gray-400 text-md'>Last Message</div>
					</div>
				</div>
				<div className='p-2 rounded-full border-2 border-gray-500 hover:border-white text-white cursor-pointer transition-colors'>
					<BiDotsVerticalRounded className='w-7 h-7' />
				</div>
			</div>
			<div className='text-white  h-full flex flex-col-reverse items-start gap-3 p-4 overflow-y-auto'>
				{data?.map((message) => {
					return (
						<Message
							key={message._id}
							senderId={message.senderId}
							text={message.text}
							createdAt={message.createdAt}
						/>
					);
				})}
			</div>
			<div className='w-full bottom-0 py-6 px-8 bg-[#161B1D]'>
				<form className='w-full flex gap-4 relative' onSubmit={handleSubmit}>
					<label className='relative w-full focus-within:text-white'>
						<input
							className='w-full text-white p-4 rounded-xl bg-[#1D2122]  placeholder:text-[#595D5D] border-[#1F2126] outline-none'
							type='text'
							placeholder='Send Message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</label>
					<button className='' type='submit'>
						<RiSendPlaneFill className='w-8 h-8 text-white' />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Chat;
