// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC5UJT4PYBFmvhNSXGD_CNuBa4B40B9ipQ",
  authDomain: "visaprof-557e2.firebaseapp.com",
  projectId: "visaprof-557e2",
  storageBucket: "visaprof-557e2.appspot.com",
  messagingSenderId: "960958883172",
  appId: "1:960958883172:web:8d8ca362cc78970443c671",
  measurementId: "G-LNBXD05TPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }
