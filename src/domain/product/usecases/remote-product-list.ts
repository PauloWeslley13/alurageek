import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { COLLECTIONS, IFirebase } from '@/infra/services/firebase'
import { IProductList } from '@/data/usecases'

interface RemoteProductListDependencies {
  database: IFirebase
}

export class RemoteProductList implements IProductList {
  private products: IProductList.Model[]
  private database: IFirebase

  constructor(protected dependencies: RemoteProductListDependencies) {
    this.database = dependencies.database
    this.products = []
  }

  async getProductList(): Promise<RemoteProductList.Model[]> {
    const productsQuery = query(
      this.database.collection(COLLECTIONS.PRODUCTS),
      where('name', '!=', true),
      orderBy('name', 'asc'),
    )

    const productListQuery = await getDocs(productsQuery)

    productListQuery.forEach((doc) => {
      const data = { ...doc.data(), id: doc.id } as RemoteProductList.Model
      this.products.push(data)
    })

    return this.products
  }
}

namespace RemoteProductList {
  export type Model = IProductList.Model
}
