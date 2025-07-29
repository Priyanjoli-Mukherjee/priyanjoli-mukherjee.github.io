import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const NumberField = styled(TextField)({
  "& fieldset": {
    border: "unset",
  },
  "& input": {
    padding: 0,
    width: 45,
  },
});
