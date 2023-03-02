import axios from "axios";
import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { useMutation, useQuery } from "react-query";
import { useCreateNewChat } from "../api/query-hooks/useCreateNewChat";
import { useGetAllChats } from "../api/query-hooks/useGetAllChats";
import ChatListItem from "./ChatListItem";

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
		<div className='w-full h-full flex flex-col gap-8 bg-red-700 pt-8'>
			<div className='w-full p-4 flex flex-col gap-4 items-center'>
				<form className='w-full flex justify-center relative' onSubmit={addNewChat}>
					<input
						className='w-4/5 text-red-700 p-3 text-xl tracking-wider rounded-lg outline-none placeholder-red-300'
						type='text'
						placeholder='Create New Chat (Email)'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{/* <button className='-ml-12' type='submit'>
						<RiAddFill className='w-10 h-10 text-red-700' />
					</button> */}
				</form>
			</div>
			<div className='flex flex-col'>
				{data?.map((chat) => (
					<ChatListItem key={chat._id} chatData={chat} />
				))}
			</div>
		</div>
	);
};

export default ChatList;