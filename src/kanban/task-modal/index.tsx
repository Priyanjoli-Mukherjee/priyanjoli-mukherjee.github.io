import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import { Props } from "./props";
import { Status } from "../../types/kanban/status";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

export function TaskModal({
  task,
  title,
  submitText,
  onClose,
  onSubmit,
}: Props) {
  const [newTask, setNewTask] = useState(
    task ?? {
      id: "",
      title: "",
      description: "",
      status: Status.IN_PROGRESS,
      rank: 0,
    },
  );

  return (
    <Box>
      <Dialog open>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" flexDirection="column">
              <TextField
                label="Title"
                placeholder="Title"
                variant="outlined"
                value={newTask.title}
                onChange={(evt) =>
                  setNewTask({ ...newTask, title: evt.target.value })
                }
                fullWidth
                required
              />
              <TextField
                label="Description"
                placeholder="Description"
                variant="outlined"
                value={newTask.description}
                onChange={(evt) =>
                  setNewTask({ ...newTask, description: evt.target.value })
                }
                fullWidth
                required
              />
              <TextField
                label="Due Date"
                type="date"
                variant="outlined"
                value={newTask.dueDate}
                onChange={(evt) =>
                  setNewTask({ ...newTask, dueDate: evt.target.value })
                }
                fullWidth
              />
              <TextField
                label="Assignee"
                placeholder="Assignee"
                variant="outlined"
                value={newTask.assignee}
                onChange={(evt) =>
                  setNewTask({ ...newTask, assignee: evt.target.value })
                }
                fullWidth
              />
              <TextField
                label="Story Points"
                placeholder="Story Points"
                variant="outlined"
                type="number"
                value={newTask.storyPoints}
                onChange={(evt) =>
                  setNewTask({
                    ...newTask,
                    storyPoints: parseInt(evt.target.value),
                  })
                }
                fullWidth
              />
            </Box>
            <IconButton
              onClick={onClose}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CancelPresentationIcon />
            </IconButton>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async () => {
              await onSubmit(newTask);
              onClose();
            }}
          >
            {submitText}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
