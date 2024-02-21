import { ComponentProps } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useAppSelector } from '@/store/hook/useRedux'
import { Button, SVGLogoIcon, ShoppingBadge } from '@/components/ui'
import { MenuProfile, MenuTheme, SearchField } from './modules'
import * as S from './navbar-styles'

type NavBarProps = ComponentProps<typeof S.NavBarWrap>

export const NavBar = ({ ...rest }: NavBarProps) => {
  const cart = useAppSelector((state) => state.cart)
  const { isLogged } = useAppSelector((state) => state.user)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()
  const allProduct = cart.data.length

  return (
    <S.NavBarWrap {...rest}>
      <div>
        <div>
          <SVGLogoIcon
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />

          <SearchField />
        </div>

        <div>
          {pathname === '/auth' || isLogged ? null : (
            <Button
              label="Login"
              onClick={() => navigate('/auth')}
              sx={{
                height: theme.spacing(9),
                width: theme.spacing(20),
              }}
            />
          )}

          {isLogged && (
            <ShoppingBadge
              aria-label="cart"
              badgeContent={allProduct}
              onClick={() => navigate('/cart')}
            >
              <ShoppingCartIcon />
            </ShoppingBadge>
          )}

          <MenuTheme />

          {isLogged && <MenuProfile />}
        </div>
      </div>
    </S.NavBarWrap>
  )
}
