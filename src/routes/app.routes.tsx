import { RouteObject } from 'react-router-dom'
import {
  Home,
  Authentication,
  Products,
  ProductInfo,
  ProductListItems,
  ProductDetail,
} from '@/pages'
import { Main } from '@/templates/main'

export const AppRoutes: RouteObject = {
  path: '/',
  element: <Main />,
  children: [
    { path: 'home', element: <Home /> },
    { path: 'auth', element: <Authentication /> },
    {
      path: 'product',
      element: <Products />,
      children: [
        { path: 'info', element: <ProductInfo /> },
        { path: 'list', element: <ProductListItems /> },
        { path: 'detail/:id', element: <ProductDetail /> },
      ],
    },
  ],
}
