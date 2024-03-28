const { log } = require("console");
const { arrayBuffer } = require("stream/consumers");

const fruits = []
// fruits.push("banana", "apple", "peach")

// console.log(fruits.length);

fruits[5] = "mango"

// console.log(fruits[5]);
// console.log(Object.keys(fruits));
// console.log(fruits.length);

fruits.length = 10 
// console.log(fruits);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// console.log(fruits[8]);

// decreasing length property

fruits.length = 2;

// console.log(Object.keys(fruits));
// console.log(fruits.length);

// Arrays methods


// concat(), copyWithin(), every(), filter(), flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), and splice()

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

// const iterator = colors.keys();
// for (const key of iterator){
//     console.log('${key}: ${colors[key]}');
// }

// const newColors = colors.toReversed();

// important point to be remembered
// Objects: the object reference is copied into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.
// Primitive types such as strings, numbers and booleans (not String, Number, and Boolean objects): their values are copied into the new array.



// arr.copyWithin(0, 1, 2); // mutates arr
// const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
// const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr

const arrayLike = {
    0: "a",
    1: "b",
    length: 2,
};

// console.log(Array.prototype.join.call(arrayLike, "+"));
Array.prototype.flat.call({});

const a = {length: 0.7};
Array.prototype.push.call(a);
// console.log(a.length);


const fruits1 = ["Apple","Banana"];
// console.log(fruits.length);

const fruits2 = new Array("Apple","Banana");
// console.log(fruits2.length);

const fruits3 = "Apple,Banana".split(",");
// console.log(fruits3.length);

const fruits4 = ["Apple","Banana"];
const fruits4String = fruits4.join(",");
console.log(fruits4String);

const fruits5 = ["Apple","Banana"];

fruits[0];

fruits[1];

fruits[fruits.length - 1];

fruits [99];


const myArr = [0,1,3,4,5]
const myHeroes = ["shaktimaan","naagaraj"]

const myArr2 = [1,2,3,4]
console.log(myArr[0]);

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9) //  the unshift() method adds the elements at the very beginning of the array whereas the push() method adds at the end of the array.
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice ,splice

// console.log("A",myArr);

const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr);

const myn2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(myn2);

const fruits0 = ["banana","orange","apple","mango"];
console.log(fruits0.toString());

let length = fruits.length;

let fruit = fruits[fruits.length - 1];

const fruits9 = ["banana", "orange", "apple", "mango"];
let flen = fruits.length;

let text = "<ul>";
for (let i = 0; i < flen; i++){
    text += "<li>" + fruits[i] + "<li>";
}
text += "<ul>";