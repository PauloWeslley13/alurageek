import { alpha, styled } from '@mui/material'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'

export const TextField = styled(MuiTextField)<MuiTextFieldProps>(
  ({ theme }) => ({
    width: '100%',

    '& .MuiInputLabel-root': {
      color: theme.palette.primary.dark,
      ...theme.typography.h4,
    },

    '& .MuiFormHelperText-root': {
      ...theme.typography.h5,
    },

    '& .MuiInputBase-root': {
      background: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,

      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,

      '& input': {
        ...theme.typography.h5,

        '&::placeholder': {
          color: theme.palette.grey[700],
          ...theme.typography.h5,
        },
      },
    },

    '& .MuiFilledInput-root::before': {
      borderColor: alpha(theme.palette.primary.main, 0.5),
    },

    '& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
      borderColor: theme.palette.primary.main,
    },
  }),
)
