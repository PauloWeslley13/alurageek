import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { ProductsProps } from '@/components/types/products-props'

const productsService = {
  get: async () => {
    const productList: ProductsProps[] = []

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
        categoria: doc.data().categoria,
        url: doc.data().url,
      } as ProductsProps)
    })

    return productList
  },
}

export default productsService
