import { purple } from '@mui/material/colors'
import { COLORS } from '../index'

export const LIGHT = {
  primary: {
    main: COLORS.violet[500],
    light: COLORS.violet[300],
    dark: COLORS.violet[800],
    contrastText: COLORS.violet[100],
  },
  secondary: {
    main: purple[500],
    light: purple[300],
    dark: purple[800],
    contrastText: purple.A100,
  },
  background: {
    paper: COLORS.zinc[300],
    default: COLORS.zinc[200],
  },
}
