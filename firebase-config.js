// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjTmyxKqg6HqrPiwy57SfedHG2XuF8KGg",
  authDomain: "neocampus-e2679.firebaseapp.com",
  databaseURL: "https://neocampus-e2679-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "neocampus-e2679",
  storageBucket: "neocampus-e2679.firebasestorage.app",
  messagingSenderId: "661813565916",
  appId: "1:661813565916:web:8e47a80cbff1495b751719",
  measurementId: "G-Y4X6B53HQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Register User Function
export function registerUser(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, 'users/' + user.uid), {
        name: name,
        email: email
      });
      alert("Registration Successful!");
      window.location.href = "login.html"; // Redirect to login page
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Login User Function
export function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Logout Function
export function logoutUser() {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}
