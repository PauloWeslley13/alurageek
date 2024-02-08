import { ComponentProps } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { useAppSelector } from '@/store/hook/useRedux'
import { SVGLogoIcon } from '@/components/icons'
import { Avatar, Button, Input, MenuTheme } from '@/components/ui'

import * as S from './navbar-styles'
import { useSideBar } from '@/components/ui/sidebar/useSideBar'

type NavBarProps = ComponentProps<typeof S.NavBarWrap>

export const NavBar = ({ ...rest }: NavBarProps) => {
  const { user, isLogged } = useAppSelector((state) => state.user)
  const { pathname } = useLocation()
  const { handleDrawerOpen } = useSideBar()
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <S.NavBarWrap {...rest}>
      <div>
        <div>
          <SVGLogoIcon
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />

          <Input placeholder="¿Qué deseas buscar?" />
        </div>

        <div>
          {pathname === '/auth' ? null : (
            <Button
              label="Login"
              onClick={() => navigate('/auth')}
              sx={{
                height: theme.spacing(9),
                width: theme.spacing(20),
              }}
            />
          )}

          <MenuTheme />

          {isLogged && (
            <Avatar
              aria-label="open drawer"
              user={user.username}
              sx={{ cursor: 'pointer' }}
              onClick={handleDrawerOpen}
            />
          )}
        </div>
      </div>
    </S.NavBarWrap>
  )
}
