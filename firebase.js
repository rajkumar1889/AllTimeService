import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwjcfm8Y1ukI2GvgACDxrpweeWYtqlZuI",
  authDomain: "alltimeservice-56229.firebaseapp.com",
  projectId: "alltimeservice-56229",
  storageBucket: "alltimeservice-56229.firebasestorage.app",
  messagingSenderId: "371384733100",
  appId: "1:371384733100:web:5c00e04d9f1c476a01be09",
  measurementId: "G-ETRH2FCH70"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
