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
  Autocomplete,
  Typography,
} from "@mui/material";
import { Props } from "./props";
import { Status } from "../../types/kanban/status";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useKanbanUsers } from "../../hooks/use-kanban-users";

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

  const kanbanUsers = useKanbanUsers();

  return (
    <Box>
      <Dialog fullWidth maxWidth="md" open>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {title}
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
        </DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box display="flex" flexDirection="column" width="100%">
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
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Description"
                multiline
                rows={3}
                placeholder="Description"
                variant="outlined"
                value={newTask.description}
                onChange={(evt) =>
                  setNewTask({ ...newTask, description: evt.target.value })
                }
                fullWidth
                required
                sx={{ marginBottom: 2 }}
              />
              <Box display="flex" width="100%">
                <DatePicker
                  label="Due Date"
                  value={newTask.dueDate ? dayjs(newTask.dueDate) : null}
                  onChange={(newValue) =>
                    setNewTask({ ...newTask, dueDate: newValue?.toString() })
                  }
                  sx={{ flex: "1 1", marginRight: 1, minWidth: 0 }}
                />
                <Autocomplete
                  options={kanbanUsers}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField {...params} label="Assignee" />
                  )}
                  value={
                    kanbanUsers.find((user) => user.id === newTask.assignee) ||
                    null
                  }
                  onChange={(_evt, newValue) =>
                    setNewTask({ ...newTask, assignee: newValue?.id })
                  }
                  sx={{ flex: "1 1", marginRight: 1, minWidth: 0 }}
                />
                <TextField
                  label="Story Points"
                  placeholder="Story Points"
                  variant="outlined"
                  type="number"
                  value={newTask.storyPoints || 0}
                  onChange={(evt) =>
                    setNewTask({
                      ...newTask,
                      storyPoints: parseInt(evt.target.value),
                    })
                  }
                  sx={{ flex: "1 1", minWidth: 0 }}
                />
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            disabled={!newTask?.title || !newTask?.description}
            onClick={async () => {
              await onSubmit(newTask);
              onClose();
            }}
          >
            <Typography variant="body2">{submitText}</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
