import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ufz6RD5-Ca0TSU9gFUg7dbYanWQhGEs",
  authDomain: "stiga-test.firebaseapp.com",
  projectId: "stiga-test",
  storageBucket: "stiga-test.appspot.com",
  messagingSenderId: "947516546674",
  appId: "1:947516546674:web:aa1d1a420b9184f1ebeceb",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
    });
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

export const signout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};
