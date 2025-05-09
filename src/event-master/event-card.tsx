import { Box, Button, Paper, Typography } from "@mui/material";
import { Event } from "./types/event";
import { Link } from "react-router-dom";
import { Venue } from "./types/venue";

type Props = {
  event: Event;
  venue: Venue;
  artistName: string;
  onSelectEvent: (evt: Event) => void;
};

export function EventCard({ event, venue, artistName, onSelectEvent }: Props) {
  const { id, title } = event;
  const { city, location, timestamp } = venue;

  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = date.getDay();
  const hour = date.getHours();

  return (
    <Link to={`/event-master/search?eventId=${id}`}>
      <Paper
        elevation={24}
        style={{ margin: 10, padding: 10, cursor: "pointer" }}
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{month}</Typography>
          <Typography variant="h6">{day}</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box display="flex">
            <Typography variant="h6">{weekday}</Typography>
            <Typography variant="h6">{hour}</Typography>
          </Box>
          <Box display="flex">
            <Typography variant="h6">{city}</Typography>
            <Typography variant="h6">{location}</Typography>
          </Box>
          <Box display="flex">
            <Typography variant="h6">{artistName}</Typography>
            <Typography variant="h6">{title}</Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#003399",
            display: "flex",
            flexDirection: "column",
            paddingLeft: 4,
            paddingRight: 4,
          }}
          onClick={() => onSelectEvent(event)}
        >
          Find Tickets
        </Button>
      </Paper>
    </Link>
  );
}
