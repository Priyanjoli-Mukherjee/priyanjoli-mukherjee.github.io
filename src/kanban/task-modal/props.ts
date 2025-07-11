import { Task } from "../../types/kanban/task";

export interface Props {
  open: boolean;
  task?: Task;
  title: string;
  submitText: string;
  onClose(): void;
  onSubmit(task: Task): Promise<void>;
}
