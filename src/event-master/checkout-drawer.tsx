import { Event } from "./types/event";
import { Box, Button, Drawer, Typography } from "@mui/material";

type Props = {
  event: Event;
  onCancel: () => void;
};

export function CheckoutDrawer({ event, onCancel }: Props) {
  const { artistId, title } = event;
  const numTickets = 1;
  const price = 100;
  return (
    <Drawer open anchor="left" onClose={onCancel}>
      <Box
        width={400}
        height="100%"
        padding={5}
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" justifyContent="space-between" marginBottom={4}>
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">${numTickets * price}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box width={300}>
            <Typography variant="h6">{title}</Typography>
            <Typography>{artistId}</Typography>
          </Box>
          <Typography variant="h6">
            ${price} &times; {numTickets}
          </Typography>
        </Box>
        <Box
          flexGrow={1}
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
        >
          <Button variant="contained" onClick={onCancel}>
            Place Order
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
