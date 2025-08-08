import uniqueId from "lodash/uniqueId";

import { conversations } from "../service/conversations";
import { Conversation } from "../types/conversation";
import { USERS } from "../utils/random-utils/random-user";
import { getCurrentUser } from "./get-current-user";

export function addConversation(twitterHandle: string): Conversation | null {
  const user = USERS.find((u) => u.twitterHandle === twitterHandle);
  if (user) {
    const newConversation = {
      id: uniqueId("conversation"),
      messages: [],
      users: [user, getCurrentUser()],
    };
    conversations.push(newConversation);
    return newConversation;
  }
  return null;
}
