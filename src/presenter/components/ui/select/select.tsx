import { forwardRef } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import MuiSelect from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { SelectType } from "./types/select-type";

export const Select = forwardRef<HTMLSelectElement, SelectType>(
  (
    { id, error, options, label, helperText, placeholder, disabled, ...props },
    ref,
  ) => (
    <FormControl
      variant="filled"
      error={error}
      disabled={disabled}
      size="small"
    >
      <InputLabel id={id} error={error} disabled={disabled}>
        {label}
      </InputLabel>
      <MuiSelect
        {...props}
        ref={ref}
        id={id}
        labelId={id}
        error={error}
        disabled={disabled}
        input={<FilledInput id={id} />}
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  ),
);

Select.displayName = "Select";
