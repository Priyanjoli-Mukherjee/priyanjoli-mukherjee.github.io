import { conversations } from "./conversations";

export function editMessage(
  messageId: string,
  conversationId: string,
  text: string,
) {
  const conversation = conversations.find(
    (conversation) => conversation.id === conversationId,
  );
  if (conversation) {
    const individualMessage = conversation.messages.find(
      (message) => message.id === messageId,
    );
    if (individualMessage) {
      individualMessage.text = text;
    }
  }
}
