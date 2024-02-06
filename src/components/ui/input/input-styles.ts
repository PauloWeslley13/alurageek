import { styled } from '@mui/system'
import { STYLES } from '@/styles'

export const InputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-family: ${STYLES.FONTS.fontFamily.OPEN_SANS};
  font-size: ${STYLES.FONTS.fontSizes.md};
  font-weight: ${STYLES.FONTS.fontWeight.semibold};
  padding: 8px 12px;
  border-radius: 1.2rem;
  color: ${theme.palette.primary.main};
  background: ${STYLES.COLORS.bunker[50]};
  border: 1px solid ${STYLES.COLORS.bunker[300]};
  box-shadow: 0px 2px 2px ${STYLES.COLORS.bunker[200]};

  transition: all .3s ease-in-out;

  &:hover {
    border-color: ${theme.palette.primary.light};
  }

  &:focus {
    border-color: ${theme.palette.primary.dark};
    box-shadow: 0 0 0 2px ${theme.palette.primary.contrastText};
  }

  &::placeholder {
    font-weight: ${STYLES.FONTS.fontWeight.semibold};
    color: ${theme.palette.primary.contrastText};
  }

  // firefox
  &:focus-visible {
    outline: 0;
    width: 450px;
  }
`,
)
