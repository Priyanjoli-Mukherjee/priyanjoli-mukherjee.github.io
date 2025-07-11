import { Status } from "../../types/kanban/status";
import { Task } from "../../types/kanban/task";

export interface Props {
  tasks: Task[];
  title: string;
  status: Status;
  onChange: (task: Task) => void;
  onDelete: (task: Task) => void;
}
