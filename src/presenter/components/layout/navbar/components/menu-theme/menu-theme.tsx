import { Dropdown } from '@mui/base/Dropdown'
import { Menu } from '@mui/base/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useMenuTheme } from './hook/useMenuTheme'
import * as S from './menu-theme-styled'

export function MenuTheme() {
  const { handleThemeChange, themes } = useMenuTheme()

  return (
    <Dropdown>
      <S.MenuButton>
        {themes === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
      </S.MenuButton>
      <Menu slots={{ listbox: S.MenuList }}>
        <S.MenuItem onClick={() => handleThemeChange('light')}>
          <LightModeIcon /> Light
        </S.MenuItem>
        <S.MenuItem onClick={() => handleThemeChange('dark')}>
          <DarkModeIcon />
          Dark
        </S.MenuItem>
      </Menu>
    </Dropdown>
  )
}
