import { USERS } from "../random-utils/random-user";
import { Conversation } from "../types/conversation";
import { initializeConversation } from "./initialize-conversation";

export function initializeConversations(): Array<Conversation> {
  return USERS.map(initializeConversation);
}
