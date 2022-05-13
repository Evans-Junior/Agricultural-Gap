import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDp-TbBMgkItp5NVf0fQ0-pTd_kk6r9vIM",
  authDomain: "agricultural-communication.firebaseapp.com",
  projectId: "agricultural-communication",
  storageBucket: "agricultural-communication.appspot.com",
  messagingSenderId: "459988708712",
  appId: "1:459988708712:web:1c7106b4a570ba66a67add"
};

// const auth = getAuth();
// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
