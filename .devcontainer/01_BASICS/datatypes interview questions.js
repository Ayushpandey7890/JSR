// 2 types of data types PRIMITIVE AND NON PRIMITIVE

// 7 TYPES : STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL (TO MAKE ANY VALUE UNIQUE) , BIGINT(BIG VALUES)

const score = 100
const scoreValue = 200

const issLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 444433444355354545333335553n

// REFERENCE TYPE (NON PRIMITIVE)

// ARRAYS, OBJECTS, FUNCTIONS

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// const heroes = ("shaktimaan","naagaraj","dojacat");
// let myObj = {
//     name: "ayush",
//     age:22,
// }

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction); // typeof operator documentation very important for interview 