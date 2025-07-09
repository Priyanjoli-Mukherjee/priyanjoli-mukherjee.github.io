import { Box, IconButton, Paper } from "@mui/material";
import { useTasks } from "../hooks/use-tasks";
import { createTask } from "../service/create-task";
import { updateTask } from "../service/update-task";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TaskModal } from "./task-modal";
import { useState } from "react";
import { Task } from "../types/kanban/task";

export function Kanban() {
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);

  const tasks = useTasks();

  return (
    <Box>
      <IconButton onClick={() => setAddDialogOpen(true)}>
        <AddCircleIcon />
      </IconButton>
      <Paper>
        {tasks.map((task) => (
          <Paper key={task.id} onClick={() => setSelectedTask(task)}>
            {task.title}
          </Paper>
        ))}
      </Paper>
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          title="Edit Task"
          submitText="Update"
          onClose={() => setSelectedTask(undefined)}
          onSubmit={updateTask}
        />
      )}
      {isAddDialogOpen && (
        <TaskModal
          title="Add Task"
          submitText="Create"
          onClose={() => setAddDialogOpen(false)}
          onSubmit={createTask}
        />
      )}
    </Box>
  );
}
