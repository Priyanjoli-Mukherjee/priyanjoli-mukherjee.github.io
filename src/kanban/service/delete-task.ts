import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Task } from "../types/task";

export async function deleteTask(task: Task): Promise<Task> {
  const { data } = await axios.delete(`${BASE_URL}/task/${task.id}`);
  return data;
}
