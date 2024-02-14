import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { NavBar, Footer } from '@/components/layout'
import { footerList } from '@/constants'

export const RootLayout = () => {
  const { pathname } = useLocation()

  if (pathname === '/') return <Navigate to="/home" />

  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer.Root>
        <Footer.Content footerList={footerList} />
        <Footer.Bar />
      </Footer.Root>
    </>
  )
}
