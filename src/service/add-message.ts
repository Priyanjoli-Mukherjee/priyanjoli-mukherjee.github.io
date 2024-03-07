import { conversations } from "./conversations";
import { getCurrentUser } from "./get-current-user";

export function addMessage(message: string, twitterHandle: string) {
  const conversation = conversations.find(
    (conversation) => conversation.user.twitterHandle === twitterHandle,
  );
  if (conversation) {
    conversation.messages.push({
      id: `${conversation.messages.length}`,
      message,
      twitterHandle: getCurrentUser().twitterHandle,
      time: Date.now(),
    });
  }
}
