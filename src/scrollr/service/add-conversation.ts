import { USERS } from "../random-utils/random-user";
import { conversations } from "../service/conversations";

export function addConversation(twitterHandle: string) {
  const user = USERS.find((u) => u.twitterHandle === twitterHandle);
  if (user) {
    conversations.push({ messages: [], user });
  }
}
