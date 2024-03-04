export interface IProduct {
  id: string
  name: string
  description: string
  price: string
  category: string
  url: string
}

export interface IVerifyIsEqualProductProps {
  data: Omit<IProduct, 'id'>
  product: IProduct
}
