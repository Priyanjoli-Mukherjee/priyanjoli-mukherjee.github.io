import { Box, Paper, Typography } from "@mui/material";
import { Props } from "./props";
import { useMemo, useState } from "react";
import { Task } from "../../types/kanban/task";
import { TaskModal } from "../task-modal";
import { deleteTask } from "../../service/delete-task";
import { updateTask } from "../../service/update-task";
import { DraggableItem } from "./draggable-item";
import { DroppableArea } from "./droppable-area";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { KanbanUser } from "../../types/kanban/kanban-user";
import { useKanbanUsers } from "../../hooks/use-kanban-users";

export function KanbanLane({
  tasks,
  title,
  status,
  onChange,
  onDelete,
}: Props) {
  const [selectedTask, setSelectedTask] = useState<Task>();

  const filteredTasks = useMemo(
    () =>
      tasks
        .filter((task) => task.status === status)
        .sort((task1, task2) => task1.rank - task2.rank),
    [tasks, status],
  );

  const kanbanUsers = useKanbanUsers();

  const userById = useMemo(() => {
    const dict: Record<string, KanbanUser> = {};
    for (const user of kanbanUsers) {
      dict[user.id] = user;
    }
    return dict;
  }, [kanbanUsers]);

  return (
    <Box flex="1 1" marginRight={1}>
      <Paper
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "rgb(242, 242, 242)",
        }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <DroppableArea id={status}>
          <SortableContext
            items={filteredTasks}
            strategy={verticalListSortingStrategy}
          >
            {filteredTasks.map((task) => (
              <DraggableItem
                key={task.id}
                task={task}
                user={task.assignee ? userById[task.assignee] : undefined}
                onDelete={async () => {
                  onDelete(task);
                  await deleteTask(task);
                }}
                onSelect={() => setSelectedTask(task)}
              />
            ))}
          </SortableContext>
        </DroppableArea>
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
