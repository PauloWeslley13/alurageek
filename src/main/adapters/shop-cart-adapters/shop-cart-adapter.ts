import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { CartType } from '@/presenter/components/types'

export const setCartUserAdapter = (cart: object): void => {
  makeLocalStorageAdapter().set('cart-user-alurageek', cart)
}

export const getCartUserAdapter = (): CartType => {
  return makeLocalStorageAdapter().get('cart-user-alurageek')
}

export const removeCartUserAdapter = (): void => {
  return makeLocalStorageAdapter().delete('cart-user-alurageek')
}
