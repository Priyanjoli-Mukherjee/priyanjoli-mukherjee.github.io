import { KanbanUser } from "../../../types/kanban/kanban-user";
import { Task } from "../../../types/kanban/task";

export interface Props {
  task: Task;
  ticketNumber: string;
  user?: KanbanUser;
  onSelect: () => void;
  onDelete: () => void;
}
