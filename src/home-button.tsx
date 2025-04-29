import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useFeatureFlag } from "./hooks/use-feature-flag";
import { FeatureFlag } from "./types/feature-flag";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function HomeButton() {
  const isMultiPageEnabled = useFeatureFlag(FeatureFlag.MULTI_PAGE_ENABLED);

  return (
    <Box position="fixed" top={16} left={16}>
      <Link to={`${isMultiPageEnabled ? "scrollr" : ""}/`}>
        <Button variant="text" sx={{ color: "rgb(179, 224, 255)" }}>
          <ArrowBackIcon />
          Back to Scrollr
        </Button>
      </Link>
    </Box>
  );
}
