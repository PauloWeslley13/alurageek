import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/layout/root-layout/layout'
import { Loadable } from '@/components/loadable'

const Home = Loadable(lazy(() => import('@/pages/home')))
const Cart = Loadable(lazy(() => import('@/pages/cart')))
const Products = Loadable(lazy(() => import('@/pages/products')))
const ProductCreate = Loadable(
  lazy(() => import('@/pages/products/modules/product-create')),
)
const ProductDetail = Loadable(
  lazy(() => import('@/pages/products/modules/product-detail')),
)
const ProductListItems = Loadable(
  lazy(() => import('@/pages/products/modules/product-list-items')),
)
const Authentication = Loadable(
  lazy(() => import('@/pages/authentication/authentication')),
)

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
