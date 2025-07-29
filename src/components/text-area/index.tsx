import { TextFieldProps } from "@mui/material/TextField";

import { Field } from "./field";

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
