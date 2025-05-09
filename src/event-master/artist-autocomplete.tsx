import { useMemo } from "react";
import { getArtistData } from "./service/get-artist-data";
import { Autocomplete, TextField } from "@mui/material";
import keyBy from "lodash/keyBy";

type Props = {
  artistId: string;
  onChange: (artistId: string) => void;
};

export function ArtistAutocomplete({ artistId, onChange }: Props) {
  const artists = useMemo(() => getArtistData(), []);
  const artistById = keyBy(artists, (artist) => artist.id);

  return (
    <Autocomplete
      options={artists}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Select Artist" />
      )}
      value={artistById[artistId]}
      onChange={(_, val) => onChange(val?.id ?? "")}
      getOptionLabel={(art) => art.name}
    />
  );
}
