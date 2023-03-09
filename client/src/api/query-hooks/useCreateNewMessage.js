import { useMutation, useQueryClient } from "react-query";
import { createNewMessage } from "../createNewMessage";

export function useCreateNewMessage() {
	const queryClient = useQueryClient();
	return useMutation(
		({ userId, chatId, message }) => createNewMessage({ userId, chatId, message }),
		{
			onSettled: (chatId) => {
				queryClient.refetchQueries(["messages-list", chatId]);
				queryClient.refetchQueries("chat-list");
			},
		}
	);
}
