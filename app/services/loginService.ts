import { app } from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { LoginData } from "../schemas/loginSchema";

export async function login(data: LoginData) {
  const auth = getAuth(app);

  signInWithEmailAndPassword(auth, data.email, data.password)
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
