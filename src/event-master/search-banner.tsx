import { Box, Button } from "@mui/material";
import { CityAutocomplete } from "./city-autocomplete";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ArtistAutocomplete } from "./artist-autocomplete";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

export function SearchBanner() {
  const [params] = useSearchParams();
  const [city, setCity] = useState(
    decodeURIComponent(params.get("city") ?? ""),
  );
  const [artistId, setArtistId] = useState(params.get("artistId") ?? "");
  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs(params.get("startDate") || undefined),
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    dayjs(params.get("endDate") || undefined),
  );

  return (
    <Box display="flex">
      <CityAutocomplete city={city} onChange={setCity} />
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={(newDate) => setStartDate(newDate)}
      />
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={(newDate) => setEndDate(newDate)}
      />
      <ArtistAutocomplete artistId={artistId} onChange={setArtistId} />
      <Link
        to={`/event-master/search?city=${encodeURIComponent(city)}&artistId=${artistId}&startDate=${startDate?.toISOString()}&endDate=${endDate?.toISOString()}`}
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
