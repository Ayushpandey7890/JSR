// const { log } = require("console")

// const name = "ayush"
// const repoCount = 50

// console.log(name + repoCount + "Value");
// console.log('hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('hiteshhc')

// console.log(gameName[0]);

// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("t"));

// string methods important for interviews

const newString = gameName.substring(-8,4)  // 4 KO INCLUDE NHI KRNA HAI 1 SE 3 TK KRNA HAI 
console.log(newString);  // in substring it doesnt include negative values it starts from 0 and ignore the negative 

const anotherString = gameName.slice(-7, 4) // for negative value we use slice method in string
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hello.com/ayush%20pandey" 

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"))

console.log(gameName.split("-"));

