class User {
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log('Logged In');
    }
}

class Teacher extends User {
    constructor(userName , email , password){
        super(userName)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New Course was launched by ${this.userName}`);
    }
}


const chai = new Teacher("chai" , "chai@example.com" , "123")
chai.logMe();
chai.addCourse();

const masalaChai = new User("masalaChai")
masalaChai.logMe();

console.log(chai instanceof User);