import { ProductTypes } from '@/domain/product/types'

interface IProductModel<T> {
  create(data: Omit<T, 'id'>): Promise<T>
  update(data: T): Promise<T>
  remove(id: string): Promise<void>
}

export abstract class ProductModel implements IProductModel<ProductTypes.Data> {
  async create(data: ProductTypes.DataParams): Promise<ProductTypes.Data> {
    return Promise.resolve(data as ProductTypes.Data)
  }

  async update(data: ProductTypes.Data): Promise<ProductTypes.Data> {
    return Promise.resolve(data as ProductTypes.Data)
  }

  async remove(id: string): Promise<void> {
    Promise.resolve(id)
  }
}
