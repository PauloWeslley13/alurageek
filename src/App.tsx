import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from './components/layout'

export const App = () => {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
