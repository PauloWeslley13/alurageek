import { styled } from '@mui/system'
import { alpha } from '@mui/material'
import { Button as BaseButton, buttonClasses } from '@mui/base/Button'
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
