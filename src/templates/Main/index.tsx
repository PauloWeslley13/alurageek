import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Footer, NavBar } from '@/components/layout'

export const Main = () => {
  const { pathname } = useLocation()

  if (pathname === '/') return <Navigate to="/home" />

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
