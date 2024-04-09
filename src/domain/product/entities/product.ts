import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { COLLECTIONS, DBFactory } from '@/database'
import { Factory } from '@/factory'
import { ProductTypes } from '@/domain/product/types'
import { ProductModel } from './product-model'

// TODO: ENTIDADE Product
export class Product implements ProductModel {
  protected product: ProductTypes.Data = {} as ProductTypes.Data
  protected database = DBFactory.database()
  protected productBuild: Factory.ProductFactory = new Factory.ProductFactory()

  async create(data: ProductTypes.DataParams): Promise<ProductTypes.Data> {
    await addDoc(this.database.getCollection(COLLECTIONS.PRODUCTS), { ...data })
      .then((newProduct) => {
        const product = this.productBuild.add({ id: newProduct.id, ...data })

        this.product = product
      })
      .catch((err) => console.log(err))

    return this.product
  }

  async update(data: ProductTypes.Data): Promise<ProductTypes.Data> {
    this.product = data

    await updateDoc(
      doc(this.database.getDB(), COLLECTIONS.PRODUCTS, this.product.id),
      { ...data },
    )

    return this.product
  }

  async remove(id: string): Promise<void> {
    await deleteDoc(doc(this.database.getDB(), COLLECTIONS.PRODUCTS, id))
  }
}
