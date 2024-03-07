import { conversations } from "./conversations";

export function deleteMessage(id: string, twitterHandle: string) {
  const conversation = conversations.find(
    (conversation) => conversation.user.twitterHandle === twitterHandle,
  );
  if (conversation) {
    const index = conversation.messages.findIndex(
      (message) => message.id === id,
    );
    conversation.messages.splice(index, 1);
  }
}
