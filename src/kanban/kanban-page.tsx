import { Box, IconButton } from "@mui/material";
import { useTasks } from "../hooks/use-tasks";
import { createTask } from "../service/create-task";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TaskModal } from "./task-modal";
import { useEffect, useMemo, useState } from "react";
import { KanbanLane } from "./kanban-lane";
import { Status } from "../types/kanban/status";
import {
  closestCenter,
  Collision,
  CollisionDetection,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Task } from "../types/kanban/task";
import { updateTask } from "../service/update-task";

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

  const sortedTasks = useMemo(
    () => [...tasks].sort((task1, task2) => task1.rank - task2.rank),
    [tasks],
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const taskById = useMemo(() => {
    const dict: Record<string, Task> = {};
    for (const task of tasks) {
      dict[task.id] = task;
    }
    return dict;
  }, [tasks]);

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
    <Box display="flex" flexDirection="column" height="100%" width="100%">
      <IconButton onClick={() => setAddDialogOpen(true)}>
        <AddCircleIcon />
      </IconButton>
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <Box display="flex" flex="1 1" width="100%" margin={1}>
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
