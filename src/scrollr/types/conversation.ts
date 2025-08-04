import { Message } from "./message";
import { User } from "./user";

export interface Conversation {
  id: string;
  messages: Message[];
  user: User;
}
