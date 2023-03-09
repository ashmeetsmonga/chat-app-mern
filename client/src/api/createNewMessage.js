import axios from "axios";

export const createNewMessage = async ({ userId, chatId, message }) => {
	const { data } = await axios.post(
		"http://localhost:5000/message/",
		{ senderId: userId, chatId, text: message },
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("chat-app-token")}`,
			},
		}
	);
	return chatId;
};
