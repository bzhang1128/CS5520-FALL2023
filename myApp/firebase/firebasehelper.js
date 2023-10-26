import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(goal) {
  
  try {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(database, "goals"), goal);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}
