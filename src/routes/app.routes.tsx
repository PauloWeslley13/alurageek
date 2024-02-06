import { RouteObject } from 'react-router-dom'
import { CreateProduct, Home } from '@/pages'
import { App } from '../App'

export const AppRoutes: RouteObject = {
  path: '/',
  element: <App />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/create-product', element: <CreateProduct /> },
  ],
}
