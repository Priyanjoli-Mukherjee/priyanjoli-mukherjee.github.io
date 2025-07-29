import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { UserBadge } from "../../user-badge";
import { Props } from "./props";

export function KanbanCard({
  listeners,
  task,
  user,
  onSelect,
  onDelete,
}: Props) {
  return (
    <Paper
      onClick={onSelect}
      style={{
        alignItems: "center",
        cursor: "pointer",
        display: "flex",
        marginBottom: 8,
        width: "100%",
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
        minWidth={0}
      >
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          marginRight={0.5}
          width="100%"
        >
          <Box
            alignItems="center"
            display="flex"
            flex="1 1"
            justifyContent="center"
            minWidth={0}
          >
            <Typography
              variant="subtitle1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "100%",
              }}
            >
              {task.title}
            </Typography>
          </Box>
          <IconButton
            onMouseDown={async (evt) => {
              evt.stopPropagation();
              onDelete?.();
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
  );
}
