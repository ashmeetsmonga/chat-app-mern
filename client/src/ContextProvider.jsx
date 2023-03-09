import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
	const [userId, setUserId] = useState(null);
	const [chatId, setChatId] = useState(null);
	const [chatUserName, setChatUserName] = useState("");

	return (
		<Context.Provider
			value={{ userId, setUserId, chatId, setChatId, chatUserName, setChatUserName }}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
