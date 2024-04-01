import { Product } from '../entities/product'
import { IVerifyIsEqualProduct } from '../interfaces'
import { ProductRepository } from '../repositories'
import { ProductData } from '../../../database'

export class ProductUseCase {
  protected product = new Product()

  async createProduct(
    data: Omit<ProductRepository, 'id'>,
    products: ProductRepository[],
  ): Promise<ProductRepository | 'Produto já cadastrado'> {
    const isProduct = products.findIndex((prod) => prod.name === data.name)

    if (isProduct !== -1) return 'Produto já cadastrado'

    return this.product.create({ ...data })
  }

  async updateProduct(data: ProductRepository): Promise<ProductRepository> {
    return await this.product.update({ ...data })
  }

  async deleteProduct(data: ProductRepository): Promise<void> {
    await this.product.remove({ id: data.id })
  }

  isVerifyIsEqualProduct({ data, product }: IVerifyIsEqualProduct) {
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

  async getProductList(): Promise<ProductRepository[]> {
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
