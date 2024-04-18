import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export function HomeButton() {
  return (
    <Box position="fixed" top={16} right={16}>
      <Link to="/">
        <IconButton sx={{ color: "#1565c0" }}>
          <HomeIcon fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
}
