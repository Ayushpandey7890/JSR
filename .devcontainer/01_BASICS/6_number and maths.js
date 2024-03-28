const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));  // tofixed is used frequently in which we give a specific number in brackets when the number is too big i.e precision

const otherNumber = 8813.2233

// console.log(otherNumber.toPrecision(4)); // precision value important for interview
// some interesting results for precisions

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"));

// ++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // abs means absolute value
// // here -4 converts to positive 4
// console.log(Math.round(4.3)); // here it rounds off no
// console.log(Math.ceil(4.2)); // top number it will choose
// console.log(Math.floor(4.9)); // low number it will choose
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));
// here all i.e. abs,round,ceil,floor,min,max are functions not properties

console.log(Math.random()); // it will always give the value between 0 and 1 including 0,1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 

//important must practice more times