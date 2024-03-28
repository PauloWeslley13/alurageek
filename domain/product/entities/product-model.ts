import { ProductRepository } from '../repositories'

interface IProductModel {
  create(): Promise<{ product: ProductRepository; message: string }>
  update(): Promise<void>
  remove(): Promise<void>
}

export abstract class ProductModel implements IProductModel {
  async create(): Promise<{ product: ProductRepository; message: string }> {
    return {
      product: new ProductRepository({} as ProductRepository),
      message: '',
    }
  }

  async update(): Promise<void> {}

  async remove(): Promise<void> {}
}
