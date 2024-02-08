import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Footer, FooterBar, NavBar } from '@/components/layout'

export const Main = () => {
  const { pathname } = useLocation()

  if (pathname === '/') return <Navigate to="/home" />

  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <FooterBar />
      <Footer />
    </>
  )
}
