import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

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
const database = getDatabase(app);

// Function to insert a student into the database
function insertStudent(student) {
  const studentsRef = ref(database, 'students'); // Reference to "students" collection
  const newStudentRef = push(studentsRef); // Generate unique ID for student

  set(newStudentRef, student)
    .then(() => {
      console.log("Student added successfully!");
    })
    .catch((error) => {
      console.error("Error adding student:", error);
    });
}

// Example student data
const studentData = {
  name: "Alice Johnson",
  age: 20,
  grade: "A",
};

// Insert student into Firebase
insertStudent(studentData);
