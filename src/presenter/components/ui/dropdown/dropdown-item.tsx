import { css, styled } from "@mui/material/styles";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { indigo } from "@mui/material/colors";

const DropdownItem = styled(BaseMenuItem)(
  ({ theme }) => css`
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)};

    &:last-of-type {
      border-bottom: none;
    }

    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? indigo[400] : indigo[700]};
    }
  `,
);

export default DropdownItem;
