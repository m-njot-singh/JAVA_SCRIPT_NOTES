function setUserName(username){
    this.username = username
}

function createUser (username , email , password){
    setUserName.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai" , "chai@fang.com" , "123abc")

console.log(chai);