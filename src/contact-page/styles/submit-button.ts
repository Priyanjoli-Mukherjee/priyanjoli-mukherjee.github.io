import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const SubmitButton = styled(Button)({
  backgroundColor: "#003399",
  display: "flex",
  flexDirection: "column",
  paddingLeft: 4,
  paddingRight: 4,
  marginTop: 2,
  "&[disabled]": {
    backgroundColor: "#007bff",
    color: "white",
    opacity: 0.5,
  },
});
