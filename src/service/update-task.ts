import axios from "axios";
import { Task } from "../types/kanban/task";
import { BASE_URL } from "./base-url";

export async function updateTask(task: Task): Promise<Task> {
  const { data } = await axios.put(`${BASE_URL}/task/${task.id}`, task);
  return data;
}
