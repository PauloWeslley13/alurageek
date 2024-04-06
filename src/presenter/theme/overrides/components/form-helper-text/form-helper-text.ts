import { Theme } from '@mui/material'
import { red } from '@mui/material/colors'
import { FONTS } from '@/presenter/styles'

export const FormHelperText = (theme: Theme) => {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...theme.typography.h5,
          letterSpacing: FONTS.letterSpacings.widest,

          '&.MuiFormHelperText-sizeSmall': {
            color: red[600],
          },
        },
      },
    },
  }
}
