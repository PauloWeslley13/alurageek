import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { NavBar, Footer } from '@/components/layout'

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
        <Footer.Content
          footerList={[
            'Quem somos',
            'Política de privacidade',
            'Programa de lealdade',
            'Nossas lojas',
            'Quero ser um franqueado',
            'Anuncie aqui',
          ]}
        />
        <Footer.Bar />
      </Footer.Root>
    </>
  )
}
