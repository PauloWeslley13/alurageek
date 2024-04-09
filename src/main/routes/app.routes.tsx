import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/presenter/layout'
import {
  Authentication,
  Cart,
  Category,
  Home,
  PanelAdm,
  ProductCreate,
  ProductDetail,
  ProductListItems,
  Products,
} from './pages'

const products = (): RouteObject => ({
  element: <Products />,
  children: [
    { path: '/product/info', element: <ProductCreate /> },
    { path: '/product/list', element: <ProductListItems /> },
    { path: '/product/detail/:id', element: <ProductDetail /> },
  ],
})

const useAppRoutes = (): RouteObject => ({
  path: '/',
  element: <RootLayout />,
  children: [
    { path: 'auth', element: <Authentication /> },
    { path: 'home', element: <Home /> },
    products(),
    { path: 'cart', element: <Cart /> },
    { path: 'panel-adm', element: <PanelAdm /> },
    { path: 'category/:id', element: <Category /> },
  ],
})

export { useAppRoutes }
