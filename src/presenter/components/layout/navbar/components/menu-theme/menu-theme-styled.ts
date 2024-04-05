import { styled } from '@mui/system'
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton'
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem'
import { deepPurple, indigo } from '@mui/material/colors'
import { COLORS, FONTS } from '@/presenter/styles'

export const MenuList = styled('ul')(
  ({ theme }) => `
  font-family: ${FONTS.fontFamily.OPEN_SANS};
  font-weight: ${FONTS.fontWeight.semibold};
  font-size: ${FONTS.fontSizes.sm};
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? indigo[200] : COLORS.violet[200]};
  color: ${theme.palette.mode === 'dark' ? indigo[50] : COLORS.violet[500]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? indigo[200] : COLORS.violet[100]};
  z-index: 1;
  `,
)

export const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
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
    color: ${theme.palette.mode === 'dark' ? indigo[400] : indigo[700]};
  }
  `,
)

export const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: ${FONTS.fontFamily.RALEWAY};
  font-weight: ${FONTS.fontWeight.bold};
  font-size: ${FONTS.fontSizes.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 8px;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? indigo[200] : COLORS.violet[300]};
  color: ${theme.palette.mode === 'dark' ? indigo[50] : COLORS.violet[600]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? indigo[700] : COLORS.violet[400]};
    border-color: ${theme.palette.mode === 'dark' ? indigo[100] : COLORS.violet[500]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? indigo[100] : COLORS.violet[500]};
    border-color: ${theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[100]};
    color: ${theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? deepPurple[200] : deepPurple[300]};
    outline: none;
  }
  `,
)
