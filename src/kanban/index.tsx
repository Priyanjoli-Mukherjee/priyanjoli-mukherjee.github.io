import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTasks } from "./hooks/use-tasks";
import { createTask } from "./service/create-task";
import AddIcon from "@mui/icons-material/Add";
import { TaskModal } from "./components/task-modal";
import { useEffect, useMemo, useState } from "react";
import { KanbanLane } from "./components/kanban-lane";
import { Status } from "./types/status";
import {
  closestCenter,
  Collision,
  CollisionDetection,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Task } from "./types/task";
import { updateTask } from "./service/update-task";
import { KanbanUser } from "./types/kanban-user";
import { useKanbanUsers } from "./hooks/use-kanban-users";
import { UserBadge } from "./components/user-badge";
import { KanbanCard } from "./components/kanban-lane/kanban-card";

export function Kanban() {
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [assignees, setAssignees] = useState<Record<string, boolean>>({});
  const [draggingTask, setDraggingTask] = useState<Task>();

  const _tasks = useTasks();
  const kanbanUsers = useKanbanUsers();

  const [tasks, setTasks] = useState(_tasks);

  const lanes = [
    { status: Status.TO_DO, title: "To Do" },
    { status: Status.IN_PROGRESS, title: "In Progress" },
    { status: Status.IN_REVIEW, title: "In Review" },
    { status: Status.DONE, title: "Done" },
  ];

  const taskById = useMemo(() => {
    const dict: Record<string, Task> = {};
    for (const task of tasks) {
      dict[task.id] = task;
    }
    return dict;
  }, [tasks]);

  const userById = useMemo(() => {
    const dict: Record<string, KanbanUser> = {};
    for (const user of kanbanUsers) {
      dict[user.id] = user;
    }
    return dict;
  }, [kanbanUsers]);

  const isAssigneeFilterApplied = !!Object.values(assignees).filter(
    (val) => !!val,
  ).length;

  const filteredTasks = useMemo(
    () =>
      tasks.filter(
        (task) =>
          (!isAssigneeFilterApplied || assignees[task.assignee ?? ""]) &&
          task.title.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [assignees, isAssigneeFilterApplied, tasks, searchText, userById],
  );

  const sortedTasks = useMemo(
    () => [...filteredTasks].sort((task1, task2) => task1.rank - task2.rank),
    [filteredTasks],
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function onChange(task: Task) {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  }

  const collisionDetection: CollisionDetection = (args) => {
    const laneId = closestCenter({
      ...args,
      droppableContainers: args.droppableContainers.filter((container) =>
        Object.values(Status).includes(container.id as Status),
      ),
    })[0]?.id;

    const activeTask = taskById[args.active.id];
    if (!activeTask) {
      return [];
    }
    if (activeTask.status !== laneId) {
      return [{ id: laneId } as Collision];
    } else {
      const taskIdsInLane = new Set(
        tasks.filter((task) => task.status === laneId).map((task) => task.id),
      );
      const cardId = closestCenter({
        ...args,
        droppableContainers: args.droppableContainers.filter((container) =>
          taskIdsInLane.has(container.id as string),
        ),
      })[0]?.id;
      return [{ id: cardId } as Collision];
    }
  };

  function handleDragStart({ active }: DragStartEvent) {
    setDraggingTask(taskById[active.id]);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const status = over?.id as unknown as Status;
    const activeTask = taskById[active.id];
    if (Object.values(Status).includes(status)) {
      onChange({ ...activeTask, status });
    }
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, delta, over } = event;
    setDraggingTask(undefined);

    if (!over) {
      return;
    }
    let rank: number;
    const activeTask = taskById[active.id];
    const overTask = taskById[over.id];
    const overIndex = sortedTasks.findIndex((task) => task.id === over.id);
    if (overIndex < 0) {
      return;
    }
    if (delta.y > 0) {
      if (overIndex === sortedTasks.length - 1) {
        rank = overTask.rank + 1;
      } else {
        rank = (overTask.rank + sortedTasks[overIndex + 1].rank) / 2;
      }
    } else {
      if (overIndex === 0) {
        rank = overTask.rank - 1;
      } else {
        rank = (overTask.rank + sortedTasks[overIndex - 1].rank) / 2;
      }
    }
    const task = { ...activeTask, rank };
    onChange(task);
    await updateTask(task);
  }

  useEffect(() => {
    setTasks(_tasks);
  }, [_tasks]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
      style={{ backgroundColor: "white" }}
    >
      <Box display="flex" margin={1} justifyContent="space-between">
        <Box display="flex">
          <Box width={250}>
            <TextField
              value={searchText}
              placeholder="Search"
              label="Search"
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgb(242, 242, 242)",
              }}
              onChange={(evt) => setSearchText(evt.target.value)}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginLeft={2}
          >
            {kanbanUsers.map((user) => (
              <UserBadge
                key={user.id}
                isSelected={assignees[user.id]}
                user={user}
                onClick={() =>
                  setAssignees({ ...assignees, [user.id]: !assignees[user.id] })
                }
              />
            ))}
          </Box>
        </Box>
        <Button variant="contained" onClick={() => setAddDialogOpen(true)}>
          <AddIcon />
          <Typography sx={{ marginLeft: 1 }}>Create Task</Typography>
        </Button>
      </Box>
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
      >
        <Box
          display="grid"
          flex="1 1"
          gridTemplateColumns="repeat(4, 25%)"
          paddingBottom={1}
          paddingTop={1}
          minHeight={0}
          sx={{ overflowY: "auto" }}
        >
          {lanes.map(({ status, title }) => (
            <KanbanLane
              key={status}
              tasks={sortedTasks}
              title={title}
              status={status}
              onChange={onChange}
              onDelete={(task) =>
                setTasks(tasks.filter((t) => t.id !== task.id))
              }
            />
          ))}
        </Box>
        {draggingTask && (
          <DragOverlay>
            <KanbanCard
              task={draggingTask}
              user={
                draggingTask.assignee
                  ? userById[draggingTask.assignee]
                  : undefined
              }
            />
          </DragOverlay>
        )}
      </DndContext>
      <TaskModal
        open={isAddDialogOpen}
        title="Add Task"
        submitText="Create"
        onClose={() => setAddDialogOpen(false)}
        onSubmit={async (task) => {
          const maxRank = Math.max(...tasks.map(({ rank }) => rank));
          const newTask = await createTask({ ...task, rank: maxRank + 1 });
          setTasks([...tasks, newTask]);
        }}
      />
    </Box>
  );
}
