import { alpha, ComponentsOverrides, darken, Theme } from "@mui/material";
import { blueGrey, grey, red } from "@mui/material/colors";

export const MuiFilledInput = (theme: Theme) => ({
  MuiFilledInput: {
    styleOverrides: {
      root: {
        background:
          theme.palette.mode === "light"
            ? grey[100]
            : darken(blueGrey[900], 0.1),
        color: theme.palette.primary.light,
        borderTopLeftRadius: theme.spacing(2),
        borderTopRightRadius: theme.spacing(2),
        boxShadow: theme.shadows[1],
        fontSize: theme.typography.font.lg,
        fontWeight: theme.typography.fontWeightBold,
        letterSpacing: theme.typography.letterSpacing.wider,

        "&:hover": {
          background: alpha(blueGrey[400], 0.1),
        },

        "&.MuiFilledInput-inputSizeSmall": {
          fontSize: theme.typography.font["2xl"],
        },

        "& > svg": {
          color:
            theme.palette.mode === "dark"
              ? theme.palette.primary.contrastText
              : theme.palette.primary.main,
        },

        "& input": {
          fontSize: theme.typography.font.lg,
          fontWeight: theme.typography.fontWeightBold,
          letterSpacing: theme.typography.letterSpacing.wider,

          "&::placeholder": {
            ...theme.typography.h5,
            color: theme.palette.mode === "light" ? grey[700] : blueGrey[50],
            fontWeight: theme.typography.font.bold,
          },
        },

        ".MuiFilledInput-input:focus": {
          backgroundColor: "transparent",
        },

        ".MuiFilledInput-input.MuiSelect-select": {
          height: theme.spacing(6),
        },

        "&::before": {
          borderColor: theme.palette.primary.main,
        },

        "&:hover:not(.Mui-disabled, .Mui-error):before": {
          borderColor: theme.palette.primary.dark,
        },

        "&.Mui-error": {
          color: theme.palette.mode === "dark" ? red.A200 : red[500],
        },

        "&.Mui-disabled": {
          background: alpha(theme.palette.grey[700], 0.1),

          "&:before": {
            borderBottom: `1px solid ${theme.palette.grey[700]}`,
          },
        },
      },
    } satisfies ComponentsOverrides<Theme>["MuiFilledInput"],
  },
});
