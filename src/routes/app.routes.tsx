import { RouteObject } from 'react-router-dom'
import { CreateProduct, Home, Authentication } from '@/pages'
import { Main } from '@/templates/Main'

export const AppRoutes: RouteObject = {
  path: '/',
  element: <Main />,
  children: [
    { path: 'home', element: <Home /> },
    { path: 'auth', element: <Authentication /> },
    { path: 'create-product', element: <CreateProduct /> },
  ],
}
