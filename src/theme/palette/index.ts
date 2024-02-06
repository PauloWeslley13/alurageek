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
    default:
      theme === 'light' ? STYLES.COLORS.bunker[100] : STYLES.COLORS.zinc[100],
  },
})
