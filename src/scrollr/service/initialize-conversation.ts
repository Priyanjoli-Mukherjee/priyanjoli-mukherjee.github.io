import uniqueId from "lodash/uniqueId";

import { Conversation } from "../types/conversation";
import { User } from "../types/user";
import { getCurrentUser } from "./get-current-user";
import { randomMessages } from "./random-messages";

export function initializeConversation(user: User): Conversation {
  return {
    id: uniqueId("conversation"),
    messages: randomMessages(user),
    users: [user, getCurrentUser()],
  };
}
