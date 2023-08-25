import { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyARV-PNMmibXhrAmbAcJCTb5aGeNIvBMyE",
  authDomain: "emailpasswordlogin-f3ad6.firebaseapp.com",
  projectId: "emailpasswordlogin-f3ad6",
  storageBucket: "emailpasswordlogin-f3ad6.appspot.com",
  messagingSenderId: "596117510811",
  appId: "1:596117510811:web:6d2d8343f63e5d5881043e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app)

export const db = getFirestore(app);

