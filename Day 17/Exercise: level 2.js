// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

// Create the student object
const student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    skills: ["JavaScript", "HTML", "CSS"],
    country: "USA",
    enrolled: true
};

// Convert the student object to a JSON string
const studentJSON = JSON.stringify(student);

// Store the student object in localStorage
localStorage.setItem("student", studentJSON);

// To retrieve the student object from localStorage
const storedStudentJSON = localStorage.getItem("student");

// Convert the JSON string back to an object
const storedStudent = JSON.parse(storedStudentJSON);

console.log(storedStudent);
