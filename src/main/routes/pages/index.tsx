import { lazy } from 'react'
import { Loadable } from '@/presenter/components/loadable'

const Home = Loadable(lazy(() => import('@/presenter/pages/home')))
const Cart = Loadable(lazy(() => import('@/presenter/pages/cart')))
const Category = Loadable(lazy(() => import('@/presenter/pages/category')))
const PanelAdm = Loadable(lazy(() => import('@/presenter/pages/panel-adm')))
const Authentication = Loadable(
  lazy(() => import('@/presenter/pages/authentication')),
)
const Products = Loadable(lazy(() => import('@/presenter/pages/products')))
const ProductCreate = Loadable(
  lazy(() => import('@/presenter/pages/products/components/product-create')),
)
const ProductDetail = Loadable(
  lazy(() => import('@/presenter/pages/products/components/product-detail')),
)
const ProductListItems = Loadable(
  lazy(
    () => import('@/presenter/pages/products/components/product-list-items'),
  ),
)

export {
  Home,
  Cart,
  Category,
  PanelAdm,
  Authentication,
  Products,
  ProductCreate,
  ProductDetail,
  ProductListItems,
}
