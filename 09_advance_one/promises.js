// promise 01

// const promiseOne = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// promise 02

// new Promise((resolve , reject)=>{
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     } ,1000)
// }).then(function(){
//     console.log("Promise 2 consumed");
// })


// promise 03

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : "Manjot" , email : "manjot@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// promise 04

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username : "Manjot" , password : "123"})
//         }
//         else{
//             reject('ERROR Something went wrong')
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })



// promise 5 (using async await )


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username : "Manjot" , password : "123"})
//         }
//         else{
//             reject('ERROR Something went wrong')
//         }
//     },1000)
// })


// async function consumePromiseFive (){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     } catch (error){
//         console.log(error);
//     }
    
// }

// consumePromiseFive()



// fetch from json link

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error){
//         console.log("E :", error);
//     }
    
// }

// getAllUsers()


// fetch using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))




