import { Theme } from '@mui/material'
import { blueGrey, red } from '@mui/material/colors'
import { FONTS } from '@/presenter/styles'

export const InputLabel = (theme: Theme) => {
  const error = {
    '&.Mui-error': {
      color: red[600],
    },
  }

  const disabled = {
    '&.Mui-disabled': {
      color: blueGrey[400],
    },
  }

  const inputSmall = {
    '&.MuiInputLabel-sizeSmall': {
      ...error,
      ...disabled,
    },
  }

  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: FONTS.fontWeight.semibold,
        },
        filled: {
          ...theme.typography.h4,
          letterSpacing: FONTS.letterSpacings.widest,

          color:
            theme.palette.mode === 'light'
              ? theme.palette.primary[500]
              : theme.palette.secondary[500],

          ...inputSmall,
        },
        outlined: {
          color:
            theme.palette.mode === 'light'
              ? theme.palette.primary[900]
              : theme.palette.secondary[100],

          ...inputSmall,
        },
      },
    },
  }
}
