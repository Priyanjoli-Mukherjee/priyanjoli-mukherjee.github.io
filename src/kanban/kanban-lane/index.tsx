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

  const ticketNumbers = useMemo(
    () => tasks.map((_task, index) => `PROJ-${index}`),
    [tasks],
  );

  const kanbanUsers = useKanbanUsers();

  const userById = useMemo(() => {
    const dict: Record<string, KanbanUser> = {};
    for (const user of kanbanUsers) {
      dict[user.id] = user;
    }
    return dict;
  }, [kanbanUsers]);

  function getInitials(name: string): string {
    const names = name.split(" ");
    const firstInitial = names[0][0];
    const lastInitial = names[names.length - 1][0];
    return `${firstInitial} ${lastInitial}`;
  }

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
            {filteredTasks.map((task, index) => (
              <DraggableItem key={task.id} id={task.id}>
                <Paper
                  onClick={() => setSelectedTask(task)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop={1}
                    marginBottom={0.5}
                    marginRight={1}
                    marginLeft={1}
                  >
                    <Typography variant="subtitle1">{task.title}</Typography>
                    <IconButton
                      onMouseDown={async (evt) => {
                        evt.stopPropagation();
                        onDelete(task);
                        await deleteTask(task);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingBottom={1.5}
                    marginBottom={1}
                    marginRight={2}
                    marginLeft={1}
                  >
                    <Typography variant="caption">
                      {ticketNumbers[index]}
                    </Typography>
                    <Box
                      width={25}
                      height={25}
                      borderRadius={15}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      style={{ backgroundColor: "rgb(191, 191, 191)" }}
                    >
                      <Typography variant="caption">
                        {task.storyPoints}
                      </Typography>
                    </Box>
                    {task.assignee && (
                      <Box
                        width={26}
                        height={26}
                        borderRadius={15}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        style={{ backgroundColor: "rgb(191, 191, 191)" }}
                      >
                        <Typography
                          variant="caption"
                          style={{ fontSize: "x-small" }}
                        >
                          {getInitials(userById[task.assignee].name)}
                        </Typography>
                      </Box>
                    )}
                  </Box>
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
