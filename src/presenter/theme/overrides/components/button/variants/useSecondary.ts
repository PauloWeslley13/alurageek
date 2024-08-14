import { Theme } from "@mui/material";
import { cyan, indigo } from "@mui/material/colors";

const useSecondary = (theme: Theme) => {
  const secondaryStyles = {
    "&.MuiButton-secondary": {
      fontFamily: theme.typography.font.OPEN_SANS,
      fontWeight: theme.typography.font.bold,
      fontSize: theme.typography.font.lg,
      lineHeight: 1.5,
      padding: "8px 16px",
      borderRadius: theme.spacing(2),
      transition: "all 150ms ease",
      cursor: "pointer",
      textTransform: "uppercase",
      border: "none",
      background: "transparent",
      color: theme.palette.mode === "dark" ? indigo[400] : cyan[500],
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
  };

  const hoverSecondaryStyles = {
    "&:hover": {
      background: theme.palette.mode === "dark" ? indigo[100] : cyan[50],
    },
  };

  const activeSecondaryStyles = {
    "&:active": {
      background: theme.palette.mode === "dark" ? indigo.A100 : cyan[100],
      color: theme.palette.mode === "dark" ? indigo.A700 : cyan[500],
    },
  };

  const focusVisibleStyles = {
    "&:focus-visible": {
      boxShadow: `0 0 0 4px ${theme.palette.mode === "dark" ? indigo[300] : indigo[200]}`,
      outline: "none",
    },
  };

  return {
    secondaryStyles,
    hoverSecondaryStyles,
    activeSecondaryStyles,
    focusVisibleStyles,
  };
};

export { useSecondary };
