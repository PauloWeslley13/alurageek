import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from 'firebase/firestore'
import { COLLECTIONS } from 'database'
import { FirebaseApp } from 'firebase/app'

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
  app(): FirebaseApp
}

export type { IFirebase, ICollection }
