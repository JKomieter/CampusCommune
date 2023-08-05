import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signup(email: string, password: string) {
  let userCredential, error;

  try {
    userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    
  } catch (e) {
    error = e;
  }

  return { userCredential, error };
}
