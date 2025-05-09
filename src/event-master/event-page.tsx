import { useMemo, useState } from "react";
import { getEventData } from "./service/get-event-data";
import { Box, Typography } from "@mui/material";
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
    <Box margin={5} display="flex" flexDirection="column" alignItems="center">
      <Typography>Concerts in United States</Typography>
      {filteredEvents.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          artistName={artistById[event.artistId].name}
          onSelectEvent={() => setSelectedEvent(event)}
        />
      ))}
      {selectedEvent && (
        <CheckoutDrawer
          event={selectedEvent}
          onCancel={() => setSelectedEvent(undefined)}
        />
      )}
    </Box>
  );
}
