import { ProductRepository } from '../repositories'

interface IProductModel {
  create(data: Omit<ProductRepository, 'id'>): Promise<ProductRepository>
  update(data: ProductRepository): Promise<ProductRepository>
  remove({ id }: Pick<ProductRepository, 'id'>): Promise<void>
}

export abstract class ProductModel implements IProductModel {
  async create(
    data: Omit<ProductRepository, 'id'>,
  ): Promise<ProductRepository> {
    return data as ProductRepository
  }

  async update(data: ProductRepository): Promise<ProductRepository> {
    return data as ProductRepository
  }

  async remove({ id }: Pick<ProductRepository, 'id'>): Promise<void> {
    console.log(id)
  }
}
