// singleton

// object literals 
// const mySym = Symbol("key1")

// Object.create
// const JsUser = {
//     name: "ayush",
//     "full name": "HITESH CHAUDHARY",
//     mySym: "mykey1",
//     Age: 18,
//     email: "ayushpandey@google.com",
//     location: "Jaipur",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// // console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);

// JsUser.email = "AYUSH@CHATGPT.COM"
// Object.freeze(JsUser)
// JsUser.email = "AYUSH@CHATGPT.COM"
// console.log(JsUser);

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Accessing properties using bracket notation
console.log(person["name"]); // Output: John
console.log(person["age"]);  // Output: 30
console.log(person["city"]); // Output: New York

// Using a variable to access a property dynamically
let propertyName = "name";
console.log(person[propertyName]); // Output: 30

