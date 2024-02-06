import { styled } from '@mui/system'
import { alpha } from '@mui/material'
import { Button as BaseButton, buttonClasses } from '@mui/base/Button'
import { STYLES } from '@/styles'

export const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: ${STYLES.FONTS.fontFamily.OPEN_SANS};
  font-weight: ${STYLES.FONTS.fontWeight.bold};
  font-size: ${STYLES.FONTS.fontSizes.md};
  color: ${theme.palette.primary.main};

  transition: all 150ms ease;
  border-radius: 5px;
  border: 1px solid ${theme.palette.primary.main};

  &:hover {
    background-color: ${alpha(theme.palette.primary.contrastText, 0.2)};
    border-color: ${theme.palette.primary.contrastText};
    color: ${theme.palette.primary.contrastText};
  }

  &.${buttonClasses.active} {
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5), inset 0 1.5px 1px ${alpha(theme.palette.primary.contrastText, 0.2)}, inset 0 -2px 1px ${alpha(theme.palette.primary.contrastText, 0.2)};
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.primary.light};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${STYLES.COLORS.bunker[200]};
    color: ${STYLES.COLORS.bunker[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
)
