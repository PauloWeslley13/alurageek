type ProductsCart = {
  id: string
  quantity: number
}

type CartType = {
  userId: string
  data: ProductsCart[]
  totalPrice: number
}

export { CartType, ProductsCart }
