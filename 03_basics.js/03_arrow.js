const user ={
    username : "Manjot",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Manjot"
//     console.log(this.username);
// }

// const chai= function(){
//     let username = "Manjot"
//     console.log(this);
// }

// const  chai = () =>{
//     let username = "Manjot"
//     console.log(this);
// }

// chai()

// Arrow function declaration

//01 (with curly braces and return )

// const sum = (num1 ,num2) =>{
//     return num1+num2;
// }

//  02 (without return)
// const sum = (num1 , num2) => (num1 + num2)

//03 (return object with use return keyword)
// const sum = (num1 , num2) => ({username  : "Manjot"})

// console.log(sum);









