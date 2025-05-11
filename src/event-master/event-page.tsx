import { useMemo, useState } from "react";
import { getEventData } from "./service/get-event-data";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { EventCard } from "./event-card";
import { Link, useSearchParams } from "react-router-dom";
import { Event } from "./types/event";
import { CheckoutDrawer } from "./checkout-drawer";
import keyBy from "lodash/keyBy";
import { getArtistData } from "./service/get-artist-data";
import { SearchBanner } from "./search-banner";
import { Artist } from "./types/artist";
import { City } from "./types/city";
import { getCities } from "./service/get-cities";
import DJ from "../images/event-master/DJ.jpg";

export function EventPage() {
  const events = useMemo(() => getEventData(), []);
  const [searchParams] = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

  const artistId = searchParams.get("artistId");
  const cityId = searchParams.get("cityId");
  const startDate = parseInt(searchParams.get("startDate") ?? "");
  const endDate = parseInt(searchParams.get("endDate") ?? "");

  const artists = useMemo(() => getArtistData(), []);
  const cities = useMemo(() => getCities(), []);

  const artistById: Record<string, Artist> = useMemo(
    () => keyBy(artists, ({ id }) => id),
    [artists],
  );

  const cityById: Record<string, City> = useMemo(
    () => keyBy(cities, ({ id }) => id),
    [cities],
  );

  const filteredEvents = useMemo(
    () =>
      events
        .filter(
          (event) =>
            (!artistId || event.artistId === artistId) &&
            (!cityId || event.venue.cityId === cityId) &&
            (isNaN(startDate) || event.venue.timestamp >= startDate) &&
            (isNaN(endDate) || event.venue.timestamp <= endDate),
        )
        .sort(
          (event1, event2) => event1.venue.timestamp - event2.venue.timestamp,
        ),
    [events, artistId, cityId],
  );

  const artist = artistById[artistId ?? ""];
  const city = cityById[cityId ?? ""];

  const { genre, image, imageOffset, name } = artist ??
    city ?? { image: DJ, imageOffset: 25, name: "Search" };

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100%"
      paddingBottom={2}
      width="100%"
      sx={{ backgroundColor: "white" }}
    >
      <SearchBanner />
      <Box
        alignItems="flex-start"
        display="flex"
        justifyContent="center"
        maxHeight={200}
        overflow="hidden"
        position="relative"
        width="100%"
      >
        <img
          src={image}
          width="100%"
          style={{ marginTop: `-${imageOffset}%` }}
        />
        <Box
          bottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          left={0}
          padding={1}
          position="absolute"
          right={0}
          top={0}
          sx={{ backgroundColor: "#00000055" }}
        >
          <Link to="/event-master">
            <IconButton sx={{ color: "white" }}>
              <ArrowCircleLeftIcon fontSize="large" />
            </IconButton>
          </Link>
          <Box display="flex" flexDirection="column" paddingLeft={1}>
            <Typography variant="h5">{genre}</Typography>
            <Typography variant="h3">{`${name} Tickets`}</Typography>
          </Box>
        </Box>
      </Box>
      <Typography color="black" variant="h5" sx={{ marginBottom: 1 }}>
        Concerts in the United States
      </Typography>
      {!filteredEvents.length ? (
        <Typography color="black">No Events to Display</Typography>
      ) : (
        <Box
          alignItems="center"
          display="flex"
          flex="1 1"
          justifyContent="center"
          minHeight={0}
          paddingLeft={2}
          paddingRight={2}
          width="100%"
        >
          <Paper
            elevation={24}
            sx={{
              height: "100%",
              maxWidth: 1000,
              padding: 2,
              width: "100%",
            }}
          >
            <Box height="100%" overflow="auto" width="100%">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  artistName={artistById[event.artistId].name}
                  city={cityById[event.venue.cityId]}
                  event={event}
                  isLastCard={index === filteredEvents.length - 1}
                  onSelectEvent={() => setSelectedEvent(event)}
                />
              ))}
            </Box>
          </Paper>
        </Box>
      )}
      {selectedEvent && (
        <CheckoutDrawer
          artist={artistById[selectedEvent.artistId]}
          event={selectedEvent}
          onCancel={() => setSelectedEvent(undefined)}
          onSubmit={() => {
            setConfirmationDialogOpen(true);
            setSelectedEvent(undefined);
          }}
        />
      )}
      {isConfirmationDialogOpen && (
        <Dialog open fullWidth maxWidth="xs">
          <DialogTitle>Transaction Successful</DialogTitle>
          <DialogContent>
            <Typography>
              Your transaction is complete. Enjoy your concert!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => setConfirmationDialogOpen(false)}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}
