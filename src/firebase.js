import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc, getDocs,   query, where, doc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";



import toast from 'react-hot-toast';


const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_ID
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  export const register = async (email, password) => {
     try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        return user; 
     } catch (error) {
        toast.error(error.message)
     }
  }

  export const login = async (email, password) => {
    try{
       const { user } = await signInWithEmailAndPassword(auth, email, password); 
       return user;
    }
    catch (error) {
        toast.error(error.message)
     }
  }

  export const logout = async () => {
    try{
       await signOut(auth);
       return true
    }
    catch (error) {
        toast.error(error.message)
     }
  }



  const db = getFirestore(app);
  const tasksRef = collection(db, "tasks");

 export async function addTask(task) {
   try {
     const docRef = await addDoc(tasksRef, task);
     console.log("Document written with ID: ", docRef.id);
   } catch (error) {
     console.error("Error adding document: ", error);
   }
 }


 export async function getData(date) {
   const q = query(tasksRef, where("date", "==", date));
  const snapshot = await getDocs(q);
   const tasks = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
   }));
   return tasks;
}

export async function updateTask(taskId, updTask){
   try{
      const taskDocRef = doc(db, "tasks", taskId);
      await updateDoc(taskDocRef, updTask)
      console.log("Document updated with ID: ", taskId);
   } catch (error) {
     console.error("Error updating document: ", error);
   }
}
   


  export default app;