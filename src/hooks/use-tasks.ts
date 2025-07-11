import { useQuery } from "react-query";
import { getTasks } from "../service/get-tasks";

export function useTasks() {
  const { data: tasks } = useQuery("tasks", getTasks);
  return tasks!;
}
