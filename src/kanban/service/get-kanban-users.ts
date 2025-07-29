import axios from "axios";

import { BASE_URL } from "../../service/base-url";
import { KanbanUser } from "../types/kanban-user";

export async function getKanbanUsers(): Promise<KanbanUser[]> {
  const { data } = await axios.get(`${BASE_URL}/kanban-users`);
  return data;
}
