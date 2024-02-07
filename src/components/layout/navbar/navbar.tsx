import { ComponentProps } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { SVGLogoIcon } from '@/components/icons'
import { Avatar, Button, Input, MenuTheme } from '@/components/ui'

import * as S from './navbar-styles'
import { useAppSelector } from '@/store/hook/useRedux'

type NavBarProps = ComponentProps<typeof S.NavBarWrap>

export const NavBar = ({ ...rest }: NavBarProps) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const user = useAppSelector((state) => state.user)

  console.log(user)

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
          <Button
            label="Login"
            onClick={() => navigate('/auth')}
            sx={{
              height: theme.spacing(9),
              width: theme.spacing(20),
              textTransform: 'uppercase',
            }}
          />

          <MenuTheme />

          {user && <Avatar user={user.username} />}
        </div>
      </div>
    </S.NavBarWrap>
  )
}
