import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { RootLayout } from '@/layout/root-layout/layout'
import { Loadable } from '@/components/loadable'

const Home = Loadable(lazy(() => import('@/pages/home')))
const Cart = Loadable(lazy(() => import('@/pages/cart')))
const Category = Loadable(lazy(() => import('@/pages/category')))
const PanelAdm = Loadable(lazy(() => import('@/pages/panel-adm')))
const Authentication = Loadable(lazy(() => import('@/pages/authentication')))
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

export const AppRoutes: RouteObject = {
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
}
