import axios from "axios";
import { BASE_URL } from "../../service/base-url";
import { Task } from "../types/task";

export async function getTasks(): Promise<Task[]> {
  const { data } = await axios.get(`${BASE_URL}/tasks`);
  return data;
}
