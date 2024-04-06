import { COLORS, FONTS } from '@/presenter/styles'
import { Theme } from '@mui/material'
import { indigo } from '@mui/material/colors'

const useSecondary = (theme: Theme) => {
  const secondaryStyles = {
    '&.MuiButton-secondary': {
      fontFamily: FONTS.fontFamily.OPEN_SANS,
      fontWeight: FONTS.fontWeight.bold,
      fontSize: FONTS.fontSizes.lg,
      lineHeight: 1.5,
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'all 150ms ease',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      textTransform: 'uppercase',
      border: 'none',
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[500],
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    },
  }

  const hoverSecondaryStyles = {
    '&:hover': {
      background:
        theme.palette.mode === 'dark' ? indigo[100] : COLORS.violet[50],
    },
  }

  const activeSecondaryStyles = {
    '&:active': {
      background:
        theme.palette.mode === 'dark' ? indigo.A100 : COLORS.violet[100],
      color: theme.palette.mode === 'dark' ? indigo.A700 : COLORS.violet[500],
    },
  }

  const focusVisibleStyles = {
    '&:focus-visible': {
      boxShadow: `0 0 0 4px ${theme.palette.mode === 'dark' ? indigo[300] : indigo[200]}`,
      outline: 'none',
    },
  }

  return {
    secondaryStyles,
    hoverSecondaryStyles,
    activeSecondaryStyles,
    focusVisibleStyles,
  }
}

export { useSecondary }
