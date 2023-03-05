import axios from "axios";
import React, { useState } from "react";
import { RiAddFill, RiSearch2Line } from "react-icons/ri";
import { useMutation, useQuery } from "react-query";
import { useCreateNewChat } from "../api/query-hooks/useCreateNewChat";
import { useGetAllChats } from "../api/query-hooks/useGetAllChats";
import ChatListItem from "./ChatListItem";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const ChatList = () => {
	const [email, setEmail] = useState("");

	const { data, isLoading } = useGetAllChats();

	const { mutate: createNewChatMutation } = useCreateNewChat();

	const addNewChat = (e) => {
		e.preventDefault();
		if (!email) {
			console.log("Please provide email");
			return;
		}
		createNewChatMutation({ email });
		setEmail("");
	};

	return (
		<div className='w-full h-full flex flex-col gap-4 bg-[#161B1D]'>
			<div className='flex justify-between p-6 items-center border border-gray-700 border-l-0 border-t-0'>
				<div className='flex gap-6 items-center'>
					<div className='rounded-full p-3 bg-purple-500'>
						<BsFillPersonFill className='w-6 h-6 text-white' />
					</div>
					<div className=''>
						<div className='text-white text-lg font-[500]'>Ashmeet Singh</div>
						<div className='text-gray-400 text-md'>My Account</div>
					</div>
				</div>
				<AiOutlineLogout className='w-9 h-9 text-gray-500 cursor-pointer hover:text-white transition-colors' />
			</div>
			<div className='w-full flex flex-col gap-4 p-6 items-center'>
				<form className='w-full flex justify-center relative' onSubmit={addNewChat}>
					<label className='relative w-full focus-within:text-white'>
						<RiSearch2Line className='absolute w-8 h-8 top-1/2 -translate-y-1/2 left-3 pointer-events-none text-[#595D5D] ' />
						<input
							className='w-full text-white p-4 pl-14 rounded-xl bg-[#1D2122] border placeholder:text-[#595D5D] border-gray-700 outline-none'
							type='text'
							placeholder='Create New Chat (Email)...'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					{/* <button className='-ml-12' type='submit'>
						<RiAddFill className='w-10 h-10 text-red-700' />
					</button> */}
				</form>
			</div>
			{/* <div className='flex flex-col'>
				{data?.map((chat) => (
					<ChatListItem key={chat._id} chatData={chat} />
				))}
			</div> */}
		</div>
	);
};

export default ChatList;
