import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from 'firebase/firestore'
import { COLLECTIONS } from 'database'

interface ICollection {
  path: COLLECTIONS
  id: string
  collections: COLLECTIONS
}

interface IFirebase {
  getCollection(
    path: COLLECTIONS,
  ): CollectionReference<DocumentData, DocumentData>
  collection(path: ICollection): CollectionReference<DocumentData, DocumentData>
  getDB(): Firestore
  auth(): Auth
  storage(): FirebaseStorage
}

export type { IFirebase, ICollection }
