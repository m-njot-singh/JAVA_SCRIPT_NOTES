// Primitive  (Call by value)

// 7 types : String , Number , Boolean , null , Undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp  = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

// Reference (Non Primitive)

// Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);




// ****************** GYAN ******************* //


// 7 Primitive types: String, Number, Boolean, null, undefined, symbol, BigInt
// 3 Non-primitive types: object, function, arrays

// // Primitive Data Types
// const score = 100
// const scoreValue = 100.5

// const isLoggedIn = true
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// const bigNumber = 6543435456431654564n //add n at last to make it bigInt

// // outputs
// console.log(typeof score); //number
// console.log(typeof scoreValue); //number
// console.log(typeof isLoggedIn); //boolean
// console.log(typeof outsideTemp); //object
// console.log(typeof userEmail); //undefined
// console.log(typeof id); //symbol
// console.log(typeof bigNumber); //bigInt

// // Non-primitive Data Types
// const arr = ["ironman","thor","spiderman"]
// const obj = {
//     name: "surya",
//     age: 22,
// }
// const func = function () {
//     console.log("hello world!");
// }

// console.log(typeof arr); //object
// console.log(typeof obj); //object
// console.log(typeof func); //function


// ************************************************

// Stack (Primitive)


let myYouTubeName = "Manjot_Singh"

let anotherName = myYouTubeName

anotherName="Not_Manjot"

console.log(myYouTubeName);
console.log(anotherName);  


// Heap (Non - primitive)

let userOne = {
    email: "user@gmail.com",
    upi : "user@ypl"
}

let userTwo = userOne

userTwo.email= "two@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);