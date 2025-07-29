import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import { Props } from "./props";

export function NumberField({
  InputLabelProps,
  InputProps,
  max,
  min,
  value,
  onChange,
  ...props
}: Props) {
  const lowerBound = min ?? -Infinity;
  const upperBound = max ?? Infinity;

  function handleChange(num: number) {
    if (num >= lowerBound && num <= upperBound) {
      onChange(num);
    }
  }

  return (
    <TextField
      {...props}
      value={value?.toString()}
      onChange={(evt) => {
        const parsed = parseFloat(evt.target.value);
        if (isNaN(parsed)) {
          onChange(undefined);
        } else {
          handleChange(parsed);
        }
      }}
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <Box display="flex" flexDirection="column">
              <Box
                borderRadius={6}
                height={12}
                onClick={() => handleChange((value ?? 0) + 1)}
                sx={{
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "rgb(225, 225, 225)" },
                }}
              >
                <ArrowDropUp sx={{ position: "relative", bottom: 6 }} />
              </Box>
              <Box
                borderRadius={6}
                height={12}
                onClick={() => handleChange((value ?? 0) - 1)}
                sx={{
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "rgb(225, 225, 225)" },
                }}
              >
                <ArrowDropDown sx={{ position: "relative", bottom: 6 }} />
              </Box>
            </Box>
          </InputAdornment>
        ),
        notched: true,
      }}
    />
  );
}
