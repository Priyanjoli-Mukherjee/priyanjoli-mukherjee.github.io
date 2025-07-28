import { ChangeEvent, useCallback, useState } from "react";
import { Event } from "../types/event";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

type Props = {
  event: Event;
  onCancel: () => void;
  onSubmit: (numTickets: number) => void;
};

export function EventDialog(props: Props) {
  const [numTickets, setNumTickets] = useState(1);

  const onChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) =>
      setNumTickets(parseInt(evt.target.value)),
    [],
  );

  const onSubmit = useCallback(
    () => props.onSubmit(numTickets),
    [numTickets, props.onSubmit],
  );

  return (
    <Dialog open fullWidth maxWidth="xs">
      <DialogTitle>Purchase Tickets</DialogTitle>
      <DialogContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="center"
        >
          <Box>
            <Typography>{props.event.title}</Typography>
            <Typography>{props.event.artistId}</Typography>
          </Box>
          <TextField
            value={numTickets}
            onChange={onChange}
            type="number"
            style={{
              width: 75,
              height: 75,
              color: "black",
              colorScheme: "black",
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
