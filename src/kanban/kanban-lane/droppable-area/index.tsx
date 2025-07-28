import { useDroppable } from "@dnd-kit/core";
import { Props } from "./props";
import { PropsWithChildren } from "react";

export function DroppableArea({ id, children }: PropsWithChildren<Props>) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} style={{ flex: "1 1" }}>
      {children}
    </div>
  );
}
