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

  const _kanbanUsers = useKanbanUsers();

  const [kanbanUsers, setKanbanUsers] = useState(_kanbanUsers);

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
                value={newTask.dueDate ? dayjs(newTask.dueDate) : undefined}
                onChange={(newValue) =>
                  setNewTask({ ...newTask, dueDate: newValue?.toString() })
                }
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
                onClick={() => console.log(kanbanUsers)}
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
