import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { useCreateNewChat } from "../api/query-hooks/useCreateNewChat";
import { useGetAllChats } from "../api/query-hooks/useGetAllChats";
import ChatListItem from "./ChatListItem";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const randomColor = [
	"bg-red-500",
	"bg-blue-500",
	"bg-green-500",
	"bg-orange-500",
	"bg-purple-500",
	"bg-teal-500",
];

const ChatList = () => {
	const [email, setEmail] = useState("");

	const { data, isLoading } = useGetAllChats();
	const navigate = useNavigate();
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

	const signOut = () => {
		localStorage.clear("chat-app-token");
		localStorage.clear("chat-app-name");
		navigate("/login");
	};

	return (
		<div className='w-full h-full flex flex-col bg-[#161B1D] border-r-2 border-[#1F2126]'>
			<div className='flex justify-between p-6 items-center border-b-2 border-[#1F2126]'>
				<div className='flex gap-6 items-center'>
					<div className='rounded-full p-3 bg-purple-500'>
						<BsFillPersonFill className='w-6 h-6 text-white' />
					</div>
					<div className=''>
						<div className='text-white text-lg font-[500] capitalize'>
							{localStorage.getItem("chat-app-name")}
						</div>
						<div className='text-gray-400 text-md'>My Account</div>
					</div>
				</div>
				<AiOutlineLogout
					onClick={signOut}
					className='w-9 h-9 text-gray-500 cursor-pointer hover:text-white transition-colors'
				/>
			</div>
			<div className='w-full flex flex-col p-6 items-center'>
				<form className='w-full flex justify-center relative' onSubmit={addNewChat}>
					<label className='relative w-full focus-within:text-white'>
						<RiSearch2Line className='absolute w-8 h-8 top-1/2 -translate-y-1/2 left-3 pointer-events-none text-[#595D5D] ' />
						<input
							className='w-full text-white p-4 pl-14 rounded-xl bg-[#1D2122]  placeholder:text-[#595D5D] border-[#1F2126] outline-none'
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
			<div className='flex flex-col'>
				<div className='text-xl text-white px-6 py-2'>Messages</div>
				{data?.map((chat, idx) => (
					<ChatListItem
						key={chat._id}
						chatData={chat}
						randomColor={randomColor[idx % randomColor.length]}
					/>
				))}
			</div>
		</div>
	);
};

export default ChatList;
