// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "@env";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  // apiKey: "AIzaSyAKHAwiiiEJ1W1buAyvRtu6oUKZyLu8UM4",
  // authDomain: "iris-app-32e47.firebaseapp.com",
  // projectId: "iris-app-32e47",
  // storageBucket: "iris-app-32e47.appspot.com",
  // messagingSenderId: "50437021968",
  // appId: "1:50437021968:web:cbe796eaa9f29ad3c98595"
};

// Initialize Firebase
const myApp = initializeApp(firebaseConfig);
export const database = getFirestore(myApp);
export const storage = getStorage(myApp);
// export const auth = getAuth(myApp);
export const auth = initializeAuth(myApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
