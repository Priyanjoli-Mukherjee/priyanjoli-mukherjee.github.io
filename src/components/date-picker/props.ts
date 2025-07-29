import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";

export interface Props extends Omit<DatePickerProps, "value" | "onChange"> {
  startOfDay: boolean;
  timeStamp: number;
  onChange: (timeStamp: number) => void;
}
