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

//[[isClassConstructor]] ---> can not call without new
class Test {}

Test()// this --> undefined --> window
new Test()// this --> {}