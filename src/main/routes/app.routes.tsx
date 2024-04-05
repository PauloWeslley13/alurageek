import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/presenter/layout/root-layout/layout'
import {
  Home,
  Authentication,
  Products,
  ProductCreate,
  ProductListItems,
  ProductDetail,
  Cart,
  PanelAdm,
  Category,
} from './pages'

export const useAppRoutes = (): RouteObject => ({
  path: '/',
  element: <RootLayout />,
  children: [
    { path: 'auth', element: <Authentication /> },
    { path: 'home', element: <Home /> },
    {
      element: <Products />,
      children: [
        { path: '/product/info', element: <ProductCreate /> },
        { path: '/product/list', element: <ProductListItems /> },
        { path: '/product/detail/:id', element: <ProductDetail /> },
      ],
    },
    { path: 'cart', element: <Cart /> },
    { path: 'panel-adm', element: <PanelAdm /> },
    { path: 'category/:id', element: <Category /> },
  ],
})
