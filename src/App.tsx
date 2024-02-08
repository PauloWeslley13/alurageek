import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Routes } from './routes/routes'
import { ScrollTop } from './components/scroll-top'
import { useAppDispatch } from './store/hook/useRedux'
import { setTheme } from './store/reducers'
import { loadUser } from './store/actions'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const dispatch = useAppDispatch()
  const getThemeLocalStorage = localStorage.getItem('@appTheme')

  useEffect(() => {
    if (getThemeLocalStorage) {
      const getTheme = JSON.parse(getThemeLocalStorage)
      const initialTheme = getTheme || 'light'

      dispatch(loadUser())
      dispatch(setTheme(initialTheme))
    }
  }, [dispatch, getThemeLocalStorage])

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
