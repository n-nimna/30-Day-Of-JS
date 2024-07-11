// Parse the txt JSON to object.
let txt = `
[
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 20,
        "isMarried": false,
        "skills": ["HTML", "CSS", "JavaScript"]
    },
    {
        "firstName": "Jane",
        "lastName": "Smith",
        "age": 25,
        "isMarried": true,
        "skills": ["HTML", "CSS", "JavaScript", "Python", "Django"]
    },
    {
        "firstName": "Emily",
        "lastName": "Jones",
        "age": 30,
        "isMarried": false,
        "skills": ["HTML", "CSS"]
    }
]`;


// Find the user who has many skills from the variable stored in txt.
let users = JSON.parse(txt);

// Find the user with the most skills
let userWithMostSkills = users.reduce((max, user) => {
    return user.skills.length > max.skills.length ? user : max;
});

console.log(userWithMostSkills);
// Output: {firstName: "Jane", lastName: "Smith", age: 25, isMarried: true, skills: ["HTML", "CSS", "JavaScript", "Python", "Django"]}
