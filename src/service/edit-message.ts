import { conversations } from "./conversations";

export function editMessage(id: string, twitterHandle: string, text: string) {
  const conversation = conversations.find(
    (conversation) => conversation.user.twitterHandle === twitterHandle,
  );
  if (conversation) {
    const individualMessage = conversation.messages.find(
      (message) => message.id === id,
    );
    if (individualMessage) {
      individualMessage.text = text;
    }
  }
}
