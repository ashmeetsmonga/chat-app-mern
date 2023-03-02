import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export function useCreateNewChat() {
	const queryClient = useQueryClient();
	return useMutation(
		async ({ email }) => {
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
		},
		{
			onSettled: () => {
				queryClient.refetchQueries("chat-list");
			},
		}
	);
}
