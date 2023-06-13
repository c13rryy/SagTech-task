import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import app from "../firebase";

import { User } from "firebase/auth";

const auth = getAuth(app);

export const register = async (
  email: string,
  password: string
): Promise<User | undefined> => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error((error as Error).message);
  }
};

export const login = async (
  email: string,
  password: string
): Promise<User | undefined> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error((error as Error).message);
  }
};

export const logout = async (): Promise<boolean | undefined> => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error((error as Error).message);
  }
};

export default auth;
