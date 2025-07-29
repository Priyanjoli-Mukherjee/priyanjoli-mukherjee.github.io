import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { pickersSectionListClasses } from "@mui/x-date-pickers/PickersSectionList";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { NumberField } from "../../../components/number-field";
import { TextArea } from "../../../components/text-area";
import { useKanbanUsers } from "../../hooks/use-kanban-users";
import { Status } from "../../types/status";
import { Task } from "../../types/task";
import { Props } from "./props";

export function TaskModal({
  open,
  task,
  title,
  submitText,
  onClose,
  onSubmit,
}: Props) {
  const [newTask, setNewTask] = useState<Task>(
    task ?? {
      id: "",
      title: "",
      description: "",
      status: Status.TO_DO,
      rank: 0,
      ticketNumber: 0,
    },
  );

  const kanbanUsers = useKanbanUsers();

  useEffect(() => {
    setNewTask(
      task ?? {
        id: "",
        title: "",
        description: "",
        status: Status.TO_DO,
        rank: 0,
        ticketNumber: 0,
      },
    );
  }, [open, task]);

  return (
    <Box>
      <Dialog fullWidth maxWidth="md" open={open}>
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
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ notched: true }}
                label="Title"
                placeholder="Title"
                variant="outlined"
                value={newTask.title}
                onChange={(evt) =>
                  setNewTask({ ...newTask, title: evt.target.value })
                }
                fullWidth
                required
                sx={{ marginBottom: 2, marginTop: 1 }}
              />
              <TextArea
                label="Description"
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
                  slotProps={{
                    textField: {
                      InputLabelProps: { shrink: true },
                      InputProps: { notched: true },
                    },
                  }}
                  sx={{
                    flex: "1 1",
                    marginRight: 1,
                    minWidth: 0,
                    [`& .${pickersSectionListClasses.root}`]: {
                      opacity: 1,
                    },
                  }}
                />
                <Autocomplete
                  options={kanbanUsers}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputLabelProps={{
                        ...params.InputLabelProps,
                        shrink: true,
                      }}
                      InputProps={{ ...params.InputProps, notched: true }}
                      label="Assignee"
                      placeholder="Assign to User"
                    />
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
                <NumberField
                  label="Story Points"
                  min={0}
                  placeholder="Assign Points"
                  value={newTask.storyPoints}
                  onChange={(value) =>
                    setNewTask({
                      ...newTask,
                      storyPoints: value,
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
