import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContactField = styled(TextField)({
  backgroundColor: "#dadde0",
  borderRadius: 5,
  width: "75%",
  margin: 5,
  "& textarea": {
    resize: "both",
  },
});
