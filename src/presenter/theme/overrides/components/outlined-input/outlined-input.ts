import { alpha, ComponentsOverrides, darken, Theme } from "@mui/material";
import { blueGrey, grey, red } from "@mui/material/colors";

export const MuiOutlinedInput = (theme: Theme) => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        background:
          theme.palette.mode === "light"
            ? grey[100]
            : darken(blueGrey[900], 0.1),
        borderRadius: theme.spacing(2),

        "& fieldset": {
          borderColor:
            theme.palette.mode === "light" ? grey[100] : blueGrey[900],
          borderWidth: "1px",
          borderRadius: theme.spacing(2),
          transition: "all .2s ease-in-out",
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },

        "& input": {
          ...theme.typography.h4,
          fontWeight: theme.typography.font.semibold,
          letterSpacing: theme.typography.letterSpacing.widest,
          fontFamily: theme.typography.font.OPEN_SANS,
          color: theme.palette.primary.light,

          "&::placeholder": {
            ...theme.typography.h5,
            color: theme.palette.mode === "light" ? grey[700] : blueGrey[200],
            fontWeight: theme.typography.font.bold,
          },

          "&:focus-visible": {
            outline: 0,
          },

          [theme.breakpoints.down("md")]: {
            width: "100%",

            "&:focus-visible": {
              width: "inherit",
            },
          },
        },

        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            border: `2px solid ${theme.palette.primary.main}`,
          },
        },

        "&.Mui-error": {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: red[800],
          },

          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: red[500],
            },
          },
        },

        "&.Mui-disabled": {
          color: alpha(theme.palette.grey[200], 0.3),
        },
      },
    } satisfies ComponentsOverrides<Theme>["MuiOutlinedInput"],
  },
});
