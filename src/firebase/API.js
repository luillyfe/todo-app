import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
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

async function updateTodo(todo) {
  try {
    await updateDoc(doc(db, collectionId, todo.id), todo);
    return todo.id;
  } catch (e) {
    console.error(`Error updating document with id ${todo.id}:`, e);
    // send error up above for further handling
    throw e;
  }
}

async function listTodos() {
  const querySnapshot = await getDocs(collection(db, collectionId));
  // tranform to todo obj
  return (
    querySnapshot.docs
      // to avoid non serialisable Obj error on action.payload
      .reduce((acc, doc) => {
        acc[doc.id] = doc.data();
        return acc;
      }, {})
  );

  // .forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });
}

export { createTodo, listTodos, updateTodo };
