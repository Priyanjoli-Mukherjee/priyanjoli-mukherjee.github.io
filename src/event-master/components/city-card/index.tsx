import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Props } from "./props";

export function CityCard({ city }: Props) {
  const { id, name, image } = city;

  return (
    <Link to={`/event-master/search?cityId=${id}`}>
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
          <img src={image} height={300} />
        </Box>
        <Box>
          <Typography variant="h6">{name}</Typography>
        </Box>
      </Paper>
    </Link>
  );
}
