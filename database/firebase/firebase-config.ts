import { FirebaseApp, initializeApp } from 'firebase/app'

export class FirebaseConfig {
  private apiKey = import.meta.env.VITE_API_KEY
  private authDomain = import.meta.env.VITE_AUTH_DOMAIN
  private projectId = import.meta.env.VITE_PROJECT_ID
  private storageBucket = import.meta.env.VITE_STORAGE_BUCKET
  private messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID
  private appId = import.meta.env.VITE_APP_ID
  private measurementId = import.meta.env.VITE_MEASUREMENT_ID

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
