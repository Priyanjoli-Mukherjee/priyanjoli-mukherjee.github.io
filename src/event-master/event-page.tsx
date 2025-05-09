import { useMemo, useState } from "react";
import { getEventData } from "./service/get-event-data";
import { Box, Paper, Typography } from "@mui/material";
import { EventCard } from "./event-card";
import { useSearchParams } from "react-router-dom";
import { Event } from "./types/event";
import { CheckoutDrawer } from "./checkout-drawer";
import keyBy from "lodash/keyBy";
import { getArtistData } from "./service/get-artist-data";
import { SearchBanner } from "./search-banner";
import dayjs from "dayjs";

export function EventPage() {
  const events = useMemo(() => getEventData(), []);
  const [searchParams] = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  const artistId = searchParams.get("artistId");
  const city = searchParams.get("city");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const artists = useMemo(() => getArtistData(), []);

  const artistById = keyBy(artists, (artist) => artist.id);

  const filteredEvents = useMemo(
    () =>
      events.filter(
        (event) =>
          (!artistId || event.artistId === artistId) &&
          (!city || event.venue.city === city) &&
          (!startDate || event.venue.timestamp >= dayjs(startDate).valueOf()) &&
          (!endDate || event.venue.timestamp <= dayjs(endDate).valueOf()),
      ),
    [events, artistId, city],
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
      <SearchBanner />
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
