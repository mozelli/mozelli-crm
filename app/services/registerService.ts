import { app } from "../config/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { RegisterData } from "../schemas/registerSchema";

export async function register(data: RegisterData) {
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredentials) => {
      return userCredentials.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error code: ", errorCode);
      console.error("Error message: ", errorMessage);
    });
}
