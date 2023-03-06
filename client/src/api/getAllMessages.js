import axios from "axios";

export const getAllMessages = async (chatId) => {
	const { data } = await axios.get(`http://localhost:5000/message/${chatId}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("chat-app-token")}`,
		},
	});
	console.log(data);
	return data;
};
