import { Box, Button } from "@mui/material";
import { useTasks } from "../hooks/use-tasks";
import { createTask } from "../service/create-task";
import { Status } from "../types/kanban/status";
import { updateTask } from "../service/update-task";
import { deleteTask } from "../service/delete-task";

export function Kanban() {
  const tasks = useTasks();

  return (
    <Box>
      <Button
        onClick={() =>
          createTask({
            title: "Test",
            description: "Testing",
            rank: 0,
            status: Status.DONE,
          })
        }
      >
        Add
      </Button>
      {tasks.map((task) => (
        <Box key={task.id}>
          {task.title}
          <Button
            onClick={() => updateTask({ ...task, description: "Test 2" })}
          >
            Update
          </Button>
          <Button onClick={() => deleteTask(task)}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
}
