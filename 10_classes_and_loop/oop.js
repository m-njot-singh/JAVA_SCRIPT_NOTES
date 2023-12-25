const user = {
    username : "Manjot",
    logInCount : 8,
    signedIn : true ,

    getUserDetails : function(){
        //console.log("Got user details from database");
        //console.log(`username : ${this.username}`);
        console.log(this);
    }

}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function user(username , logInCount , isLoggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn ;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }


    return this
}

const userOne = new user("Manjot" , 6 , true)
const userTwo = new user("Prabh" , 3 , false)

console.log(userOne.constructor);
// console.log(userTwo);