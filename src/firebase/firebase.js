import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCvAxJ0Pk6CNuj8oMkeAxVDAxKuvz1YPM",
  authDomain: "geniebot-18516.firebaseapp.com",
  projectId: "geniebot-18516",
  storageBucket: "geniebot-18516.appspot.com",
  messagingSenderId: "1028870614776",
  appId: "1:1028870614776:web:ba0e76ceb80a23e486950d",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth, db };
