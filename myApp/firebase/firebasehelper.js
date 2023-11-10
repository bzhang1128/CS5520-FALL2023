import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";
import { auth } from "./firebaseSetup";

export async function writeToDB(goal) {
  try {
    console.log(auth.currentUser.uid);
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(database, "goals"), {
      ...goal,
      user: auth.currentUser.uid,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(database, "goals", id));
  } catch (err) {
    console.log(err);
  }
}
