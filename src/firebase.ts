import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, confirmPasswordReset} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCpyJ7vWYYDT6Xl0jTuGQxn3qQdnUyT46g",
  authDomain: "crownstone-87e64.firebaseapp.com",
  projectId: "crownstone-87e64",
  storageBucket: "crownstone-87e64.appspot.com",
  messagingSenderId: "422796325876",
  appId: "1:422796325876:web:2c8a56cbf9393abfd63fa1",
  databaseURL: "https://crownstone-87e64-default-rtdb.firebaseio.com",
  measurementId: "G-7WEMRK7ESW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export const auth = getAuth(app);

export const firestore = getFirestore(app);
 const database = getDatabase(app);
 export {database, storage, db}

 export const passwordReset = async (email: string) => {
  return await sendPasswordResetEmail(auth, email)
}

export const confirmThePasswordReset = async (
  oobCode:string, newPassword:string
) => {
  if(!oobCode && !newPassword) return;
  
  return await confirmPasswordReset(auth, oobCode, newPassword)
}