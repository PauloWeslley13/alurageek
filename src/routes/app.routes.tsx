import { RouteObject } from 'react-router-dom'
import { App } from '../App'
import { Home } from '@/pages/home'

export const AppRoutes: RouteObject = {
  path: '/',
  element: <App />,
  children: [{ path: '/', element: <Home /> }],
}
