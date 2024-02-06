import { Dropdown } from '@mui/base/Dropdown'
import { Menu } from '@mui/base/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { themeDark, themeLight } from '@/store/reducers/themes'
import * as S from './menu-theme-styled'

export function MenuTheme() {
  const dispatch = useAppDispatch()
  const themes = useAppSelector((state) => state.theme.theme)

  const setThemeDark = () => dispatch(themeDark())
  const setThemeLight = () => dispatch(themeLight())

  return (
    <Dropdown>
      <S.MenuButton>
        {themes === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
      </S.MenuButton>
      <Menu slots={{ listbox: S.MenuList }}>
        <S.MenuItem onClick={setThemeLight}>
          <LightModeIcon /> Light
        </S.MenuItem>
        <S.MenuItem onClick={setThemeDark}>
          <DarkModeIcon />
          Dark
        </S.MenuItem>
      </Menu>
    </Dropdown>
  )
}
