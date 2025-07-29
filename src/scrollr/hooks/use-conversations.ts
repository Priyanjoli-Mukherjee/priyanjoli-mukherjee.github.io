import { useQuery } from "react-query";
import { getConversations } from "../service/get-conversations";

export function useConversations() {
  const { data: conversations } = useQuery("conversations", getConversations);

  return conversations!;
}
