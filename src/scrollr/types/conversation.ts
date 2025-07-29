import { Message } from "./message";
import { User } from "./user";

export interface Conversation {
  messages: Message[];
  user: User;
}
