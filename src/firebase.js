import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_bisFOKzkhzQ0iBdv1AVFLcy_H8qNouI",
  authDomain: "netflix-clone-3f0d9.firebaseapp.com",
  projectId: "netflix-clone-3f0d9",
  storageBucket: "netflix-clone-3f0d9.appspot.com",
  messagingSenderId: "1057392353766",
  appId: "1:1057392353766:web:38a19fa751a8f1500a3627",
  measurementId: "G-LMDNDQM1DG",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
