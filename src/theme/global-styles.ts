import { STYLES } from '../styles/index'

export const GlobalStyle = {
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,

    fontFamily: STYLES.FONTS.fontFamily.OPEN_SANS,

    '::-webkit-scrollbar': {
      width: '0.65rem',
    },
    '::-webkit-scrollbar-track': {
      background: STYLES.COLORS.bunker[100],
    },
    '::-webkit-scrollbar-thumb': {
      background: STYLES.COLORS.bunker[300],
      borderRadius: '2.2rem',
    },
  },

  button: {
    cursor: 'pointer',
  },
}
