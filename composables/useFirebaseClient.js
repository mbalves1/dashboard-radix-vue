import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBr6gjyzNMbUdLBeanM-NZsmbJLRkdQBx4",
  authDomain: "auth-app-15817.firebaseapp.com",
  projectId: "auth-app-15817",
  storageBucket: "auth-app-15817.appspot.com",
  messagingSenderId: "1007079985103",
  appId: "1:1007079985103:web:25ad9d1645745598400cba"
};

const app = initializeApp(firebaseConfig);

export default function useFirebaseClient() {
  const auth = getAuth(app)
  return { app, auth }
}