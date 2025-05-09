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
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Select City" />
      )}
      value={city}
      onChange={(_, val) => onChange(val ?? "")}
    />
  );
}
