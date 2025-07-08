import { Status } from "./status";

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
  assignee?: string;
  storyPoints?: number;
  status: Status;
  rank: number;
}
