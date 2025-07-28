import { useMemo } from "react";
import { getArtistData } from "../service/get-artist-data";
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
