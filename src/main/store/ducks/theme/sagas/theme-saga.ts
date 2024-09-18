import { put, takeLatest } from 'redux-saga/effects'
import { PaletteMode } from '@mui/material'
import { getTheme, loadTheme } from '@/main/store/ducks/theme'
import { getCurrentThemeAdapter } from '@/main/adapters'

function* loadCurrencyThemeSaga() {
  if (getCurrentThemeAdapter()) {
    const initialTheme = getCurrentThemeAdapter().theme as PaletteMode
    yield put(getTheme(initialTheme))
  } else {
    yield put(getTheme('light'))
  }
}

export function* themeSaga() {
  yield takeLatest(loadTheme, loadCurrencyThemeSaga)
}
