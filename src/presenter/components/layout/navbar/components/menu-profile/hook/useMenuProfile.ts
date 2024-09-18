import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/main/store/hook/useRedux'
import { logOut } from '@/main/store/ducks/auth'

export function useMenuProfile() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handlerNavPainel() {
    navigate('/panel-adm')
  }

  function handlerLogout() {
    dispatch(logOut())
  }

  return { handlerNavPainel, handlerLogout }
}
