import axios from "axios";
import { BASE_URL } from "./base-url";
import { Task } from "../types/kanban/task";

export async function getTasks(): Promise<Task[]> {
  const { data } = await axios.get(`${BASE_URL}/tasks`);
  return data;
}
