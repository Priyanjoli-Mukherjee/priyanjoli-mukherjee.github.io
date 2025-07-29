import { useQuery } from "react-query";

import { getKanbanUsers } from "../service/get-kanban-users";

export function useKanbanUsers() {
  const { data } = useQuery("kanban-users", getKanbanUsers);
  return data!;
}
