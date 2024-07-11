//Converting JSON to JavaScript Object
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, undefined, 4)
    console.log(usersObj)


//Using a reviver function with JSON.parse()
const usersTexts = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObjs = JSON.parse(usersTexts, (key, value) => {
      let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
      return newValue
    })
    console.log(usersObjs)


 // 1. Change skills array to JSON using JSON.stringify()
 let skills = ["HTML", "CSS", "JavaScript"];
 let skillsJSON = JSON.stringify(skills);
 console.log(skillsJSON); // Output: '["HTML","CSS","JavaScript"]'
 
 // 2. Stringify the age variable
 let age = 25;
 let ageJSON = JSON.stringify(age);
 console.log(ageJSON); // Output: '25'

 // 3. Stringify the isMarried variable
 let isMarried = false;
 let isMarriedJSON = JSON.stringify(isMarried);
 console.log(isMarriedJSON); // Output: 'false'

 // 4. Stringify the student object
 let student = {
    name: "John Doe",
    age: 20,
    isMarried: false,
    skills: ["HTML", "CSS", "JavaScript"]
};
let studentJSON = JSON.stringify(student);
console.log(studentJSON); // Output: '{"name":"John Doe","age":20,"isMarried":false,"skills":["HTML","CSS","JavaScript"]}'


