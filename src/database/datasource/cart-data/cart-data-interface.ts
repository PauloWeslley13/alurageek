import { CartRepository } from '@/domain/cart'

export namespace ICartUserSaved {
  export type Props = CartRepository & {
    id: string
  }
}

export interface ICartData {
  getCartByUserId(userId: string): Promise<CartRepository>
  getCartByUserIdSaved(userId: string): Promise<ICartUserSaved.Props[]>
}
