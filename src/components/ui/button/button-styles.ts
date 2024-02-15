import { styled } from '@mui/system'
import { alpha } from '@mui/material'
import { blue, grey, indigo } from '@mui/material/colors'
import { Button as BaseButton, buttonClasses } from '@mui/base/Button'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { COLORS, FONTS } from '@/styles'

export const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: ${FONTS.fontFamily.RALEWAY};
  font-weight: ${FONTS.fontWeight.bold};
  font-size: ${FONTS.fontSizes.sm};
  color: ${theme.palette.primary.main};
  padding: 6px 12px;

  transition: all 150ms ease-in-out;
  border-radius: 5px;
  border: 1px solid ${theme.palette.primary.light};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  text-transform: uppercase;
  letter-spacing: ${FONTS.letterSpacings.widest};

  &:hover {
    background-color: ${alpha(theme.palette.primary.main, 0.1)};
    border-color: ${theme.palette.primary.light};
    color: ${theme.palette.primary.main};
  }

  &.${buttonClasses.active} {
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5), inset 0 1.5px 1px ${alpha(theme.palette.primary.main, 0.2)}, inset 0 -2px 1px ${alpha(theme.palette.primary.light, 0.2)};
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.primary.light};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${COLORS.bunker[200]};
    color: ${COLORS.bunker[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
)

export const BtnStyled = styled(MuiButton)<MuiButtonProps>(
  ({ theme }) => `
  font-family: ${FONTS.fontFamily.OPEN_SANS};
  font-weight: ${FONTS.fontWeight.bold};
  font-size: ${FONTS.fontSizes.md};
  color: ${theme.palette.primary.main};
  text-transform: uppercase;

  transition: all 150ms ease;
  border-radius: 5px;
  border: 1px solid ${theme.palette.primary.main};

  &:hover {
    background-color: ${alpha(theme.palette.primary.contrastText, 0.2)};
    border-color: ${theme.palette.primary.dark};
    color: ${theme.palette.primary.main};
  }

  &:active {
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5), inset 0 1.5px 1px ${alpha(theme.palette.primary.contrastText, 0.2)}, inset 0 -2px 1px ${alpha(theme.palette.primary.contrastText, 0.2)};
    transform: scale(0.99);
  }

  &:focusVisible {
    box-shadow: 0 0 0 4px ${theme.palette.primary.light};
    outline: none;
  }

  &:disabled {
    background-color: ${COLORS.bunker[200]};
    color: ${COLORS.bunker[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
`,
)

export const ButtonIcon = styled('button')(
  ({ theme }) => `
  font-family: ${FONTS.fontFamily.OPEN_SANS};
  font-weight: ${FONTS.fontWeight.bold};
  font-size: ${FONTS.fontSizes.lg};
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 150ms ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  background: ${theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[100]};
  border: 1px solid ${theme.palette.mode === 'dark' ? indigo[400] : COLORS.violet[200]};
  color: ${theme.palette.mode === 'dark' ? indigo[50] : COLORS.violet[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? indigo[700] : COLORS.violet[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? indigo[700] : COLORS.violet[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `,
)
