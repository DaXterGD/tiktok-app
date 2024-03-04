import { getApp, getApps, initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.PRIVATE_APIKEY,
  authDomain: process.env.PRIVATE_AUTHDOMAIN,
  projectId: process.env.PRIVATE_PROJECTID,
  storageBucket: process.env.PRIVATE_STORAGEBUCKET,
  messagingSenderId: process.env.PRIVATE_MESSAGINGSENDERID,
  appId: process.env.PRIVATE_APPID
}

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
