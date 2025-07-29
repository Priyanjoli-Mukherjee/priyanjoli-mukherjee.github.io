import { KanbanUser } from "../../../types/kanban-user";
import { Task } from "../../../types/task";

export interface Props {
  task: Task;
  user?: KanbanUser;
  onSelect: () => void;
  onDelete: () => void;
}
