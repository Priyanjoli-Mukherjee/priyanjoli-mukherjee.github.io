import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useFeatureFlag } from "./hooks/use-feature-flag";
import { FeatureFlag } from "./types/feature-flag";

export function HomeButton() {
  const isMultiPageEnabled = useFeatureFlag(FeatureFlag.MULTI_PAGE_ENABLED);

  return (
    <Box position="fixed" top={16} right={16}>
      <Link to={`${isMultiPageEnabled ? "scrollr" : ""}/`}>
        <IconButton sx={{ color: "rgb(179, 224, 255)" }}>
          <HomeIcon fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
}
