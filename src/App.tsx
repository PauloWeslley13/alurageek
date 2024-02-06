import { Outlet } from 'react-router-dom'
import { Header, NavBar } from './components/layout'

export const App = () => {
  return (
    <div>
      <NavBar />
      <Header />

      <Outlet />
    </div>
  )
}
