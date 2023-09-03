import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQMp4XDF1K4eJfIUDuSrCaID6RM2HJZ_Y",
  authDomain: "blog-app-2c7f2.firebaseapp.com",
  projectId: "blog-app-2c7f2",
  storageBucket: "blog-app-2c7f2.appspot.com",
  messagingSenderId: "934894682406",
  appId: "1:934894682406:web:6e04364bb867196a0f81e7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
