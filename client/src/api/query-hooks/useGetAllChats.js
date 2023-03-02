import { useQuery } from "react-query";
import { getAllChats } from "../getAllChats";

export const useGetAllChats = () => {
	return useQuery(["chat-list"], getAllChats);
};
