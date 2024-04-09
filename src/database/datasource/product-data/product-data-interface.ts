import { ProductTypes } from '@/domain/product/types'

export interface IProductData {
  getProductList(): Promise<ProductTypes.ListDataParams>
  getProductListByCategory(
    category: string,
  ): Promise<ProductTypes.ListDataParams>
}
