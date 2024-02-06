import { ComponentProps } from 'react'
import { SVGLogoIcon } from '@/components/icons'
import { Button, Input } from '@/components/ui'

import * as S from './navbar-styles'

type NavBarProps = ComponentProps<typeof S.NavBarWrap>

export const NavBar = ({ ...rest }: NavBarProps) => {
  return (
    <S.NavBarWrap {...rest}>
      <div>
        <div>
          <SVGLogoIcon />

          <Input placeholder="¿Qué deseas buscar?" />
        </div>

        <Button
          label="Login"
          sx={{ height: '3rem', width: '9rem', textTransform: 'uppercase' }}
        />
      </div>
    </S.NavBarWrap>
  )
}
