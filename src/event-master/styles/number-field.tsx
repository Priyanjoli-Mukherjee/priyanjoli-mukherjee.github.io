import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const NumberField = styled(TextField)({
  "& fieldset": {
    border: "unset",
  },
  "& input": {
    padding: 0,
    width: 45,
  },
});
