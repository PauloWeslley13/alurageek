import { ProductRepository } from '@/domain/product'

export interface IProductData {
  getProductList(): Promise<ProductRepository[]>
  getProductListByCategory(category: string): Promise<ProductRepository[]>
}
