import { useRoutes } from 'react-router-dom'
import { useAppRoutes } from './app.routes'

export const Routes = () => {
  const appRoutes = useAppRoutes()

  return useRoutes([appRoutes])
}
