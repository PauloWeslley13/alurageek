import { useRoutes } from 'react-router-dom'
import { appRoutes } from './app.routes'

export function RootRoutes() {
  return useRoutes([appRoutes()])
}
