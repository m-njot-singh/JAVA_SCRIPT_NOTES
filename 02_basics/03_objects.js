// Singleton 
// functions that ae created by constructed method (Object.create) that is known as singleton methods

//Object literals

const mysym =Symbol("key1")

const jsUser = {
    name : "Manjot",
    "full Name" : "Manjot Singh",
    age : 18,
    [mysym] : "keyTwo",
    email : "manjot@gmail.com",
    Mob_No : 6280490333,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(jsUser.lastLoginDays[0]);
// console.log(jsUser["lastLoginDays"][1]);
// console.log(jsUser["full Name"]);
// console.log(typeof jsUser[mysym]);
// console.log(jsUser);

// jsUser.email ="manjot@chatgpt.com"
// console.log(jsUser["email"]);

// Object.freeze(jsUser)

// jsUser.email = "manjot@google.com" // not changed because we use freeze in 27 line so we cant change any value from now 
// console.log(jsUser["email"]);


jsUser.greetingOne = function(){
    console.log("Hello js User");
}

jsUser.greetingOne()


jsUser.greetingTwo = function() {
    console.log(`Hello js User , ${this["full Name"]}`);
}

jsUser.greetingTwo()