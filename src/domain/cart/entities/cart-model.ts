import { CartRepository } from './../repositories/cart-repository'

interface ICartModel {
  create(data: CartRepository): Promise<void>
  savedCart(data: CartRepository): Promise<void>
  removeCart({ userId }: CartRepository): Promise<void>
}

export abstract class CartModel implements ICartModel {
  async create(data: CartRepository): Promise<void> {
    console.log(data)
  }

  async savedCart(data: CartRepository): Promise<void> {
    console.log(data)
  }

  async removeCart({ userId }: CartRepository): Promise<void> {
    console.log(userId)
  }
}
