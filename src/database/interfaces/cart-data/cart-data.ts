import { CartRepository } from './../../../domain/cart'

interface ICartUserSaved extends CartRepository {
  id: string
}

interface ICartData {
  getCartByUserId(userId: string): Promise<CartRepository>
  getCartByUserIdSaved(userId: string): Promise<ICartUserSaved[]>
}

export type { ICartData, ICartUserSaved }
