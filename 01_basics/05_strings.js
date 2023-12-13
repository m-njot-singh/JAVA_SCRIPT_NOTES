const name = "Manjot"
const repoCout = 50

// old sintex (not preffered)

console.log(name + repoCout + "Value");

// new sintex (preffered)
// this is known as string interpolation you make placeholders and put there java scripts tags , varialbles etc and use prebuild method at that place .

console.log(`Hello my name is ${name} ans my repo count is ${repoCout}`);


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));