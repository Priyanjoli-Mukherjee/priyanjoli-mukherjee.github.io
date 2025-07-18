import { TextFieldProps } from "@mui/material";

export interface Props
  extends Omit<TextFieldProps, "value" | "onChange" | "slotProps"> {
  max?: number;
  min?: number;
  value?: number;
  onChange: (value?: number) => void;
}
