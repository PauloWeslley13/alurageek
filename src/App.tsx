import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Routes } from './routes/routes'
import { ScrollTop } from './components/scroll-top'
import { useAppDispatch } from './store/hook/useRedux'
import { setTheme } from './store/reducers'
import { loadCart, loadUser } from './store/actions/actions'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const dispatch = useAppDispatch()
  const getThemeLocalStorage = localStorage.getItem('@appTheme')

  useEffect(() => {
    if (getThemeLocalStorage) {
      const getTheme: string = JSON.parse(getThemeLocalStorage)
      const initialTheme = getTheme || 'light'

      dispatch(setTheme(initialTheme))
    }

    dispatch(loadCart())
    dispatch(loadUser())
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

export default App
