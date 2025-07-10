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
      <Dialog open>
        <DialogTitle>
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
              <DatePicker
                label="Due Date"
                value={newTask.dueDate ? dayjs(newTask.dueDate) : null}
                onChange={(newValue) =>
                  setNewTask({ ...newTask, dueDate: newValue?.toString() })
                }
              />
              <Autocomplete
                disablePortal
                options={kanbanUsers}
                sx={{ width: 300 }}
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
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
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
