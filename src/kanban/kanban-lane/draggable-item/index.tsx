import { Props } from "./props";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { UserBadge } from "../../user-badge";

export function DraggableItem({ task, user, onSelect, onDelete }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <Paper
        onClick={() => onSelect()}
        style={{
          alignItems: "center",
          cursor: "pointer",
          display: "flex",
          marginBottom: 8,
        }}
      >
        <Box
          {...listeners}
          color="rgb(180, 180, 180)"
          marginRight={0.5}
          sx={{ cursor: "grab" }}
        >
          <DragIndicatorIcon />
        </Box>
        <Box
          display="flex"
          flex="1 1"
          flexDirection="column"
          justifyContent="space-between"
          margin={0.5}
        >
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            marginRight={0.5}
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography variant="subtitle1">{task.title}</Typography>
            </Box>
            <IconButton
              onMouseDown={async (evt) => {
                evt.stopPropagation();
                onDelete();
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            marginRight={1}
          >
            <Typography variant="caption">{`PROJ-${task.ticketNumber}`}</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                borderRadius={2}
                paddingLeft={1}
                paddingRight={1}
                marginRight={0.5}
                style={{ backgroundColor: "rgb(225, 225, 225)" }}
              >
                <Typography variant="caption">{task.storyPoints}</Typography>
              </Box>
              <UserBadge user={user} />
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
