export interface IVerifyIsEqualProduct {
  data: Omit<IProduct, 'id'>
  product: IProduct
}
