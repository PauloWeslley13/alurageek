import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { setTheme } from '@/main/store/reducers'

const useMenuTheme = () => {
  const dispatch = useAppDispatch()
  const themes = useAppSelector((state) => state.theme.theme)

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    dispatch(setTheme(newTheme))
  }

  return { handleThemeChange, themes }
}

export { useMenuTheme }
