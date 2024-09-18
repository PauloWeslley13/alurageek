import { CartType } from '@/presenter/components/types'

export type QuantityProps = {
  id: string
  quantity: number
}

export type AddToCartProps = {
  userId: string
  productId: string
}

export type AddCartProps = Pick<CartType, 'userId' | 'cart' | 'totalPrice'>
