import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import { KanbanUser } from "../../../types/kanban-user";
import { Task } from "../../../types/task";

export interface Props {
  task: Task;
  user?: KanbanUser;
  listeners?: SyntheticListenerMap;
  onSelect?: () => void;
  onDelete?: () => void;
}
