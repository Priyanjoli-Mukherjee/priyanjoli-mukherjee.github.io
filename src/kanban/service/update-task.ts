import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { Task } from "../types/task";

export async function updateTask(task: Task): Promise<Task> {
  const { data } = await axios.put(`${BASE_URL}/task/${task.id}`, task);
  return data;
}
