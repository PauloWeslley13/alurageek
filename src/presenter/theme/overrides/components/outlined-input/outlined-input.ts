import { Theme, alpha } from '@mui/material'
import { COLORS, FONTS } from '@/presenter/styles'
import { red } from '@mui/material/colors'
import { Input } from './types'

export const OutlinedInput = (theme: Theme) => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        boxShadow: `0px 2px 2px ${COLORS.bunker[200]}`,
        background: COLORS.bunker[50],
        borderRadius: '1.2rem',

        '& fieldset': {
          borderColor: COLORS.bunker[300],

          borderWidth: '1px',
          borderRadius: '1.2rem',
          transition: 'all .2s ease-in-out',
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.light,
        },

        '& input': {
          ...theme.typography.h4,
          fontSize: FONTS.fontSizes.md,
          fontWeight: FONTS.fontWeight.semibold,
          letterSpacing: FONTS.letterSpacings.widest,
          width: 320,
          fontFamily: FONTS.fontFamily.OPEN_SANS,
          color: theme.palette.primary.main,

          transition: 'all .3s ease-in-out',

          '&::placeholder': {
            ...theme.typography.h4,
            color: theme.palette.primary[700],
            fontWeight: FONTS.fontWeight.bold,
          },

          '&:focus-visible': {
            outline: 0,
            width: 450,
          },
        },

        '&.Mui-focused': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${theme.palette.primary[500]}`,
            boxShadow: `0 0 0 1px ${theme.palette.secondary.A200}`,
          },
        },

        '&.Mui-error': {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: red[800],
          },

          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: red[500],
            },
          },
        },

        '&.Mui-disabled': {
          color: alpha(theme.palette.grey[200], 0.3),
        },
      },
    } satisfies Input.StyleOverridesProps,
  },
})
