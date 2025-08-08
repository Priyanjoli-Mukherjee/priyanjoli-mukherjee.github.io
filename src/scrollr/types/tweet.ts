import { User } from "./user";

export interface Tweet extends User {
  id: string;
  message: string;
  replyingTo?: string | null;
  timestamp: number;
}
