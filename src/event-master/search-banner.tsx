import { Box, Button } from "@mui/material";
import { CityAutocomplete } from "./city-autocomplete";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ArtistAutocomplete } from "./artist-autocomplete";
import { DatePicker } from "../components/date-picker";

export function SearchBanner() {
  const [params] = useSearchParams();
  const [city, setCity] = useState(
    decodeURIComponent(params.get("city") ?? ""),
  );
  const [artistId, setArtistId] = useState(params.get("artistId") ?? "");
  const [startDate, setStartDate] = useState(
    parseInt(params.get("startDate") ?? ""),
  );
  const [endDate, setEndDate] = useState(parseInt(params.get("endDate") ?? ""));

  return (
    <Box display="flex">
      <CityAutocomplete city={city} onChange={setCity} />
      <DatePicker
        label="Start Date"
        onChange={(newDate) => setStartDate(newDate)}
        startOfDay={true}
        timeStamp={startDate}
      />
      <DatePicker
        label="End Date"
        onChange={(newDate) => setEndDate(newDate)}
        startOfDay={false}
        timeStamp={endDate}
      />
      <ArtistAutocomplete artistId={artistId} onChange={setArtistId} />
      <Link
        to={`/event-master/search?city=${encodeURIComponent(city)}&artistId=${artistId}&startDate=${startDate}&endDate=${endDate}`}
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
