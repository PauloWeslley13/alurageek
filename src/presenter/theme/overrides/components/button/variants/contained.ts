import { Theme } from '@mui/material'
import { deepPurple, indigo } from '@mui/material/colors'
import { COLORS, FONTS } from '@/presenter/styles'

const useContained = (theme: Theme) => {
  const containedStyles = {
    '&.MuiButton-contained': {
      fontFamily: FONTS.fontFamily.RALEWAY,
      fontWeight: FONTS.fontWeight.bold,
      fontSize: FONTS.fontSizes.md,
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6px 12px',
      borderRadius: '8px',
      transition: 'all 150ms ease',
      cursor: 'pointer',
      background:
        theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[50],
      border: ` 1px solid ${theme.palette.mode === 'dark' ? indigo[200] : COLORS.violet[300]}`,
      color: theme.palette.mode === 'dark' ? indigo[50] : COLORS.violet[600],
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    },
  }

  const hoverContainedStyles = {
    '&:hover': {
      background:
        theme.palette.mode === 'dark' ? indigo[700] : COLORS.violet[400],
      borderColor:
        theme.palette.mode === 'dark' ? indigo[100] : COLORS.violet[500],
    },
  }

  const activeContainedStyles = {
    '&:active': {
      background:
        theme.palette.mode === 'dark' ? indigo[100] : COLORS.violet[500],
      borderColor:
        theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[100],
      color: theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[100],
    },
  }

  const focusVisibleContainedStyles = {
    '&:focus-visible': {
      boxShadow: `0 0 0 4px ${theme.palette.mode === 'dark' ? deepPurple[200] : deepPurple[300]}`,
      outline: 'none',
    },
  }

  return {
    containedStyles,
    hoverContainedStyles,
    activeContainedStyles,
    focusVisibleContainedStyles,
  }
}

export { useContained }
