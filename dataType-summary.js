// Primitive  (Call by value)

// 7 types : String , Number , Boolean , null , Undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp  = null
let userEmail;

const id = Symbol('123')
const anotherId = symbol('123')

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