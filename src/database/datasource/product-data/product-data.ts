import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { ProductTypes } from '@/domain/product/types'
import { DBFactory } from '@/database/db-factory'
import { COLLECTIONS } from '@/database/types'
import { IProductData } from './product-data-interface'

export class ProductData implements IProductData {
  private database = DBFactory.database()

  async getProductList(): Promise<ProductTypes.ListDataParams> {
    const productList: ProductTypes.ListDataParams = []

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
      } as ProductTypes.Data)
    })

    return productList
  }

  async getProductListByCategory(
    category: string,
  ): Promise<ProductTypes.ListDataParams> {
    const productListCategory: ProductTypes.ListDataParams = []

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
      } as ProductTypes.Data)
    })

    console.log(productListCategory)

    return productListCategory
  }
}
