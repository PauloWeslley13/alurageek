type CartProduct = {
  id: string
  quantity: number
}

export interface ICart {
  userId: string
  cart: CartProduct[]
  totalPrice: number
}

export class Cart implements ICart {
  public userId: string
  public cart: CartProduct[]
  public totalPrice: number

  constructor({ userId, cart, totalPrice }: ICart) {
    this.userId = userId
    this.cart = cart
    this.totalPrice = totalPrice
  }
}
