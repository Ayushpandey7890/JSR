// singleton

// object literals 
Object.create
const JsUser = {
    name: "ayush",
    age: 18,
    location: "Jaipur",
    email: "ayushpandey@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);