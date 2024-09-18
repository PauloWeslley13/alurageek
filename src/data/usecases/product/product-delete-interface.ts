export namespace IProductDelete {
  export type Params = {
    productId: string
  }
}

export interface IProductDelete {
  deleteProduct(params: IProductDelete.Params): Promise<void>
}
