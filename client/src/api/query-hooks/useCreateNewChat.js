import { useMutation, useQueryClient } from "react-query";
import { createNewChat } from "../createNewChat";

export function useCreateNewChat() {
	const queryClient = useQueryClient();
	return useMutation(({ email }) => createNewChat({ email }), {
		onSettled: () => {
			queryClient.refetchQueries("chat-list");
		},
	});
}
