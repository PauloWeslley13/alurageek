import { ComponentProps } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { SVGLogoIcon } from '@/components/icons'
import { Button, Input, MenuTheme } from '@/components/ui'

import * as S from './navbar-styles'

type NavBarProps = ComponentProps<typeof S.NavBarWrap>

export const NavBar = ({ ...rest }: NavBarProps) => {
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <S.NavBarWrap {...rest}>
      <div>
        <div>
          <SVGLogoIcon onClick={() => navigate('/')} />

          <Input placeholder="¿Qué deseas buscar?" />
        </div>

        <div>
          <Button
            label="Login"
            sx={{
              height: theme.spacing(9),
              width: theme.spacing(20),
              textTransform: 'uppercase',
            }}
          />
          <Button
            label="Productos"
            onClick={() => navigate('/create-product')}
            sx={{
              height: theme.spacing(9),
              width: theme.spacing(28),
              textTransform: 'uppercase',
            }}
          />

          <MenuTheme />
        </div>
      </div>
    </S.NavBarWrap>
  )
}
