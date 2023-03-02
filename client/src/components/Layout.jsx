import React from "react";
import Chat from "./Chat";
import ChatList from "./ChatList";

const Layout = () => {
	return (
		<div className='w-full h-full flex'>
			<div className='w-1/4'>
				<ChatList />
			</div>
			<div className='w-3/4'>
				<Chat />
			</div>
		</div>
	);
};

export default Layout;
