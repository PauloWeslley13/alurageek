import { Theme, alpha } from '@mui/material'
import { blueGrey, grey, red } from '@mui/material/colors'
import { COLORS, FONTS } from '@/presenter/styles'

export const FilledInput = (theme: Theme) => ({
  MuiFilledInput: {
    styleOverrides: {
      root: {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.primary[300]
            : theme.palette.secondary[200],

        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

        '&:hover': {
          background: alpha(grey[400], 0.1),
        },

        '&.MuiFilledInput-inputSizeSmall': {
          fontSize: FONTS.fontSizes['2xl'],
        },

        '& > svg': {
          color:
            theme.palette.mode === 'light'
              ? theme.palette.primary[600]
              : theme.palette.secondary[400],
        },

        '& input': {
          fontSize: FONTS.fontSizes.lg,
          fontWeight: theme.typography.fontWeightMedium,
          letterSpacing: FONTS.letterSpacings.wider,

          '&::placeholder': {
            ...theme.typography.h4,

            color: theme.palette.mode === 'light' ? COLORS.zinc : blueGrey[50],

            fontWeight:
              theme.palette.mode === 'light'
                ? FONTS.fontWeight.bold
                : FONTS.fontWeight.regular,
          },
        },

        '.MuiFilledInput-input:focus': {
          backgroundColor: 'transparent',
        },

        '.MuiFilledInput-input.MuiSelect-select': {
          height: theme.spacing(6),
        },

        '&::before': {
          borderColor:
            theme.palette.mode === 'light'
              ? theme.palette.primary[600]
              : theme.palette.secondary[400],
        },

        '&:hover:not(.Mui-disabled, .Mui-error):before': {
          borderColor:
            theme.palette.mode === 'light'
              ? theme.palette.primary[400]
              : theme.palette.secondary[600],
        },

        '&.Mui-error': {
          color: red[600],
        },

        '&.Mui-disabled': {
          background: alpha(theme.palette.grey[700], 0.1),

          '&:before': {
            borderBottom: `1px solid ${theme.palette.grey[700]}`,
          },
        },
      },
    },
  },
})
