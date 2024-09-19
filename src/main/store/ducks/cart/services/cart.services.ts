import { ICartSaved } from '@/data/usecases'
import { makeRemoteCart } from '@/main/factories/usecases/cart/remote-cart-factory'

export const cartServices = {
  savedCartUser: async (params: ICartSaved.Params) => {
    const cart = makeRemoteCart()
    return await cart.cartSaved(params)
  },
}
