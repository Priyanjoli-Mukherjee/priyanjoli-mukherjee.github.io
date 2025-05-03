import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const Field = styled(TextField)({
  "& textarea": {
    resize: "both",
  },
});

export function TextArea({
  InputLabelProps,
  InputProps,
  ...props
}: TextFieldProps) {
  return (
    <Field
      {...props}
      multiline
      minRows={3}
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
      InputProps={{ ...InputProps, notched: true }}
    />
  );
}
