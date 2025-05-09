import { Box, Button, Paper, Typography } from "@mui/material";
import { Event } from "./types/event";
import { getDisplayTime } from "./get-display-time";

type Props = {
  event: Event;
  artistName: string;
  onSelectEvent: (evt: Event) => void;
};

export function EventCard({ event, artistName, onSelectEvent }: Props) {
  const { title, venue } = event;
  const { city, location, timestamp } = venue;
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(timestamp);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];
  const hour = date.getHours();
  const time = getDisplayTime(hour);

  return (
    <Paper
      elevation={24}
      style={{ margin: 10, padding: 10, cursor: "pointer", display: "flex" }}
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="h6">{month}</Typography>
        <Typography variant="h6">{day}</Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box display="flex">
          <Typography variant="h6">{weekday}</Typography>
          <Typography variant="h6">{time}</Typography>
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
  );
}
