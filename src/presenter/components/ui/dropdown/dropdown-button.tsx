/* eslint-disable prettier/prettier */
import { alpha, css, darken, lighten, styled } from "@mui/material";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";

const DropdownButton = styled(BaseMenuButton)(
  ({ theme }) => css`
    font-family: ${theme.typography.font.RALEWAY};
    font-weight: ${theme.typography.font.bold};
    font-size: ${theme.typography.font.sm};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: ${theme.spacing(2)};
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark"
      ? darken(theme.palette.primary.main, 0.1)
      : lighten(theme.palette.primary.contrastText, 0.5)};
    border: 1px solid ${theme.palette.primary.light};
    color: ${theme.palette.mode === "dark"
      ? lighten(theme.palette.primary.dark, 0.8)
      : alpha(theme.palette.primary.dark, 0.9)};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      border-color: ${theme.palette.mode === "dark"
        ? lighten(theme.palette.primary.dark, 0.5)
        : alpha(theme.palette.primary.dark, 0.7)};
      background: ${theme.palette.mode === "dark"
        ? alpha(theme.palette.primary.dark, 0.5)
        : alpha(theme.palette.primary.light, 0.5)};
    }

    &:active {
      background: ${darken(theme.palette.primary.main, 0.3)};
      border-color: ${lighten(theme.palette.primary.main, 0.1)};
      color: ${lighten(theme.palette.primary.main, 0.1)};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${alpha(theme.palette.primary.main, 0.3)};
      outline: none;
    }
  `,
);

export default DropdownButton;
