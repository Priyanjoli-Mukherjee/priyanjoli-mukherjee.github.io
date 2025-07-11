import axios from "axios";
import { KanbanUser } from "../types/kanban/kanban-user";
import { BASE_URL } from "./base-url";

export async function getKanbanUsers(): Promise<KanbanUser[]> {
  const { data } = await axios.get(`${BASE_URL}/kanban-users`);
  return data;
}
