import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJsCSDiVnvbcPc4MiOseADqhn8nkMKPuY",
  authDomain: "emmanuel-wireless.firebaseapp.com",
  projectId: "emmanuel-wireless",
  storageBucket: "emmanuel-wireless.firebasestorage.app",
  messagingSenderId: "1002728433767",
  appId: "1:1002728433767:web:4f9ab7c44241c4ffdb4cc2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };