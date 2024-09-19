import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded'
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded'
import { useMenuTheme } from './hook/useMenuTheme'
import { Dropdown } from '@/presenter/components/ui'
import { useAppSelector } from '@/main/store/hook/useRedux'

export function MenuTheme() {
  const { handleChangeTheme, menuTheme } = useMenuTheme()
  const { theme } = useAppSelector((state) => state.theme)

  return (
    <Dropdown.Root>
      <Dropdown.Button>
        {theme === 'light' ? (
          <Brightness7RoundedIcon />
        ) : (
          <Brightness4RoundedIcon />
        )}
      </Dropdown.Button>
      <Dropdown.List>
        {menuTheme.map(({ label, value, icon: Icon }) => (
          <Dropdown.Item key={value} onClick={() => handleChangeTheme(value)}>
            <Icon /> {label}
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown.Root>
  )
}
