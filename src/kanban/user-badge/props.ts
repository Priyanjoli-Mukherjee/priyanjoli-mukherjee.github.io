import { KanbanUser } from "../../types/kanban/kanban-user";

export interface Props {
  isSelected?: boolean;
  user?: KanbanUser;
  onClick?: () => void;
}
