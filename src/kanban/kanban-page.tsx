import { Box } from "@mui/material";
import { useTasks } from "../hooks/use-tasks";

export function Kanban() {
  const tasks = useTasks();
  return (
    <Box>
      {tasks.map((task) => (
        <Box key={task.id}>{task.title}</Box>
      ))}
    </Box>
  );
}
