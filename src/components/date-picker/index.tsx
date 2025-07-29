import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { Props } from "./props";

export function DatePicker({
  startOfDay,
  timeStamp,
  onChange,
  ...props
}: Props) {
  const date = isNaN(timeStamp) ? null : dayjs(timeStamp);

  return (
    <MUIDatePicker
      {...props}
      value={date}
      onChange={(newDate) => {
        let transformedDate;
        if (startOfDay) {
          transformedDate = newDate?.startOf("day").valueOf();
        } else {
          transformedDate = newDate
            ?.set("hour", 23)
            .set("minute", 59)
            .set("second", 59)
            .valueOf();
        }
        onChange(transformedDate ?? NaN);
      }}
    />
  );
}
