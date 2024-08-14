import { ReactNode } from "react";
import { alpha, css, darken, lighten, styled } from "@mui/material/styles";
import { Menu, MenuProps } from "@mui/base/Menu";

const DropdownList = styled("ul")(
  ({ theme }) => css`
    font-family: ${theme.typography.font.OPEN_SANS};
    font-weight: ${theme.typography.font.bold};
    font-size: ${theme.typography.font.sm};
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === "dark"
      ? darken(theme.palette.primary.main, 0.1)
      : lighten(theme.palette.primary.contrastText, 0.5)};
    color: ${theme.palette.mode === "dark"
      ? lighten(theme.palette.primary.dark, 0.8)
      : alpha(theme.palette.primary.dark, 0.9)};
    border: 1px solid ${lighten(theme.palette.primary.dark, 0.8)};
    box-shadow: 0px 4px 30px ${lighten(theme.palette.primary.dark, 0.2)};
    z-index: 3;
  `,
);

type DropdownContentProps = MenuProps & {
  children: ReactNode;
};

const DropdownContent = ({ ...rest }: DropdownContentProps) => {
  return <Menu slots={{ listbox: DropdownList }} {...rest} />;
};

export default DropdownContent;
