/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Routes } from './routes'
import { ScrollTop } from './components/scroll-top'
import { useAppDispatch } from './store/hook/useRedux'
import { setTheme } from './store/reducers'
import { loadCart, loadUser } from './store/actions/actions'
import 'react-toastify/dist/ReactToastify.css'
import { auth } from './config/firebase'

export const App = () => {
  const dispatch = useAppDispatch()
  const getThemeLocalStorage = localStorage.getItem('@appTheme')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid
        dispatch(loadCart())
        dispatch(loadUser(userId as any))

        return { userId }
      }
    })

    if (getThemeLocalStorage) {
      const getTheme: string = JSON.parse(getThemeLocalStorage)
      const initialTheme = getTheme || 'light'

      dispatch(setTheme(initialTheme))
    }
  }, [dispatch, getThemeLocalStorage])

  return (
    <>
      <ScrollTop>
        <Routes />
      </ScrollTop>
      <ToastContainer
        position="top-right"
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
