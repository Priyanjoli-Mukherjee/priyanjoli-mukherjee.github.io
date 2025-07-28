import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { getArtistData } from "./service/get-artist-data";
import { ArtistCard } from "./components/artist-card";
import { SearchBanner } from "./components/search-banner";
import { QuickSearchContainer } from "./styles/quick-search-container";
import { getCities } from "./service/get-cities";
import { CityCard } from "./components/city-card";

export function EventMaster() {
  const artists = useMemo(() => getArtistData(), []);
  const cities = useMemo(() => getCities(), []);

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
        <Typography color="black" variant="h5" sx={{ marginTop: 2 }}>
          <em>Trending Artists</em>
        </Typography>
        <QuickSearchContainer>
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </QuickSearchContainer>
        <Typography color="black" variant="h5" sx={{ marginTop: 2 }}>
          <em>Top Cities</em>
        </Typography>
        <QuickSearchContainer>
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </QuickSearchContainer>
      </Box>
    </Box>
  );
}
