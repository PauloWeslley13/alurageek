/* eslint-disable prettier/prettier */
import { alpha, css, darken, lighten, styled } from "@mui/material";
import { badgeClasses, Badge as BaseBadge } from "@mui/base/Badge";
import { grey, teal } from "@mui/material/colors";

export const ButtonBadge = styled("button")(
  ({ theme }) => css`
    font-family: ${theme.typography.font.RALEWAY};
    font-weight: ${theme.typography.font.bold};
    font-size: ${theme.typography.font.sm};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(1.2)};
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

export const Badge = styled(BaseBadge)(
  ({ theme }) => css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: ${theme.typography.font.sm};
    font-family: ${theme.typography.font.RALEWAY};
    list-style: none;
    position: relative;
    display: inline-block;
    line-height: 1;

    & .${badgeClasses.badge} {
      z-index: auto;
      position: absolute;
      top: 0;
      right: 0;
      min-width: 22px;
      height: 22px;
      padding: 0 6px;
      color: #fff;
      font-weight: 600;
      font-size: 12px;
      line-height: 22px;
      white-space: nowrap;
      text-align: center;
      border-radius: 12px;
      background: ${teal.A700};
      box-shadow: 0px 4px 8px ${grey[500]};
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
    }
  `,
);
