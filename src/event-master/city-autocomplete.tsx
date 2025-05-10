import { Autocomplete, TextField } from "@mui/material";
import { useMemo } from "react";
import { getCities } from "./service/get-cities";

type Props = {
  city: string | null;
  onChange: (city: string) => void;
};

export function CityAutocomplete({ city, onChange }: Props) {
  const cities = useMemo(() => getCities(), []);

  return (
    <Autocomplete
      onChange={(_, val) => onChange(val ?? "")}
      options={cities}
      size="small"
      value={city}
      renderInput={(params) => (
        <TextField {...params} placeholder="Select City" />
      )}
      sx={{
        backgroundColor: "white",
        borderRadius: 1,
        flex: "1 1",
        height: "fit-content",
      }}
    />
  );
}
