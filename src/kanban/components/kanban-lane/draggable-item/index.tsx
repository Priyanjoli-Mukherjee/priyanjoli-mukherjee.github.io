import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { KanbanCard } from "../kanban-card";
import { Props } from "./props";

export function DraggableItem({ task, user, onSelect, onDelete }: Props) {
  const { active, attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, opacity: active?.id === task.id ? 0 : 1 }}
      {...attributes}
    >
      <KanbanCard
        listeners={listeners}
        task={task}
        user={user}
        onDelete={onDelete}
        onSelect={onSelect}
      />
    </div>
  );
}
