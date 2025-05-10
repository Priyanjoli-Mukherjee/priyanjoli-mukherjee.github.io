import {
  DatePickerProps,
  DatePicker as MUIDatePicker,
} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface Props extends Omit<DatePickerProps, "value" | "onChange"> {
  timeStamp: number;
  onChange: (timeStamp: number) => void;
}

export function DatePicker({ timeStamp, onChange, ...props }: Props) {
  const date = isNaN(timeStamp) ? null : dayjs(timeStamp);

  return (
    <MUIDatePicker
      {...props}
      value={date}
      onChange={(newDate) => onChange(newDate?.valueOf() ?? NaN)}
    />
  );
}
