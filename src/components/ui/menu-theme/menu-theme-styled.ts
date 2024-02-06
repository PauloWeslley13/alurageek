import { styled } from '@mui/system'
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton'
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem'
import { deepPurple, indigo } from '@mui/material/colors'
import { STYLES } from '@/styles'

export const MenuList = styled('ul')(
  ({ theme }) => `
  font-family: ${STYLES.FONTS.fontFamily.OPEN_SANS};
  font-weight: ${STYLES.FONTS.fontWeight.semibold};
  font-size: ${STYLES.FONTS.fontSizes.sm};
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? indigo[100] : indigo[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? indigo[400] : indigo[200]};
  color: ${theme.palette.mode === 'dark' ? indigo[700] : indigo[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? indigo[400] : indigo[200]};
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
    color: ${theme.palette.mode === 'dark' ? indigo[700] : indigo[400]};
  }
  `,
)

export const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: ${STYLES.FONTS.fontFamily.RALEWAY};
  font-weight: ${STYLES.FONTS.fontWeight.bold};
  font-size: ${STYLES.FONTS.fontSizes.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? indigo[700] : indigo[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? indigo.A200 : indigo[200]};
  color: ${theme.palette.mode === 'dark' ? indigo[50] : indigo[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? indigo[800] : indigo[50]};
    border-color: ${theme.palette.mode === 'dark' ? indigo[600] : indigo[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? indigo[700] : indigo[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? deepPurple[300] : deepPurple[200]};
    outline: none;
  }
  `,
)
