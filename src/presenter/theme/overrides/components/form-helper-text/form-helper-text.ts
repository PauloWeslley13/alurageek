import { ComponentsOverrides, Theme } from "@mui/material";
import { blueGrey, red } from "@mui/material/colors";

export const MuiFormHelperText = (theme: Theme) => {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...theme.typography.h5,
          letterSpacing: theme.typography.letterSpacing.widest,

          "&.Mui-error": {
            color: theme.palette.mode === "dark" ? red.A200 : red[500],
          },
          "&.Mui-disabled": {
            color: blueGrey[400],
          },
        },
      } satisfies ComponentsOverrides<Theme>["MuiFormHelperText"],
    },
  };
};
