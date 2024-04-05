import { Auth } from 'firebase/auth'
import { FirebaseStorage } from 'firebase/storage'
import {
  CollectionReference,
  DocumentData,
  Firestore,
} from 'firebase/firestore'
import { FirebaseApp } from 'firebase/app'
import { COLLECTIONS } from '@/database/types'

export type CollectionParams = {
  path: COLLECTIONS
  id: string
  collections: COLLECTIONS
}

export interface IFirebase {
  getCollection(
    path: COLLECTIONS,
  ): CollectionReference<DocumentData, DocumentData>
  collection(
    path: CollectionParams,
  ): CollectionReference<DocumentData, DocumentData>
  getDB(): Firestore
  auth(): Auth
  storage(): FirebaseStorage
  app(): FirebaseApp
}

export interface IFirebaseConfig {
  initializeApp(): FirebaseApp
}
