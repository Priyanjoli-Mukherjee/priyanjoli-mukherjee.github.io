import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { KanbanUser } from "../../../types/kanban/kanban-user";
import { Task } from "../../../types/kanban/task";

export interface Props {
  task: Task;
  user?: KanbanUser;
  listeners?: SyntheticListenerMap;
  onSelect?: () => void;
  onDelete?: () => void;
}
