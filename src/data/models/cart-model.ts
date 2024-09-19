export type CartModel = {
  userId: string
  cart: Array<{ id: string; quantity: number }>
  totalPrice: number
}
