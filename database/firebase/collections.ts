import { collection } from 'firebase/firestore'
import { db } from './index'

const collectionUser = collection(db, 'users')
const collectionCarts = collection(db, 'carts')
const collectionProducts = collection(db, 'products')
const collectionCategories = collection(db, 'categories')

export {
  collectionUser,
  collectionCarts,
  collectionProducts,
  collectionCategories,
}
