import { Components, Theme } from '@mui/material'
import { useButton } from './index'

export const ComponentOverrides = (theme: Theme): Components => {
  console.log(theme)
  const { MuiButton } = useButton(theme)
  // const { MuiCssBaseline } = CssBaseline()
  // const { MuiFilledInput } = FilledInput(theme)
  // const { MuiOutlinedInput } = OutlinedInput(theme)
  // const { MuiInputLabel } = InputLabel(theme)
  // const { MuiFormHelperText } = FormHelperText(theme)

  return {
    MuiButton,
    // MuiCssBaseline,
    // MuiInputLabel,
    // MuiFilledInput,
    // MuiOutlinedInput,
    // MuiFormHelperText,
  }
}
