import uniqueId from "lodash/uniqueId";

import { conversations } from "../service/conversations";
import { getCurrentUser } from "./get-current-user";

export function addMessage(text: string, conversationId: string) {
  const conversation = conversations.find(
    (conversation) => conversation.id === conversationId,
  );
  if (conversation) {
    conversation.messages.push({
      id: uniqueId("message"),
      text,
      twitterHandle: getCurrentUser().twitterHandle,
      timestamp: Date.now(),
    });
  }
}
