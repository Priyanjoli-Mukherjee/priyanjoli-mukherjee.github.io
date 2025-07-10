import { Box, IconButton, Paper } from "@mui/material";
import { useTasks } from "../hooks/use-tasks";
import { createTask } from "../service/create-task";
import { updateTask } from "../service/update-task";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { TaskModal } from "./task-modal";
import { useState } from "react";
import { Task } from "../types/kanban/task";
import { deleteTask } from "../service/delete-task";

export function Kanban() {
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);

  const _tasks = useTasks();

  const [tasks, setTasks] = useState(_tasks);

  return (
    <Box>
      <IconButton onClick={() => setAddDialogOpen(true)}>
        <AddCircleIcon />
      </IconButton>
      <Paper style={{ padding: 10 }}>
        {tasks.map((task) => (
          <Paper
            key={task.id}
            onClick={() => setSelectedTask(task)}
            style={{
              cursor: "pointer",
              margin: 10,
              padding: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>{task.title}</Box>
            <IconButton
              onClick={async (evt) => {
                evt.stopPropagation();
                setTasks(tasks.filter((t) => t.id !== task.id));
                await deleteTask(task);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Paper>
        ))}
      </Paper>
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          title="Edit Task"
          submitText="Update"
          onClose={() => setSelectedTask(undefined)}
          onSubmit={async (task) => {
            setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
            await updateTask(task);
          }}
        />
      )}
      {isAddDialogOpen && (
        <TaskModal
          title="Add Task"
          submitText="Create"
          onClose={() => setAddDialogOpen(false)}
          onSubmit={async (task) => {
            const newTask = await createTask(task);
            setTasks([...tasks, newTask]);
          }}
        />
      )}
    </Box>
  );
}
