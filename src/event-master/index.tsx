import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ArtistCard } from "./components/artist-card";
import { CityCard } from "./components/city-card";
import { SearchBanner } from "./components/search-banner";
import { useArtists } from "./hooks/use-artists";
import { useCities } from "./hooks/use-cities";
import { QuickSearchContainer } from "./styles/quick-search-container";

export function EventMaster() {
  const artists = useArtists();
  const cities = useCities();

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
