import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useCallback, useState } from "react";

import { Props } from "./props";

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
