import { Theme } from "@mui/material";
import { cyan, indigo } from "@mui/material/colors";

const useDefault = (theme: Theme) => {
  const defaultStyles = {
    "&.MuiButton-default": {
      fontFamily: theme.typography.font.RALEWAY,
      fontWeight: theme.typography.font.bold,
      fontSize: theme.typography.font.sm,
      textTransform: "uppercase",
      padding: "6px 12px",
      borderRadius: theme.spacing(2),
      transition: "all 150ms ease",
      cursor: "pointer",
      background: theme.palette.mode === "dark" ? indigo[500] : cyan[50],
      border: `1px solid ${theme.palette.mode === "dark" ? indigo[200] : cyan[300]}`,
      color: theme.palette.mode === "dark" ? indigo[50] : cyan[700],
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
  };

  const hoverDefaultStyles = {
    "&:hover": {
      background: theme.palette.mode === "dark" ? indigo[700] : cyan[200],
      borderColor: theme.palette.mode === "dark" ? indigo[100] : cyan[500],
    },
  };

  const activeDefaultStyles = {
    "&:active": {
      background: theme.palette.mode === "dark" ? indigo[100] : cyan[500],
      borderColor: theme.palette.mode === "dark" ? indigo[500] : cyan[100],
      color: theme.palette.mode === "dark" ? indigo[900] : cyan[900],
    },
  };

  const focusVisibleDefaultStyles = {
    "&:focus-visible": {
      boxShadow: `0 0 0 4px ${theme.palette.mode === "dark" ? indigo[200] : cyan[300]}`,
      outline: "none",
    },
  };

  return {
    defaultStyles,
    hoverDefaultStyles,
    activeDefaultStyles,
    focusVisibleDefaultStyles,
  };
};

export { useDefault };
