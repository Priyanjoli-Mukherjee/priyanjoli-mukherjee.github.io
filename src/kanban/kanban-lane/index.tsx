import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Props } from "./props";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMemo, useState } from "react";
import { Task } from "../../types/kanban/task";
import { TaskModal } from "../task-modal";
import { deleteTask } from "../../service/delete-task";
import { updateTask } from "../../service/update-task";

export function KanbanLane({
  tasks,
  title,
  status,
  onChange,
  onDelete,
}: Props) {
  const [selectedTask, setSelectedTask] = useState<Task>();

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status],
  );

  return (
    <Box flex="1 1">
      <Paper style={{ padding: 10, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">{title}</Typography>
        {filteredTasks.map((task) => (
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
                onDelete(task);
                await deleteTask(task);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Paper>
        ))}
      </Paper>
      <TaskModal
        open={!!selectedTask}
        task={selectedTask}
        title="Edit Task"
        submitText="Update"
        onClose={() => setSelectedTask(undefined)}
        onSubmit={async (task) => {
          onChange(task);
          await updateTask(task);
        }}
      />
    </Box>
  );
}
