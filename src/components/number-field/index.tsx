import { Box, InputAdornment, TextField } from "@mui/material";
import { Props } from "./props";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

export function NumberField({ max, min, value, onChange, ...props }: Props) {
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
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box display="flex" flexDirection="column">
              <Box
                height={24}
                marginBottom={-0.75}
                onClick={() => handleChange((value ?? 0) + 1)}
                sx={{ cursor: "pointer" }}
              >
                <ArrowDropUp />
              </Box>
              <Box
                height={24}
                marginTop={-0.75}
                onClick={() => handleChange((value ?? 0) - 1)}
                sx={{ cursor: "pointer" }}
              >
                <ArrowDropDown />
              </Box>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
}
