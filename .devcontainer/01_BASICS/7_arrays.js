// arrays

const myArr = [1 , 2 , 3 , 4 , 5 ]
const myHeros = ["shaktiman","dc"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);


// ARRAY METHODS

// myArr.push(6) /// to add
// myArr.push(7)
// myArr.pop() // last value ko remove karega bina number daale braces ke andar

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);


// slice, splice

console.log(("A",myArr));

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.slice(1,3)
console.log("C", myArr);
console.log(myn2);


// interview questions difference between slice and splice