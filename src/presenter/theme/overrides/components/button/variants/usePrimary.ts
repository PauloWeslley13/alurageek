import { alpha, lighten, Theme } from "@mui/material";

const usePrimary = (theme: Theme) => {
  const primaryStyles = {
    "&.MuiButton-primary": {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: theme.typography.font.sm,
      fontWeight: theme.typography.font.bold,
      letterSpacing: theme.typography.letterSpacing.widest,
      padding: "6px 12px",
      borderRadius: theme.spacing(2),
      border: `1px solid ${theme.palette.primary.light}`,
      transition: "all 150ms ease-in-out",
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
  };

  const hoverPrimaryStyles = {
    "&:hover": {
      background: alpha(theme.palette.primary.main, 0.1),
      borderColor: theme.palette.primary.light,
      color:
        theme.palette.mode === "light"
          ? theme.palette.primary.dark
          : lighten(theme.palette.primary.light, 0.5),
    },
  };

  const activePrimaryStyles = {
    "&:active": {
      boxShadow: `0 2px 1px rgba(0, 0, 0, 0.5), inset 0 1.5px 1px ${alpha(theme.palette.primary.main, 0.2)}, inset 0 -2px 1px ${alpha(theme.palette.primary.light, 0.2)}`,
      transform: "scale(0.99)",
    },
  };

  return { primaryStyles, hoverPrimaryStyles, activePrimaryStyles };
};

export { usePrimary };
