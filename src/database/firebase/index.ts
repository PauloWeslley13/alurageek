import { FirebaseConfig } from './firebase-config'

// Initialize Firebase
const initApp = new FirebaseConfig()

export { initApp }
export { Firebase } from './usecases/firebase'
export { FirebaseAuth } from './usecases/firebase-auth'
export * from './interfaces'
