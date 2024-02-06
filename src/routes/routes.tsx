import { useRoutes } from 'react-router-dom'
import { AppRoutes } from './app.routes'

export const Routes = () => {
  const route = useRoutes([AppRoutes])

  return route
}
