//class

// class User {
//
//     age = 23
//
//     someFunc = () => {
//     }
//     someFunc2 = () => {
//     }
//
//     constructor() {
//         this.name = name
//     }
//
//     sayHi() {
//         console.log(this.name)
//     }
// }
//
// const user = new User('Alex')
// console.log(user)

// function User(name) {
//     this.name = name
// }

// User.prototype.sayHi = function () {
//     console.log(this.name)
// }


// ============== NOT CLEAN SUGAR ================

//1 [[isClassConstructor]] ---> can not call without new
// class Test {}

// Test()// this --> undefined --> window
// new Test()// this --> {}


//2 string representation

// class Test {}
// function User(){}

// console.log(Test)
// console.log(User)


//3 inside class ---> use strict

//4 все методы класса являются неперечисляемыми


// ======================== static ====================


function User() {
}

User.defaultName = 'Default'
User.hi = function () {
}
console.dir(User)