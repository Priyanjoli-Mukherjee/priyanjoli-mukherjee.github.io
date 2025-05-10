import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { getArtistData } from "./service/get-artist-data";
import { ArtistCard } from "./artist-card";
import { SearchBanner } from "./search-banner";
import { ArtistsContainer } from "./artists-container";

export function EventMaster() {
  const artists = useMemo(() => getArtistData(), []);

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
      sx={{ backgroundColor: "white" }}
    >
      <SearchBanner />
      <Box
        alignItems="center"
        display="flex"
        flex="1 1"
        flexDirection="column"
        overflow="auto"
        width="100%"
      >
        <Typography color="black" variant="h3">
          Welcome to Concerto!
        </Typography>
        <Typography color="black" variant="h4">
          Please select an event below to purchase tickets.
        </Typography>
        <ArtistsContainer>
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </ArtistsContainer>
      </Box>
    </Box>
  );
}
