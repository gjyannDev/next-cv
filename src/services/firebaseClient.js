import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  serverTimestamp,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAJDP5exAQvIUpmGBoMa9tn4TnTCvdfNY",
  authDomain: "nextcv-5386e.firebaseapp.com",
  projectId: "nextcv-5386e",
  storageBucket: "nextcv-5386e.firebasestorage.app",
  messagingSenderId: "160930262240",
  appId: "1:160930262240:web:73b306b67af4ec10d27485",
};

const app = initializeApp(firebaseConfig);

let doc_id = "fC03TyCxd9nLHwoQJ5jl";

export const db = getFirestore(app);
export const col_ref = collection(db, "cvusers");
export const user_ref = doc(col_ref, doc_id);
export const date_created = serverTimestamp();
export default app;
