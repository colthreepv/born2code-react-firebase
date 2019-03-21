import { initializeApp } from 'firebase/app'

const apiKey = process.env.REACT_APP_APIKEY
const authDomain = process.env.REACT_APP_AUTHDOMAIN
const databaseURL = process.env.REACT_APP_DATABASEURL
const projectId = process.env.REACT_APP_PROJECTID
const storageBucket = process.env.REACT_APP_STORAGEBUCKET
const messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID

export const firebaseApp = initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
})
