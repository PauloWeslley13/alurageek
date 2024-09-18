import { collection, Firestore, getFirestore } from 'firebase/firestore'
import { Auth, getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'
import { FirebaseApp } from 'firebase/app'
import { COLLECTIONS } from '@/infra/services/firebase/collections'
import { IFirebase } from '@/infra/services/firebase'

interface RemoteFirebaseDependencies {
  initApp: FirebaseApp
}

export class RemoteFirebase implements IFirebase {
  private initApp: FirebaseApp

  constructor(protected dependencies: RemoteFirebaseDependencies) {
    this.initApp = dependencies.initApp
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

  collection(path: COLLECTIONS): IFirebase.CollectionParams {
    return collection(this.getDB(), path)
  }

  subCollection({
    id,
    path,
    subCollection,
  }: IFirebase.Params): IFirebase.CollectionParams {
    return collection(this.getDB(), path, id, subCollection)
  }
}
