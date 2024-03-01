import { addDoc } from 'firebase/firestore'
import { collectionProducts } from '../../database/firebase/collections'
import { Product } from './product'
import { IProduct } from './product-props'

export class ProductUseCase {
  async createProduct(data: Omit<IProduct, 'id'>, products: IProduct[]) {
    const isProduct = products.findIndex((prod) => prod.name === data.name)
    let productInfo = {} as Product

    if (isProduct !== -1) return

    await addDoc(collectionProducts, { ...data })
      .then((newProduct) => {
        const product = new Product({ id: newProduct.id, ...data })

        productInfo = product
      })
      .catch((err) => console.log(err))

    return productInfo
  }

  updateProduct(data: IProduct): Product {
    const product = new Product({ ...data })

    product.updated()

    return product
  }

  deleteProduct(data: IProduct) {
    const product = new Product({ ...data })

    product.remove()
  }
}
