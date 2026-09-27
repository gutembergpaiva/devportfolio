import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyByaGmYr18wn4MpgOn5cgexwWXXySz_57Y',
  authDomain: 'devportfolio-210e0.firebaseapp.com',
  projectId: 'devportfolio-210e0',
  storageBucket: 'devportfolio-210e0.firebasestorage.app',
  messagingSenderId: '262284542861',
  appId: '1:262284542861:web:b39ef9533c41e56a4e33c4'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

export default app