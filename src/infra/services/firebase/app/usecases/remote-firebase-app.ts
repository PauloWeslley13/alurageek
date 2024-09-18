import { FirebaseApp, initializeApp } from 'firebase/app'
import { IFirebaseApp } from '@/infra/services/firebase'

export default class RemoteFirebaseApp implements IFirebaseApp {
  constructor(private params: IFirebaseApp.Params) {
    this.initializeApp()
  }

  initializeApp(): FirebaseApp {
    const app = initializeApp({
      apiKey: this.params.apiKey,
      authDomain: this.params.authDomain,
      projectId: this.params.projectId,
      storageBucket: this.params.storageBucket,
      messagingSenderId: this.params.messagingSenderId,
      appId: this.params.appId,
      measurementId: this.params.measurementId,
    })
    return app
  }
}
