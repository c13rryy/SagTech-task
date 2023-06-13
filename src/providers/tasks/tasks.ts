import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import app from "../firebase";

import { InformationSlice } from "../../reusles-types/reusles.types";

const db = getFirestore(app);
const tasksRef = collection(db, "tasks");

interface DataFrom {
  title: string;
  info: string;
  date: string | number;
  correctDate: string | null;
  [key: `${string}.${string}`]: string;
}
export async function addTask(task: DataFrom): Promise<void> {
  //object
  try {
    const docRef = await addDoc(tasksRef, task);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    toast.error((error as Error).message);
  }
}

export async function getData(
  date: string
): Promise<InformationSlice[] | undefined> {
  //strtng
  try {
    const q = query(tasksRef, where("correctDate", "==", date));
    const snapshot = await getDocs(q);
    const tasks = snapshot.docs.map(
      (doc) =>
        ({
          //array + object
          id: doc.id,
          ...doc.data(),
        } as InformationSlice)
    );
    return tasks;
  } catch (error) {
    toast.error((error as Error).message);
  }
}

export async function getDataTask(): Promise<InformationSlice[] | undefined> {
  try {
    const snapshot = await getDocs(tasksRef);
    const tasks: InformationSlice[] = [];
    snapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...doc.data(),
      } as InformationSlice);
    });
    return tasks; //array + object
  } catch (error) {
    toast.error((error as Error).message);
  }
}

export async function updateTask(
  taskId: string,
  updTask: DataFrom
): Promise<void> {
  // string + object
  try {
    const taskDocRef = doc(db, "tasks", taskId);
    await updateDoc(taskDocRef, updTask);
    console.log("Document updated with ID: ", taskId);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

export async function deleteTaskByDate(date: string): Promise<void> {
  try {
    const q = query(tasksRef, where("correctDate", "==", date));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
      deleteDoc(doc.ref);
      console.log("Document deleted with ID: ", doc.id);
    });
  } catch (error) {
    console.error("Error deleting documents: ", error);
  }
}
