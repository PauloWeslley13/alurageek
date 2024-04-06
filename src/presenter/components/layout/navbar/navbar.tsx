import { ComponentProps } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { SVGLogoIcon, ShoppingBadge } from '@/presenter/components/ui'
import { MenuProfile, MenuTheme, SearchField } from './components'
import * as S from './navbar-styles'

type NavBarProps = ComponentProps<typeof S.NavBarWrap>

export const NavBar = ({ ...rest }: NavBarProps) => {
  const { cart } = useAppSelector((state) => state.cart)
  const { isLogged } = useAppSelector((state) => state.user)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <S.NavBarWrap {...rest}>
      <div>
        <div>
          <SVGLogoIcon
            onClick={() => navigate('/home')}
            style={{ cursor: 'pointer' }}
          />

          <SearchField />
        </div>

        <div>
          {pathname === '/auth' || isLogged ? null : (
            <Button
              variant="secondary"
              onClick={() => navigate('/auth')}
              sx={{
                height: theme.spacing(9),
                width: theme.spacing(20),
              }}
            >
              Login
            </Button>
          )}

          {isLogged && (
            <>
              {cart.length >= 0 ? (
                <ShoppingBadge
                  aria-label="cart"
                  badgeContent={0}
                  onClick={() => navigate('/cart')}
                >
                  <ShoppingCartIcon />
                </ShoppingBadge>
              ) : (
                <ShoppingBadge
                  aria-label="cart"
                  badgeContent={0}
                  onClick={() => navigate('/cart')}
                >
                  <ShoppingCartIcon />
                </ShoppingBadge>
              )}
            </>
          )}

          <MenuTheme />

          {isLogged && <MenuProfile />}
        </div>
      </div>
    </S.NavBarWrap>
  )
}
