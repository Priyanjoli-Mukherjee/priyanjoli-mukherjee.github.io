import axios from "axios";
import { Task } from "../types/task";
import { BASE_URL } from "../../service/base-url";

export async function createTask(task: Omit<Task, "id">): Promise<Task> {
  const { data } = await axios.post(`${BASE_URL}/task`, task);
  return data;
}
