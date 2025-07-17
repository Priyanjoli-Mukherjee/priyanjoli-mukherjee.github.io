import { KanbanUser } from "../../../types/kanban/kanban-user";
import { Task } from "../../../types/kanban/task";

export interface Props {
  task: Task;
  user?: KanbanUser;
  onSelect: () => void;
  onDelete: () => void;
}
