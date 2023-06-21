// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "react-easytobuy.firebaseapp.com",
  projectId: "react-easytobuy",
  storageBucket: "react-easytobuy.appspot.com",
  messagingSenderId: "625569704605",
  appId: "1:625569704605:web:2a21a269685fdc65944274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a provider
const provider =  new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account" //whenever the provider is interacted, user is asked to select an account
});

// Initialize getAuth
export const  auth = getAuth();

export const SignInWithGooglePopup = () => {
    return signInWithPopup(auth, provider);
  };

// Firestore setup
export const db = getFirestore();
export const createuserDocument = async (userAuth) =>{
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const documentSnapshot = getDoc(userDocRef)
  console.log((await documentSnapshot).exists()) // if document exists
}