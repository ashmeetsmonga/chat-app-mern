import React from "react";
import Chat from "./Chat";
import ChatList from "./ChatList";

const Layout = () => {
	return (
		<div className='w-full h-full flex'>
			<div className='w-1/3'>
				<ChatList />
			</div>
			<div className='w-2/3'>
				<Chat />
			</div>
		</div>
	);
};

export default Layout;
