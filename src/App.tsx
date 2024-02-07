import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Routes } from './routes/routes'
import { ScrollTop } from './components/scroll-top'
import { useAppDispatch, useAppSelector } from './store/hook/useRedux'
import { fetchUser } from './store/reducers/user'
import { setTheme } from './store/reducers/themes'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const theme = useAppSelector((state) => state.theme)
  const userLogged = localStorage.getItem('@userData')
  const getThemeLocalStorage = localStorage.getItem('@appTheme')

  console.log(user)
  console.log(theme)
  console.log(getThemeLocalStorage)

  useEffect(() => {
    if (userLogged && getThemeLocalStorage) {
      const userUid = JSON.parse(userLogged)
      const getTheme = JSON.parse(getThemeLocalStorage)
      const initialTheme = getTheme || 'light'

      console.log(initialTheme)
      console.log(userUid)

      dispatch(fetchUser(userUid))
      dispatch(setTheme(initialTheme))
    }
  }, [dispatch, userLogged, getThemeLocalStorage])

  return (
    <>
      <ScrollTop>
        <Routes />
      </ScrollTop>
      <ToastContainer
        position="top-center"
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

export default App
