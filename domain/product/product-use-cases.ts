import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { collectionProducts } from '../../database/firebase/collections'
import { Product } from './entities/product'
import { IProduct, IVerifyIsEqualProductProps } from './product-props'
import { db } from '../../database/firebase'

export class ProductUseCase {
  async createProduct(data: Omit<IProduct, 'id'>, products: IProduct[]) {
    const isProduct = products.findIndex((prod) => prod.name === data.name)
    let productInfo = {} as Product

    if (isProduct !== -1) return 'Produto já cadastrado'

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

    product.update()

    return product
  }

  deleteProduct(data: IProduct): void {
    const product = new Product({ ...data })

    product.remove()
  }

  isVerifyIsEqualProduct({ data, product }: IVerifyIsEqualProductProps) {
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

  async getProductList(): Promise<IProduct[]> {
    const productList: IProduct[] = []

    const productRef = collection(db, 'products')
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
      } as IProduct)
    })

    return productList
  }

  async getProductListByCategory(category: string) {
    const productListCategory: IProduct[] = []

    const productRef = collection(db, 'products')
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
      } as IProduct)
    })

    console.log(productListCategory)

    return productListCategory
  }
}
