import axios from "axios";
import { Task } from "../types/kanban/task";
import { BASE_URL } from "./base-url";

export async function deleteTask(task: Task): Promise<Task> {
  const { data } = await axios.delete(`${BASE_URL}/task/${task.id}`);
  return data;
}
