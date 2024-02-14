import { RouteObject } from 'react-router-dom'
import {
  Home,
  Authentication,
  Products,
  ProductInfo,
  ProductListItems,
  ProductDetail,
  Cart,
} from '@/pages'
import { Main } from '@/templates/main'

export const AppRoutes: RouteObject = {
  path: '/',
  element: <Main />,
  children: [
    { path: 'auth', element: <Authentication /> },
    { path: 'home', element: <Home /> },
    {
      path: 'product',
      element: <Products />,
      children: [
        { path: 'info', element: <ProductInfo /> },
        { path: 'list', element: <ProductListItems /> },
        { path: 'detail/:id', element: <ProductDetail /> },
      ],
    },
    { path: 'cart', element: <Cart /> },
  ],
}
