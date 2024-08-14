import { ComponentProps, forwardRef } from "react";
import TextField from "@mui/material/TextField";

type InputFieldProps = ComponentProps<"input"> &
  ComponentProps<typeof TextField>;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ ...rest }, ref) => (
    <TextField {...rest} ref={ref} variant="filled" size="small" />
  ),
);

InputField.displayName = "InputField";
