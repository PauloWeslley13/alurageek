import { Cart } from '../entities/cart'
import { CartRepository } from '..'
import { CartData } from '../../../database'

export class CartUseCase {
  protected cart = new Cart()

  createCart(userId: string, data: Omit<CartRepository, 'userId'>) {
    if (data.cart.length === 0) return 'Não foi possível finaliza a compra'

    this.cart.create({
      userId,
      cart: data.cart,
      totalPrice: data.totalPrice,
    })
  }

  savedUserCart(userId: string, data: Omit<CartRepository, 'userId'>) {
    this.cart.savedCart({
      userId,
      cart: data.cart,
      totalPrice: data.totalPrice,
    })
  }

  removeCart(userId: string, data: Omit<CartRepository, 'userId'>) {
    this.cart.removeCart({
      userId,
      cart: data.cart,
      totalPrice: data.totalPrice,
    })
  }

  async getCartByUserId(userId: string) {
    const data = new CartData()
    const response = await data.getCartByUserId(userId)

    return response
  }

  async getCartByUserIdSaved(userId: string) {
    const data = new CartData()
    const response = await data.getCartByUserIdSaved(userId)

    return response
  }
}
