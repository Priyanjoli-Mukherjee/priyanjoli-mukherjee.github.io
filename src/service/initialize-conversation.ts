import { Conversation } from "../types/conversation";
import { User } from "../types/user";
import { randomMessages } from "./random-messages";

export function initializeConversation(user: User): Conversation {
  return {
    messages: randomMessages(user),
    user,
  };
}
