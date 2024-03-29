import axios from "axios";

export const getAllChats = async () => {
	const { data } = await axios.get("http://localhost:5000/chat/", {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("chat-app-token")}`,
		},
	});
	return data;
};
