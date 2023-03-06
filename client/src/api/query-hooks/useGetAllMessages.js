import { useQuery } from "react-query";
import { getAllMessages } from "../getAllMessages";

export const useGetAllMessages = ({ chatId }) => {
	return useQuery(["messages-list", chatId], () => getAllMessages(chatId));
};
