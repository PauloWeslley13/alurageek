export class CartRepository {
  public userId: string
  public cart: { id: string; quantity: number }[]
  public totalPrice: number

  constructor(props: CartRepository) {
    this.userId = props.userId
    this.cart = props.cart
    this.totalPrice = props.totalPrice
  }
}
