import { Components, Theme } from '@mui/material'
import {
  FilledInput,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  useButton,
} from './components'

export const ComponentOverrides = (theme: Theme): Components => {
  const { MuiButton } = useButton(theme)
  const { MuiFilledInput } = FilledInput(theme)
  const { MuiOutlinedInput } = OutlinedInput(theme)
  const { MuiInputLabel } = InputLabel(theme)
  const { MuiFormHelperText } = FormHelperText(theme)

  return {
    MuiButton,
    MuiInputLabel,
    MuiFilledInput,
    MuiOutlinedInput,
    MuiFormHelperText,
  }
}
