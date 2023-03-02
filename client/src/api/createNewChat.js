import axios from "axios";

export const createNewChat = async ({ email }) => {
	const { data } = await axios.post(
		"http://localhost:5000/chat/",
		{ email },
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("chat-app-token")}`,
			},
		}
	);
	return data;
};
