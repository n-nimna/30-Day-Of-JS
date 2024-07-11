// Stringify the students object with only firstName, lastName and skills properties

let student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    isMarried: false,
    skills: ["HTML", "CSS", "JavaScript"]
};

let studentJSON = JSON.stringify(student, ["firstName", "lastName", "skills"]);
console.log(studentJSON); // Output: '{"firstName":"John","lastName":"Doe","skills":["HTML","CSS","JavaScript"]}'
