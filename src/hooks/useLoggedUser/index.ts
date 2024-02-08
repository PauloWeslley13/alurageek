import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { fetchUser } from '@/store/reducers/user/user'

export const useLoggedUser = () => {
  const dispatch = useAppDispatch()
  const userLogged = localStorage.getItem('@userData')
  const user = useAppSelector((state) => state.user)

  console.log(user)

  useEffect(() => {
    if (userLogged) {
      dispatch(fetchUser(userLogged))
    }
  }, [dispatch, userLogged])
}
