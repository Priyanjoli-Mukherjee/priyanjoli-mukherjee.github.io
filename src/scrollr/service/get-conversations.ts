import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Conversation } from "../types/conversation";

export async function getConversations(): Promise<Conversation[]> {
  const { data } = await axios.get(`${BASE_URL}/conversations`);
  return data;
}
