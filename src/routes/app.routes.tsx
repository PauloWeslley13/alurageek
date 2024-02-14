import { RouteObject } from 'react-router-dom'
import {
  Home,
  Authentication,
  Products,
  ProductListItems,
  ProductDetail,
  Cart,
  ProductCreate,
} from '@/pages'
import { RootLayout } from '@/layout/root-layout/layout'

export const AppRoutes: RouteObject = {
  path: '/',
  element: <RootLayout />,
  children: [
    { path: 'auth', element: <Authentication /> },
    { path: 'home', element: <Home /> },
    {
      path: 'product',
      element: <Products />,
      children: [
        { path: 'info', element: <ProductCreate /> },
        { path: 'list', element: <ProductListItems /> },
        { path: 'detail/:id', element: <ProductDetail /> },
      ],
    },
    { path: 'cart', element: <Cart /> },
  ],
}
