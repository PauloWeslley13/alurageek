import { COLORS, FONTS } from '@/presenter/styles'
import { Theme } from '@mui/material'
import { grey, indigo } from '@mui/material/colors'

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
      color: theme.palette.mode === 'dark' ? indigo[50] : COLORS.violet[500],
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    },
  }

  const hoverSecondaryStyles = {
    '&:hover': {
      background:
        theme.palette.mode === 'dark' ? indigo[700] : COLORS.violet[50],
      borderColor: theme.palette.mode === 'dark' ? grey[600] : grey[300],
    },
  }

  const activeSecondaryStyles = {
    '&:active': {
      background:
        theme.palette.mode === 'dark' ? indigo[700] : COLORS.violet[100],
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
