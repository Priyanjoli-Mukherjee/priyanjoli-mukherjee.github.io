import { DatePickerProps } from "@mui/x-date-pickers";

export interface Props extends Omit<DatePickerProps, "value" | "onChange"> {
  startOfDay: boolean;
  timeStamp: number;
  onChange: (timeStamp: number) => void;
}
