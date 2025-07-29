import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function BackButton() {
  return (
    <Box position="fixed" top={16} left={16}>
      <Link to="/scrollr">
        <Button variant="text" sx={{ color: "rgb(179, 224, 255)" }}>
          <ArrowBackIcon />
          Back to Scrollr
        </Button>
      </Link>
    </Box>
  );
}
