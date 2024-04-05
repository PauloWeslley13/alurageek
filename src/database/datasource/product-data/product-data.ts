import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { ProductRepository } from '@/domain/product/repositories'
import { DBFactory } from '@/database/db-factory'
import { COLLECTIONS } from '@/database/types'
import { IProductData } from './product-data-interface'

export class ProductData implements IProductData {
  private database = DBFactory.database()

  async getProductList(): Promise<ProductRepository[]> {
    const productList: ProductRepository[] = []

    const productRef = this.database.getCollection(COLLECTIONS.PRODUCTS)
    const filteredProduct = query(
      productRef,
      where('name', '!=', true),
      orderBy('name', 'asc'),
    )

    const queryProduct = await getDocs(filteredProduct)

    queryProduct.forEach((doc) => {
      productList.push({
        id: doc.id,
        name: doc.data().name,
        price: doc.data().price,
        description: doc.data().description,
        category: doc.data().category,
        url: doc.data().url,
      } as ProductRepository)
    })

    return productList
  }

  async getProductListByCategory(
    category: string,
  ): Promise<ProductRepository[]> {
    const productListCategory: ProductRepository[] = []

    const productRef = this.database.getCollection(COLLECTIONS.PRODUCTS)
    const productFilterCategory = query(
      productRef,
      where('category', '==', category),
    )

    const queryProduct = await getDocs(productFilterCategory)

    queryProduct.forEach((doc) => {
      productListCategory.push({
        id: doc.id,
        name: doc.data().name,
        price: doc.data().price,
        description: doc.data().description,
        category: doc.data().category,
        url: doc.data().url,
      } as ProductRepository)
    })

    console.log(productListCategory)

    return productListCategory
  }
}
