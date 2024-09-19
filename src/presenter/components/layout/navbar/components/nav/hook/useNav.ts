import { useLocation, useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import { useAppSelector } from '@/main/store/hook/useRedux'

export function useNav() {
  const { user } = useAppSelector((state) => state.authentication)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const hasMaxScreen = useMediaQuery('(max-width:899px)')
  const hasUserAuthentication = !!user?.accessToken
  const hasPathOrLogged = pathname === '/auth' || hasUserAuthentication

  function handlerNavAuth() {
    navigate('/auth')
  }

  function handlerNavCart() {
    navigate('/cart')
  }

  return {
    hasUserAuthentication,
    hasPathOrLogged,
    hasMaxScreen,
    handlerNavAuth,
    handlerNavCart,
  }
}
