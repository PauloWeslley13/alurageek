import { CartRepository } from '@/domain/cart'

export interface ICartUserSaved extends CartRepository {
  id: string
}

export interface ICartData {
  getCartByUserId(userId: string): Promise<CartRepository>
  getCartByUserIdSaved(userId: string): Promise<ICartUserSaved[]>
}
