import { useMemo } from "react";
import { getArtistData } from "../../service/get-artist-data";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import keyBy from "lodash/keyBy";
import { Props } from "./props";

export function ArtistAutocomplete({ artistId, onChange }: Props) {
  const artists = useMemo(() => getArtistData(), []);
  const artistById = keyBy(artists, (artist) => artist.id);

  return (
    <Autocomplete
      getOptionLabel={(art) => art.name}
      onChange={(_, val) => onChange(val?.id ?? "")}
      options={artists}
      size="small"
      value={artistById[artistId]}
      renderInput={(params) => (
        <TextField {...params} placeholder="Select Artist" />
      )}
      sx={{
        backgroundColor: "white",
        borderRadius: 1,
        flex: "1 1",
        height: "fit-content",
        marginLeft: 1,
        marginRight: 1,
      }}
    />
  );
}
