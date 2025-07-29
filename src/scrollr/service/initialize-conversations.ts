import { Conversation } from "../types/conversation";
import { USERS } from "../utils/random-utils/random-user";
import { initializeConversation } from "./initialize-conversation";

export function initializeConversations(): Array<Conversation> {
  return USERS.filter(() => Math.random() < 0.5).map(initializeConversation);
}
