import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";
import { useDefault, usePrimary, useSecondary } from "./variants";

export const MuiButton = (theme: Theme) => {
  const { primaryStyles, hoverPrimaryStyles, activePrimaryStyles } =
    usePrimary(theme);

  const {
    activeSecondaryStyles,
    focusVisibleStyles,
    hoverSecondaryStyles,
    secondaryStyles,
  } = useSecondary(theme);

  const {
    activeDefaultStyles,
    focusVisibleDefaultStyles,
    hoverDefaultStyles,
    defaultStyles,
  } = useDefault(theme);

  const rootStyleButton = {
    "&.MuiButtonBase-root": {
      fontFamily: theme.typography.font.RALEWAY,
      fontWeight: theme.typography.font.bold,
      fontSize: theme.typography.font.sm,
      letterSpacing: theme.typography.letterSpacing.widest,
      textTransform: "uppercase",
      padding: "7px 12px",
      borderRadius: theme.spacing(2),
      transition: "all 150ms ease",
      cursor: "pointer",
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: false,
        disableFocusRipple: false,
        disableRipple: false,
      } satisfies ComponentsProps["MuiButton"],
      styleOverrides: {
        root: {
          textTransform: "uppercase",
        },
        contained: {
          ...rootStyleButton,
        },
        outlined: {
          ...rootStyleButton,
        },
      } satisfies ComponentsOverrides<Theme>["MuiButton"],
      variants: [
        {
          props: { variant: "default", disableElevation: false },
          style: {
            ...defaultStyles,
            ...activeDefaultStyles,
            ...focusVisibleDefaultStyles,
            ...hoverDefaultStyles,
          },
        },
        {
          props: { variant: "primary", disableElevation: false },
          style: {
            ...primaryStyles,
            ...activePrimaryStyles,
            ...hoverPrimaryStyles,
          },
        },
        {
          props: { variant: "secondary", disableElevation: false },
          style: {
            ...secondaryStyles,
            ...activeSecondaryStyles,
            ...hoverSecondaryStyles,
            ...focusVisibleStyles,
          },
        },
      ] satisfies ComponentsVariants<Theme>["MuiButton"],
    },
  };
};
