import { collection, addDoc } from "firebase/firestore";
import { db } from "./setup";

const collectionId = "todos";

async function createTodo(todo) {
  try {
    const docRef = await addDoc(collection(db, collectionId), todo);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    // send error up above for further handling
    throw e;
  }
}

export { createTodo };
