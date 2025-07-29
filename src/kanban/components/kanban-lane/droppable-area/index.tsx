import { useDroppable } from "@dnd-kit/core";
import { PropsWithChildren } from "react";

import { Props } from "./props";

export function DroppableArea({ id, children }: PropsWithChildren<Props>) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} style={{ flex: "1 1" }}>
      {children}
    </div>
  );
}
