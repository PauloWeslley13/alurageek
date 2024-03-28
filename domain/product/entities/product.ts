import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { AddProduct, ProductBuild } from './../builder'
import { ProductRepository } from './../repositories'
import { COLLECTIONS, DBFactory } from '../../../database'
import { ProductModel } from './product-model'

// TODO: ENTIDADE Product
export class Product implements ProductModel {
  protected database = DBFactory.database()
  protected productBuild: ProductBuild = new ProductBuild()
  protected addProduct: AddProduct = new AddProduct(this.productBuild)

  constructor(private product: ProductRepository) {}

  async create(): Promise<{ product: ProductRepository; message: string }> {
    const data = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      category: this.product.category,
      url: this.product.url,
    }

    await addDoc(this.database.getCollection(COLLECTIONS.USERS), { ...data })
      .then((newProduct) => {
        this.addProduct.product({ id: newProduct.id, ...data })

        const prod = this.productBuild.getProduct()

        this.product = prod
      })
      .catch((err) => console.log(err))

    return {
      product: this.product,
      message: 'Producto criado com sucesso',
    }
  }

  async update(): Promise<void> {
    const productUpdateRef = doc(
      this.database.getDB(),
      COLLECTIONS.PRODUCTS,
      this.product.id,
    )

    await updateDoc(productUpdateRef, {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      category: this.product.category,
      url: this.product.url,
    })
  }

  async remove(): Promise<void> {
    const productRemoveRef = doc(
      this.database.getDB(),
      COLLECTIONS.PRODUCTS,
      this.product.id,
    )
    await deleteDoc(productRemoveRef)
  }
}
