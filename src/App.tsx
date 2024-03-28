/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Routes } from './routes'
import { ScrollTop } from './components/scroll-top'
import { useAppDispatch } from './store/hook/useRedux'
import { setTheme } from './store/reducers'
import {
  loadCart,
  loadCategories,
  loadProduct,
  loadUser,
} from './store/actions/actions'
import { auth } from '../database/firebase'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  const dispatch = useAppDispatch()
  const getThemeLocalStorage = localStorage.getItem('@appTheme')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid
        dispatch(loadCart(userId as any))
        dispatch(loadUser(userId as any))

        return { userId }
      }
    })

    if (getThemeLocalStorage) {
      const getTheme: string = JSON.parse(getThemeLocalStorage)
      const initialTheme = getTheme || 'light'

      dispatch(setTheme(initialTheme))
    }

    dispatch(loadProduct())
    dispatch(loadCategories())
  }, [dispatch, getThemeLocalStorage])

  return (
    <>
      <ScrollTop>
        <Routes />
      </ScrollTop>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}
