import axios from "axios";
import { KanbanUser } from "../types/kanban-user";
import { BASE_URL } from "../../service/base-url";

export async function getKanbanUsers(): Promise<KanbanUser[]> {
  const { data } = await axios.get(`${BASE_URL}/kanban-users`);
  return data;
}
