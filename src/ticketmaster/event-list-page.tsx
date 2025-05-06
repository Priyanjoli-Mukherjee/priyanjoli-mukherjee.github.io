import { Box, Paper, Typography } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { getEventData } from "./get-event-data";
import { TicketmasterEvent } from "./ticketmaster-event";
import { EventDialog } from "./event-dialog";
import { CheckoutDrawer } from "./checkout-drawer";

export function EventListPage() {
  const [selectedEvent, setSelectedEvent] = useState<TicketmasterEvent>();
  const [numTickets, setNumTickets] = useState<number>();

  const events = useMemo(() => getEventData(), []);

  const onCloseDialog = useCallback(() => setSelectedEvent(undefined), []);
  const onCloseDrawer = useCallback(() => {
    setSelectedEvent(undefined);
    setNumTickets(undefined);
  }, []);

  return (
    <Box margin={5} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3">Welcome to Ticketmaster!</Typography>
      <Typography variant="h4">
        Please select an event below to purchase tickets.
      </Typography>
      {events.map((event) => (
        <Paper
          key={event.title}
          elevation={24}
          style={{ margin: 15, padding: 10, cursor: "pointer" }}
          onClick={() => setSelectedEvent(event)}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">{event.title}</Typography>
            <Typography variant="h5">{`$${event.price}`}</Typography>
          </Box>
          <Typography variant="h6">{event.artist}</Typography>
          <Typography variant="body1" style={{ fontStyle: "oblique" }}>
            {event.description}
          </Typography>
        </Paper>
      ))}
      {selectedEvent && !numTickets && (
        <EventDialog
          event={selectedEvent}
          onCancel={onCloseDialog}
          onSubmit={setNumTickets}
        />
      )}
      {selectedEvent && numTickets && (
        <CheckoutDrawer
          event={selectedEvent}
          numTickets={numTickets}
          onCancel={onCloseDrawer}
        />
      )}
    </Box>
  );
}
