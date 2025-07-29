import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import keyBy from "lodash/keyBy";
import { useMemo } from "react";

import { getCities } from "../../service/get-cities";
import { Props } from "./props";

export function CityAutocomplete({ cityId, onChange }: Props) {
  const cities = useMemo(() => getCities(), []);
  const cityById = useMemo(() => keyBy(cities, ({ id }) => id), [cities]);

  return (
    <Autocomplete
      getOptionLabel={({ name, state }) => `${name}, ${state}`}
      onChange={(_, val) => onChange(val?.id ?? "")}
      options={cities}
      size="small"
      value={cityById[cityId ?? ""]}
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
