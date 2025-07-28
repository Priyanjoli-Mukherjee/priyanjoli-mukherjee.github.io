import { KanbanUser } from "../../types/kanban-user";

export interface Props {
  isSelected?: boolean;
  user?: KanbanUser;
  onClick?: () => void;
}
