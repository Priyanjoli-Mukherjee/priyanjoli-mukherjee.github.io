import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Props } from "./props";

export function ArtistCard({ artist }: Props) {
  const { id, name, genre, image } = artist;

  return (
    <Link to={`/event-master/search?artistId=${id}`}>
      <Paper
        elevation={24}
        style={{ margin: 15, padding: 10, cursor: "pointer" }}
      >
        <Box
          alignItems="center"
          display="flex"
          height={200}
          justifyContent="center"
          width="100%"
          overflow="hidden"
        >
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
