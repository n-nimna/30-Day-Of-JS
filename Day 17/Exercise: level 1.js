// Store you first name, last name, age, country, city in your browser localStorage.

// Define the user details
const firstName = "John";
const lastName = "Doe";
const age = 30;
const country = "USA";
const city = "New York";

// Store the user details in localStorage
localStorage.setItem("firstName", firstName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("age", age.toString()); // Convert age to string
localStorage.setItem("country", country);
localStorage.setItem("city", city);

// To retrieve the data from localStorage
const storedFirstName = localStorage.getItem("firstName");
const storedLastName = localStorage.getItem("lastName");
const storedAge = localStorage.getItem("age");
const storedCountry = localStorage.getItem("country");
const storedCity = localStorage.getItem("city");

console.log(storedFirstName, storedLastName, storedAge, storedCountry, storedCity);
