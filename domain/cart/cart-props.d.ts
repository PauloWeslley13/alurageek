export interface ICart {
  data: {
    id: string
    quantity: number
  }[]
  totalPrice: number
}

export interface IUserCart extends ICart {
  userId: string
}

export interface IUserCartSaved extends IUserCart {
  id: string
}
