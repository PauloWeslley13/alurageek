import { toasts } from './../../src/components/ui/toasts/toasts'
import { ICart } from './cart-props'
import { Cart } from './cart'

export class CartUseCase {
  createCart(userId: string, carts: ICart) {
    const cart = new Cart(userId, carts)

    if (carts.data.length === 0) {
      toasts.warn({ title: 'Não foi possível finaliza a compra' })
    } else {
      toasts.success({ title: 'Compra finalizada' })
      cart.create()
    }
  }
}
