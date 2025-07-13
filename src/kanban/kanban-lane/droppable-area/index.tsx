import { useDroppable } from "@dnd-kit/core";
import { Props } from "./props";
import { PropsWithChildren } from "react";

export function DroppableArea({ id, children }: PropsWithChildren<Props>) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{ flex: "1 1", padding: 20, border: "2px dashed #ccc" }}
    >
      {children}
    </div>
  );
}
