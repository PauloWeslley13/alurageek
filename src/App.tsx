import { ToastContainer } from 'react-toastify'
import { Routes } from './routes/routes'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Routes />
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
