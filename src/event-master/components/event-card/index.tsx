import { Box, Button, Typography } from "@mui/material";
import { getDisplayTime } from "../../utils/get-display-time";
import { Props } from "./props";

export function EventCard({
  artistName,
  city,
  event,
  isLastCard,
  onSelectEvent,
}: Props) {
  const { title, venue } = event;
  const { location, timestamp } = venue;
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
    <Box
      alignItems="center"
      borderBottom={isLastCard ? "unset" : "1px solid lightgrey"}
      display="flex"
      justifyContent="space-between"
      margin={2.5}
      padding={2.5}
    >
      <Box display="flex">
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h6">{month}</Typography>
          <Typography variant="h6">{day}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft={4}>
          <Box color="grey" display="flex">
            <Typography variant="body1">{weekday}</Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: 0.5, marginRight: 0.5 }}
            >
              &bull;
            </Typography>
            <Typography variant="body1">{time}</Typography>
          </Box>
          <Box display="flex">
            <Typography variant="h6">{`${city.name}, ${city.state}`}</Typography>
            <Typography variant="h6" sx={{ marginLeft: 1, marginRight: 1 }}>
              &bull;
            </Typography>
            <Typography variant="h6">{location}</Typography>
          </Box>
          <Box color="grey" display="flex">
            <Typography
              variant="body1"
              sx={{ marginRight: 1 }}
            >{`${artistName}: ${title.toUpperCase()}`}</Typography>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#003399",
          display: "flex",
          flexDirection: "column",
          height: "fit-content",
          paddingLeft: 4,
          paddingRight: 4,
        }}
        onClick={() => onSelectEvent(event)}
      >
        Find Tickets
      </Button>
    </Box>
  );
}
