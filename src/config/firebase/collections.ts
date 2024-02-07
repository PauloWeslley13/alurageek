import { collection } from 'firebase/firestore'
import { db } from './index'

const collectionUser = collection(db, 'users')
export { collectionUser }
