type ProductsCart = {
  id: string
  quantity: number
}

type CartType = {
  id: string
  userId: string
  data: ProductsCart[]
  totalPrice: number
}

export { CartType, ProductsCart }
