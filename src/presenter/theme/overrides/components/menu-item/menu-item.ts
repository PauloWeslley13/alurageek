import { ComponentsOverrides, lighten, Theme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const MuiMenuItem = (theme: Theme) => ({
  MuiMenuItem: {
    styleOverrides: {
      root: {
        ...theme.typography.h5,
        letterSpacing: theme.typography.letterSpacing.widest,
        color:
          theme.palette.mode === "dark"
            ? lighten(theme.palette.primary.dark, 0.7)
            : theme.palette.primary.main,
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.font.medium,

        "& em": {
          color:
            theme.palette.mode === "dark"
              ? theme.palette.secondary.contrastText
              : theme.palette.secondary.main,
        },

        "&.Mui-disabled": {
          color: blueGrey[400],
        },
      },
    } satisfies ComponentsOverrides<Theme>["MuiMenuItem"],
  },
});
