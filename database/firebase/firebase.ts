import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  getFirestore,
} from 'firebase/firestore'
import { Auth, getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'
import { FirebaseApp } from 'firebase/app'
import { IFirebase, ICollection } from './interfaces'
import { initApp } from './index'
import { COLLECTIONS } from '../types'

export class Firebase implements IFirebase {
  private initApp: FirebaseApp = initApp.initializeApp()

  app(): FirebaseApp {
    return this.initApp
  }

  auth(): Auth {
    return getAuth(this.initApp)
  }

  storage(): FirebaseStorage {
    return getStorage(this.initApp)
  }

  getDB(): Firestore {
    return getFirestore(this.initApp)
  }

  getCollection(
    path: COLLECTIONS,
  ): CollectionReference<DocumentData, DocumentData> {
    return collection(this.getDB(), path)
  }

  collection({
    path,
    id,
    collections,
  }: ICollection): CollectionReference<DocumentData, DocumentData> {
    return collection(this.getDB(), path, id, collections)
  }
}
