// dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // interview question

// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date("01-04-2014")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // used for quizzes in js
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getTime());  // many times asked in interview
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('DEFAULT',{
    weekday: 'long',
    timeZone: ''
}}
