import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebase_app = initializeApp(firebaseConfig);

// Initialize Firebase Firestore and get a reference to the service
const db = getFirestore(firebase_app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase_app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(firebase_app);

export {firebase_app, auth, db, storage};