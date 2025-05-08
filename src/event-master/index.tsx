import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { getArtistData } from "./get-artist-data";
import { ArtistCard } from "./artist-card";

export function EventMaster() {
  const artists = useMemo(() => getArtistData(), []);

  return (
    <Box
      padding={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      width="100%"
      overflow="auto"
      sx={{ backgroundColor: "white" }}
    >
      <Typography color="black" variant="h3">
        Welcome to Concerto!
      </Typography>
      <Typography color="black" variant="h4">
        Please select an event below to purchase tickets.
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 30%)"
        justifyContent="center"
        width="100%"
      >
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </Box>
    </Box>
  );
}
