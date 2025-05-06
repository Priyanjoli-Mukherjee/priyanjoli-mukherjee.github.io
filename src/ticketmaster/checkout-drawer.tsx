import { TicketmasterEvent } from "./ticketmaster-event";
import { Box, Button, Drawer, Typography } from "@mui/material";

type Props = {
  event: TicketmasterEvent;
  numTickets: number;
  onCancel: () => void;
};

export function CheckoutDrawer(props: Props) {
  return (
    <Drawer open anchor="right" onClose={props.onCancel}>
      <Box
        width={400}
        height="100%"
        padding={5}
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" justifyContent="space-between" marginBottom={4}>
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">
            ${props.numTickets * props.event.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box width={300}>
            <Typography variant="h6">{props.event.title}</Typography>
            <Typography>{props.event.artist}</Typography>
            <Typography variant="body2" style={{ fontStyle: "oblique" }}>
              {props.event.description}
            </Typography>
          </Box>
          <Typography variant="h6">
            ${props.event.price} &times; {props.numTickets}
          </Typography>
        </Box>
        <Box
          flexGrow={1}
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
        >
          <Button variant="contained" onClick={props.onCancel}>
            Place Order
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
