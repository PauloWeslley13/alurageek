import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { ProductRepository } from './../repositories'
import { COLLECTIONS, DBFactory } from '../../../database'
import { ProductModel } from './product-model'
import { Factory } from '../../../factory'

// TODO: ENTIDADE Product
export class Product implements ProductModel {
  protected product: ProductRepository = {} as ProductRepository
  protected database = DBFactory.database()
  protected productBuild: Factory.ProductFactory = new Factory.ProductFactory()

  async create(
    data: Omit<ProductRepository, 'id'>,
  ): Promise<ProductRepository> {
    await addDoc(this.database.getCollection(COLLECTIONS.PRODUCTS), { ...data })
      .then((newProduct) => {
        const product = this.productBuild.add({ id: newProduct.id, ...data })

        this.product = product
      })
      .catch((err) => console.log(err))

    return this.product
  }

  async update(data: ProductRepository): Promise<ProductRepository> {
    this.product = data

    await updateDoc(
      doc(this.database.getDB(), COLLECTIONS.PRODUCTS, this.product.id),
      { ...data },
    )

    return this.product
  }

  async remove({ id }: Pick<ProductRepository, 'id'>): Promise<void> {
    const productRemoveRef = doc(
      this.database.getDB(),
      COLLECTIONS.PRODUCTS,
      id,
    )

    await deleteDoc(productRemoveRef)
  }
}
