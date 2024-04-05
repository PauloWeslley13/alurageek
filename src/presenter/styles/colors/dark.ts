import { deepPurple, indigo } from '@mui/material/colors'
import { COLORS } from '../index'

export const DARK = {
  primary: {
    main: indigo[500],
    light: indigo[300],
    dark: indigo[800],
    contrastText: indigo.A100,
  },
  secondary: {
    main: deepPurple[500],
    light: deepPurple[300],
    dark: deepPurple[800],
    contrastText: deepPurple.A100,
  },
  background: {
    paper: COLORS.bunker[300],
    default: indigo[50],
  },
}
