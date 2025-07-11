import { Box, IconButton } from "@mui/material";
import { useTasks } from "../hooks/use-tasks";
import { createTask } from "../service/create-task";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TaskModal } from "./task-modal";
import { useEffect, useState } from "react";
import { KanbanLane } from "./kanban-lane";
import { Status } from "../types/kanban/status";

export function Kanban() {
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);

  const _tasks = useTasks();

  const [tasks, setTasks] = useState(_tasks);

  const lanes = [
    { status: Status.TO_DO, title: "To Do" },
    { status: Status.IN_PROGRESS, title: "In Progress" },
    { status: Status.IN_REVIEW, title: "In Review" },
    { status: Status.DONE, title: "Done" },
  ];

  useEffect(() => {
    setTasks(_tasks);
  }, [_tasks]);

  return (
    <Box width="100%">
      <IconButton onClick={() => setAddDialogOpen(true)}>
        <AddCircleIcon />
      </IconButton>
      <Box display="flex" width="100%">
        {lanes.map(({ status, title }) => (
          <KanbanLane
            key={status}
            tasks={tasks}
            title={title}
            status={status}
            onChange={(task) =>
              setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
            }
            onDelete={(task) => setTasks(tasks.filter((t) => t.id !== task.id))}
          />
        ))}
      </Box>
      <TaskModal
        open={isAddDialogOpen}
        title="Add Task"
        submitText="Create"
        onClose={() => setAddDialogOpen(false)}
        onSubmit={async (task) => {
          const newTask = await createTask(task);
          setTasks([...tasks, newTask]);
        }}
      />
    </Box>
  );
}
