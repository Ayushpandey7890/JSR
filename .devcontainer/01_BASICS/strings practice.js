// string is zero or more characters written inside quotes

let text = "Randy Orton"

let wrestlerName1 = "Edge" 
let wrestlerName2 = 'Main Event Jey Uso'

// console.log(wrestlerName1);

let text1 = "ansjndhddhdhhd"
let length = text.length

// escape character
let text2 = "we\'re so called \"viking raiders\" from the earth.";

// console.log(text2);

const string1 = "A string primitive"
const string2 = "Also a string primitive"
const string3 = "yet another string primitive"

const string4 = new String("A String object")

// character access for strings in js
// charAt() method

'cat'.charAt(1);  // gives value "a"
'cat'[1]; // gives value "a"

// When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed. The properties involved are neither writable nor configurable. 

const areEqualInUpperCase = (str1,str2)
    str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2)
    str1.toLowerCase() === str2.toLowerCase();
    // In JavaScript, === is the strict equality operator. It's used to compare two values to check if they are both equal in value and of the same data type without performing any type conversion.
areEqualInUpperCase("B","ss"); //true; should be false
areEqualInLowerCase("1","I"); // FALSE; SHOULD BE TRUE


const areEqual = (str1,str2, Locale = "en-US")
 str1.localeCompare(str2,locale, {sensitivity: "accent"}) === 0

areEqual("B","ss","de"); // false 
areEqual("1","I","tr"); // true
