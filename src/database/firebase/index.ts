import { FirebaseConfig } from './firebase-config'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const initApp = new FirebaseConfig()

export { initApp }
export { Firebase } from './firebase'
export * from './interfaces'
