import { FirebaseApp, initializeApp } from 'firebase/app'
import { IFirebaseConfig } from './index'

export class FirebaseConfig implements IFirebaseConfig {
  private apiKey = 'AIzaSyBJs85Ea8tttWG20mj59O_fVY_mTpIly40'
  private authDomain = 'alurageek-bde92.firebaseapp.com'
  private projectId = 'alurageek-bde92'
  private storageBucket = 'alurageek-bde92.appspot.com'
  private messagingSenderId = '550759649252'
  private appId = '1:550759649252:web:ad718e5d7156554db081f1'
  private measurementId = 'G-EVCEB6WFTX'

  constructor() {
    this.initializeApp()
  }

  initializeApp(): FirebaseApp {
    const app = initializeApp({
      apiKey: this.apiKey,
      authDomain: this.authDomain,
      projectId: this.projectId,
      storageBucket: this.storageBucket,
      messagingSenderId: this.messagingSenderId,
      appId: this.appId,
      measurementId: this.measurementId,
    })
    return app
  }
}

/*
  private apiKey = import.meta.env.VITE_API_KEY
  private authDomain = import.meta.env.VITE_AUTH_DOMAIN
  private projectId = import.meta.env.VITE_PROJECT_ID
  private storageBucket = import.meta.env.VITE_STORAGE_BUCKET
  private messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID
  private appId = import.meta.env.VITE_APP_ID
  private measurementId = import.meta.env.VITE_MEASUREMENT_ID
*/
