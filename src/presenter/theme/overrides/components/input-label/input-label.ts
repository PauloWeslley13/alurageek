import { ComponentsOverrides, darken, lighten, Theme } from "@mui/material";
import { blueGrey, red } from "@mui/material/colors";

export const MuiInputLabel = (theme: Theme) => {
  const inputSmall = {
    "&.Mui-error": {
      color: theme.palette.mode === "dark" ? red.A200 : red[500],
    },
    "&.Mui-disabled": {
      color: blueGrey[400],
    },
  };

  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: theme.typography.font.semibold,
        },
        filled: {
          ...theme.typography.h5,
          fontWeight: theme.typography.font.bold,
          letterSpacing: theme.typography.letterSpacing.widest,
          color:
            theme.palette.mode === "dark"
              ? lighten(theme.palette.primary.main, 0.4)
              : darken(theme.palette.primary.main, 0.5),
          ...inputSmall,
        },
        outlined: {
          color: theme.palette.primary.main,
          ...inputSmall,
        },
      } satisfies ComponentsOverrides<Theme>["MuiInputLabel"],
    },
  };
};
