import { lazy } from 'react'
import { Loadable } from '@/presenter/components/loadable'

export const Cart = Loadable(lazy(() => import('@/presenter/pages/cart/cart')))
