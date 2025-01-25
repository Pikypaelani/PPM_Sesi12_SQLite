import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9OGfBRXvPbV6S3TscuNB3pVyy7phZS20",
  authDomain: "uasproject-3e32d.firebaseapp.com",
  projectId: "uasproject-3e32d",
  storageBucket: "uasproject-3e32d.firebasestorage.app",
  messagingSenderId: "642646710365",
  appId: "1:642646710365:web:fd31ffd0bf261642a215b4",
  measurementId: "G-PDN1SNZGZC"
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
