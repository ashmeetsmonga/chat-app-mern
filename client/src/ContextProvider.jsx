import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
	const [userId, setUserId] = useState(null);
	const [chatId, setChatId] = useState(null);

	return (
		<Context.Provider value={{ userId, setUserId, chatId, setChatId }}>{children}</Context.Provider>
	);
};

export default ContextProvider;
