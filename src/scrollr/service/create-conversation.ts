import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Conversation } from "../types/conversation";
import { User } from "../types/user";

export async function createConversation(users: User[]): Promise<Conversation> {
  const newConversation = {
    messages: [],
    users,
  };

  const { data } = await axios.post(
    `${BASE_URL}/conversation`,
    newConversation,
  );

  return data;
}
