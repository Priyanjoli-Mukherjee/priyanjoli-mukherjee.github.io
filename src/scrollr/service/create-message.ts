import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Message } from "../types/message";
import { User } from "../types/user";

export async function createMessage(
  text: string,
  conversationId: string,
  user: User,
): Promise<Message> {
  const message = {
    text,
    twitterHandle: user.twitterHandle,
    timestamp: Date.now(),
  };

  const { data } = await axios.post(
    `${BASE_URL}/message/${conversationId}`,
    message,
  );
  return data;
}
