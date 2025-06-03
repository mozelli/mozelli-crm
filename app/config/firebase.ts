import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.ENV_FACEBOOK_API_KEY,
  authDomain: process.env.ENV_FACEBOOK_AUTH_DOMAIN,
  projectId: process.env.ENV_FACEBOOK_PROJECT_ID,
  storageBucket: process.env.ENV_FACEBOOK_STORAGE_BUCKET,
  messagingSenderId: process.env.ENV_FACEBOOK_MESSAGING_SENDER_ID,
  appId: process.env.ENV_FACEBOOK_API_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
