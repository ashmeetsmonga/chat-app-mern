import React from "react";
import Chat from "./Chat";
import ChatList from "./ChatList";

const Layout = () => {
	return (
		<div className='w-full h-full flex'>
			<div className='w-[30%]'>
				<ChatList />
			</div>
			<div className='w-[70%]'>
				<Chat />
			</div>
		</div>
	);
};

export default Layout;
