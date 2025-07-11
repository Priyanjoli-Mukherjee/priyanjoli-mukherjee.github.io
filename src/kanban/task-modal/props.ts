import { Task } from "../../types/kanban/task";

export interface Props {
  task?: Task;
  title: string;
  submitText: string;
  onClose(): void;
  onSubmit(task: Task): Promise<void>;
}
