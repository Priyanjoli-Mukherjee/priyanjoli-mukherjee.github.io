import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export function HomeButton() {
  return (
    <Box position="fixed" top={16} right={16}>
      <Link to="/">
        <IconButton sx={{ color: "rgb(179, 224, 255)" }}>
          <HomeIcon fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
}
