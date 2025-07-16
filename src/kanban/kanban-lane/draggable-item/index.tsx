import { Props } from "./props";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { getInitials } from "./get-initials";

export function DraggableItem({
  task,
  ticketNumber,
  user,
  onSelect,
  onDelete,
}: Props) {
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
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box
              {...listeners}
              color="rgb(180, 180, 180)"
              marginRight={0.5}
              sx={{ cursor: "grab" }}
            >
              <DragIndicatorIcon />
            </Box>
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
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingBottom={1.5}
          marginBottom={1}
          marginRight={2}
          marginLeft={1}
        >
          <Typography variant="caption">{ticketNumber}</Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              width={25}
              height={25}
              borderRadius={15}
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ backgroundColor: "rgb(191, 191, 191)" }}
            >
              <Typography variant="caption">{task.storyPoints}</Typography>
            </Box>
            {user && (
              <Box
                width={26}
                height={26}
                borderRadius={15}
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginLeft={1}
                style={{ backgroundColor: "rgb(191, 191, 191)" }}
              >
                <Typography variant="caption" style={{ fontSize: "x-small" }}>
                  {getInitials(user.name)}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
