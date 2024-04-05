import { ProductRepository } from './../../../domain/product'

interface IProductData {
  getProductList(): Promise<ProductRepository[]>
  getProductListByCategory(category: string): Promise<ProductRepository[]>
}

export type { IProductData }
