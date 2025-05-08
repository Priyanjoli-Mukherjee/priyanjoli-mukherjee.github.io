import { Box, Paper, Typography } from "@mui/material";
import { Artist } from "./types/artist";
import { Link } from "react-router-dom";

type Props = {
  artist: Artist;
};

export function ArtistCard({ artist }: Props) {
  const { id, name, genre, image } = artist;

  return (
    <Link to={`/event-master/search?artistId=${id}`}>
      <Paper
        elevation={24}
        style={{ margin: 15, padding: 10, cursor: "pointer" }}
      >
        <Box height={200} width="100%" overflow="hidden">
          <img src={image} height={250} />
        </Box>
        <Box>
          <Typography variant="body2">{genre}</Typography>
          <Typography variant="h6">{name}</Typography>
        </Box>
      </Paper>
    </Link>
  );
}
