import { ChangeEvent, useMemo, useState } from "react";
import { Artist } from "./types/artist";
import { Event } from "./types/event";
import { Box, Button, Drawer, TextField, Typography } from "@mui/material";

type Props = {
  artist: Artist;
  event: Event;
  onCancel: () => void;
  onSubmit: () => void;
};

export function CheckoutDrawer({ artist, event, onCancel, onSubmit }: Props) {
  const { title, tickets } = event;
  const { name } = artist;
  const [quantityByTicketId, setQuantityByTicketId] = useState<
    Record<string, number>
  >({});
  const totalPrice = useMemo(
    () =>
      tickets.reduce(
        (sum, ticket) =>
          sum + ticket.price * (quantityByTicketId[ticket.id] ?? 0),
        0,
      ),
    [tickets, quantityByTicketId],
  );

  return (
    <Drawer open anchor="left" onClose={onCancel}>
      <Box
        width={400}
        height="100%"
        padding={5}
        display="flex"
        flexDirection="column"
      >
        <Typography>Purcahse Ticktes</Typography>
        <Typography>{`${name}: ${title.toUpperCase()}`}</Typography>
        <Box display="flex" flex="1 1" flexDirection="column" overflow="auto">
          {tickets.map(({ id, price, seat }) => (
            <Box display="flex" key={id} justifyContent="space-between">
              <Typography>{seat}</Typography>
              <Box display="flex">
                <Typography>{`$${price}`}</Typography>
                <Typography>&times;</Typography>
                <TextField
                  value={quantityByTicketId[id] ?? 0}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    setQuantityByTicketId({
                      ...quantityByTicketId,
                      [id]: parseInt(evt.target.value),
                    })
                  }
                  type="number"
                  sx={{
                    width: 75,
                    height: 75,
                    color: "black",
                    colorScheme: "black",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Typography>{`Total: $${totalPrice}`}</Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onSubmit}>
            Purchase
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
