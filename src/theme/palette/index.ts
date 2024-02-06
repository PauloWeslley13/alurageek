import { PaletteOptions } from '@mui/material'
import { blue, deepPurple, indigo, purple } from '@mui/material/colors'
import { STYLES } from '@/styles'

type PaletteProps = { theme: 'light' | 'dark' }

export const Palette = ({ theme }: PaletteProps): PaletteOptions => ({
  mode: theme,
  common: {
    black: STYLES.COLORS.black,
    white: STYLES.COLORS.white,
  },
  primary: {
    main: theme === 'light' ? indigo[500] : STYLES.COLORS.blue[500],
    light: theme === 'light' ? indigo[300] : STYLES.COLORS.blue[300],
    dark: theme === 'light' ? indigo[800] : STYLES.COLORS.blue[800],
    contrastText: theme === 'light' ? indigo.A100 : blue.A100,
  },
  secondary: {
    main: theme === 'light' ? deepPurple[500] : purple[500],
    light: theme === 'light' ? deepPurple[300] : purple[300],
    dark: theme === 'light' ? deepPurple[800] : purple[800],
    contrastText: theme === 'light' ? deepPurple.A100 : purple.A100,
  },
  background: {
    paper:
      theme === 'light' ? STYLES.COLORS.bunker[300] : STYLES.COLORS.zinc[300],
    default: theme === 'light' ? deepPurple[50] : purple[50],
  },
  grey: {
    50: STYLES.COLORS.zinc[50],
    100: STYLES.COLORS.zinc[100],
    200: STYLES.COLORS.zinc[200],
    300: STYLES.COLORS.zinc[300],
    400: STYLES.COLORS.zinc[400],
    500: STYLES.COLORS.zinc[500],
    600: STYLES.COLORS.zinc[600],
    700: STYLES.COLORS.zinc[700],
    800: STYLES.COLORS.zinc[800],
    900: STYLES.COLORS.zinc[900],
    A100: STYLES.COLORS.woodsmoke[100],
    A200: STYLES.COLORS.woodsmoke[200],
    A400: STYLES.COLORS.woodsmoke[400],
    A700: STYLES.COLORS.zinc[950],
  },
})
