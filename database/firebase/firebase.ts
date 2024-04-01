import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  getFirestore,
} from 'firebase/firestore'
import { Auth, getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'
import { IFirebase, ICollection } from './interfaces'
import { app } from '.'

export class Firebase implements IFirebase {
  auth(): Auth {
    return getAuth(app)
  }

  storage(): FirebaseStorage {
    return getStorage(app)
  }

  getDB(): Firestore {
    return getFirestore(app)
  }

  getCollection(path: string): CollectionReference<DocumentData, DocumentData> {
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
