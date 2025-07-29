import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const QuickSearchContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 30%)",
  justifyContent: "center",
  width: "100%",
  "@media (max-width: 1000px)": {
    gridTemplateColumns: "repeat(2, 45%)",
  },
});
