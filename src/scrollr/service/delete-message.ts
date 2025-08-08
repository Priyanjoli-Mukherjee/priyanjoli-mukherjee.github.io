import { conversations } from "./conversations";

export function deleteMessage(messageId: string, conversationId: string) {
  const conversation = conversations.find(
    (conversation) => conversation.id === conversationId,
  );
  if (conversation) {
    const index = conversation.messages.findIndex(
      (message) => message.id === messageId,
    );
    conversation.messages.splice(index, 1);
  }
}
