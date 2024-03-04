type ProductsCart = {
  id: string
  quantity: number
}

type CartType = {
  userId: string
  cart: ProductsCart[]
  totalPrice: number
}

export { CartType, ProductsCart }
