import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { Box, Button, TextField } from "@mui/material";
import { CityAutocomplete } from "./city-autocomplete";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ArtistAutocomplete } from "./artist-autocomplete";
import { DatePicker } from "../components/date-picker";
import Concerto from "../images/event-master/Concerto.png";

export function SearchBanner() {
  const [params] = useSearchParams();
  const [cityId, setCityId] = useState(params.get("cityId") ?? "");
  const [artistId, setArtistId] = useState(params.get("artistId") ?? "");
  const [startDate, setStartDate] = useState(
    parseInt(params.get("startDate") ?? ""),
  );
  const [endDate, setEndDate] = useState(parseInt(params.get("endDate") ?? ""));

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      sx={{ backgroundColor: "black" }}
    >
      <Box alignItems="center" display="flex" marginLeft={1} marginTop={1}>
        <TheaterComedyIcon sx={{ marginRight: 1 }} />
        <img src={Concerto} height={20} />
      </Box>
      <Box alignItems="center" display="flex" padding={2} width="100%">
        <Box display="flex" flexGrow={1} minWidth={0}>
          <CityAutocomplete cityId={cityId} onChange={setCityId} />
          <DatePicker
            enableAccessibleFieldDOMStructure={false}
            onChange={(newDate) => setStartDate(newDate)}
            startOfDay={true}
            timeStamp={startDate}
            slots={{
              textField: (params) => (
                <TextField {...params} placeholder="Start Date" size="small" />
              ),
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              flex: "1 1",
              marginLeft: 1,
            }}
          />
          <DatePicker
            enableAccessibleFieldDOMStructure={false}
            onChange={(newDate) => setEndDate(newDate)}
            startOfDay={false}
            timeStamp={endDate}
            slots={{
              textField: (params) => (
                <TextField {...params} placeholder="End Date" size="small" />
              ),
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              flex: "1 1",
              marginLeft: 1,
            }}
          />
          <ArtistAutocomplete artistId={artistId} onChange={setArtistId} />
        </Box>
        <Link
          to={`/event-master/search?cityId=${cityId}&artistId=${artistId}&startDate=${startDate}&endDate=${endDate}`}
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
            Find Concerts
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
