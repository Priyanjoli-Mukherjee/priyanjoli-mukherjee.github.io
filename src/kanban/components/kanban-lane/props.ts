import { Status } from "../../types/status";
import { Task } from "../../types/task";

export interface Props {
  tasks: Task[];
  title: string;
  status: Status;
  onChange: (task: Task) => void;
  onDelete: (task: Task) => void;
}
