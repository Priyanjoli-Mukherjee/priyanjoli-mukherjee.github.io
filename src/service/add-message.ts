import uniqueId from "lodash/uniqueId";
import { conversations } from "./conversations";
import { getCurrentUser } from "./get-current-user";

export function addMessage(text: string, twitterHandle: string) {
  const conversation = conversations.find(
    (conversation) => conversation.user.twitterHandle === twitterHandle,
  );
  if (conversation) {
    conversation.messages.push({
      id: uniqueId("message"),
      text,
      twitterHandle: getCurrentUser().twitterHandle,
      time: Date.now(),
    });
  }
}
