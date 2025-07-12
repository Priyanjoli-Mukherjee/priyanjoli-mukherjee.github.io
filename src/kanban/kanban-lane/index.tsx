import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Props } from "./props";
import DeleteIcon from "@mui/icons-material/Delete";
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

  return (
    <Box flex="1 1">
      <Paper style={{ padding: 10, display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">{title}</Typography>
        <DroppableArea id={status}>
          <SortableContext
            items={filteredTasks}
            strategy={verticalListSortingStrategy}
          >
            {filteredTasks.map((task) => (
              <DraggableItem key={task.id} id={task.id}>
                <Paper
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
                    onMouseDown={async (evt) => {
                      evt.stopPropagation();
                      onDelete(task);
                      await deleteTask(task);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Paper>
              </DraggableItem>
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
