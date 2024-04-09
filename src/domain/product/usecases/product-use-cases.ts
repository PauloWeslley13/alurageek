import { Product } from '../entities/product'
import { ProductTypes } from '../types'
import { ProductData } from '@/database'

export class ProductUseCase {
  protected product = new Product()

  async createProduct(
    data: ProductTypes.DataParams,
    products: ProductTypes.ListDataParams,
  ): Promise<ProductTypes.ReturnPromiseParams> {
    const isProduct = products.findIndex((prod) => prod.name === data.name)

    if (isProduct !== -1) return 'Produto já cadastrado'

    return this.product.create({ ...data })
  }

  async updateProduct(data: ProductTypes.Data): Promise<ProductTypes.Data> {
    return await this.product.update({ ...data })
  }

  async deleteProduct(data: ProductTypes.Data): Promise<void> {
    await this.product.remove(data.id)
  }

  verifyToEqualProduct({
    data,
    product,
  }: ProductTypes.Params<ProductTypes.DataParams, ProductTypes.Data>): boolean {
    const isEqualProducts =
      data.name === product.name &&
      data.description === product.description &&
      data.price === product.price &&
      data.category === product.category &&
      data.url === product.url

    if (isEqualProducts) {
      return false
    } else {
      return true
    }
  }

  async getProductList(): Promise<ProductTypes.ListDataParams> {
    const data = new ProductData()
    const response = await data.getProductList()

    return response
  }

  async getProductListByCategory(category: string) {
    const data = new ProductData()
    const response = await data.getProductListByCategory(category)

    return response
  }
}
