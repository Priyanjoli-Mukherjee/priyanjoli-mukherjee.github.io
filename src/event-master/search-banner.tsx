import { Box, Button } from "@mui/material";
import { CityAutocomplete } from "./city-autocomplete";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ArtistAutocomplete } from "./artist-autocomplete";

export function SearchBanner() {
  const [params] = useSearchParams();
  const [city, setCity] = useState(
    decodeURIComponent(params.get("city") ?? ""),
  );
  const [artistId, setArtistId] = useState(params.get("artistId") ?? "");

  return (
    <Box display="flex">
      <CityAutocomplete city={city} onChange={setCity} />
      <ArtistAutocomplete artistId={artistId} onChange={setArtistId} />
      <Link
        to={`/event-master/search?city=${encodeURIComponent(city)}&artistId=${artistId}`}
      >
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
        >
          Search
        </Button>
      </Link>
    </Box>
  );
}
