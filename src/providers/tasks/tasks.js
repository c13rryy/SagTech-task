import { getFirestore, collection, addDoc, getDocs, query, where, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import app from '../firebase';

const db = getFirestore(app);
const tasksRef = collection(db, 'tasks');

export async function addTask(task) {
  try {
    const docRef = await addDoc(tasksRef, task);
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    toast.error(error.message);
  }
}

export async function getData(date) {
  try {
    const q = query(tasksRef, where('correctDate', '==', date));
    const snapshot = await getDocs(q);
    const tasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return tasks;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function getDataTask() {
  try {
    const snapshot = await getDocs(tasksRef);
    const tasks = [];
    snapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return tasks;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function updateTask(taskId, updTask) {
  try {
    const taskDocRef = doc(db, 'tasks', taskId);
    await updateDoc(taskDocRef, updTask);
    console.log('Document updated with ID: ', taskId);
  } catch (error) {
    console.error('Error updating document: ', error);
  }
}

export async function deleteTaskByDate(date) {
  try {
    const q = query(tasksRef, where('correctDate', '==', date));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
      deleteDoc(doc.ref);
      console.log('Document deleted with ID: ', doc.id);
    });
  } catch (error) {
    console.error('Error deleting documents: ', error);
  }
}