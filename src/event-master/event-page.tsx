import { useMemo, useState } from "react";
import { getEventData } from "./service/get-event-data";
import { Box, Paper, Typography } from "@mui/material";
import { EventCard } from "./event-card";
import { useSearchParams } from "react-router-dom";
import { Event } from "./types/event";
import { CheckoutDrawer } from "./checkout-drawer";
import keyBy from "lodash/keyBy";
import { getArtistData } from "./service/get-artist-data";

export function EventPage() {
  const events = useMemo(() => getEventData(), []);
  const [searchParams] = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  const artistId = useMemo(() => searchParams.get("artistId"), [searchParams]);
  const artists = useMemo(() => getArtistData(), []);

  const artistById = keyBy(artists, (artist) => artist.id);

  const filteredEvents = useMemo(
    () => events.filter((event) => event.artistId === artistId),
    [events, artistId],
  );

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100%"
      padding={5}
      width="100%"
      sx={{ backgroundColor: "white" }}
    >
      <Typography color="black" variant="h5" sx={{ marginBottom: 1 }}>
        Concerts in the United States
      </Typography>
      <Paper
        elevation={24}
        sx={{
          flex: "1 1",
          maxWidth: 1000,
          minHeight: 0,
          padding: 2,
          width: "100%",
        }}
      >
        <Box height="100%" overflow="auto" width="100%">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              artistName={artistById[event.artistId].name}
              onSelectEvent={() => setSelectedEvent(event)}
            />
          ))}
        </Box>
      </Paper>
      {selectedEvent && (
        <CheckoutDrawer
          event={selectedEvent}
          onCancel={() => setSelectedEvent(undefined)}
        />
      )}
    </Box>
  );
}
