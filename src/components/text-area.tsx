import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const Field = styled(TextField)({
  "& textarea": {
    resize: "both",
    "&::placeholder": {
      color: "black",
      opacity: 0.6,
    },
  },
});

export function TextArea(props: TextFieldProps) {
  return <Field {...props} multiline minRows={3} />;
}
