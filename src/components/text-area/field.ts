import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const Field = styled(TextField)({
  "& textarea": {
    resize: "both",
  },
});
