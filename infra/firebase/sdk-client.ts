// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJs85Ea8tttWG20mj59O_fVY_mTpIly40',
  authDomain: 'alurageek-bde92.firebaseapp.com',
  projectId: 'alurageek-bde92',
  storageBucket: 'alurageek-bde92.appspot.com',
  messagingSenderId: '550759649252',
  appId: '1:550759649252:web:ad718e5d7156554db081f1',
  measurementId: 'G-EVCEB6WFTX',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { db, storage, auth }
