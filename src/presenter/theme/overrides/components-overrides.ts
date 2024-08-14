import { Components, Theme } from "@mui/material";
import * as Component from "./components";

export const ComponentOverrides = (theme: Theme): Components => {
  const { MuiButton } = Component.MuiButton(theme);
  const { MuiFilledInput } = Component.MuiFilledInput(theme);
  const { MuiOutlinedInput } = Component.MuiOutlinedInput(theme);
  const { MuiInputLabel } = Component.MuiInputLabel(theme);
  const { MuiFormHelperText } = Component.MuiFormHelperText(theme);
  const { MuiMenuItem } = Component.MuiMenuItem(theme);

  return {
    MuiButton,
    MuiInputLabel,
    MuiFilledInput,
    MuiOutlinedInput,
    MuiFormHelperText,
    MuiMenuItem,
  };
};
