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

// class User {
//     static MAX_NAME_LENGTH = 20
//     static  validateUserName = (name) => {
//         if (name.length > User.MAX_NAME_LENGTH) {
//             throw new Error('Invalid name')
//         }
//     }
//
//     constructor(name) {
//         User.validateUserName(name)
//         this.name = name
//     }
// }
//
// const alex = new User('Alex')


// class TodoApi {
//     static getTodos() {
//     }
//
//     static deleteTodo(id) {
//     }
// }
//
// TodoApi.getTodos()
// TodoApi.deleteTodo()


// ====================== PRIVATE FIELD ======================

// class User {
//     #name
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     getName() {
//         return this.#name
//     }
// }
//
// const alex = new User('Alex')
//
// // console.log(alex.#name) -- Error
// console.log(alex.getName())


// ================= GET, SET ==================

class User {
    #name

    constructor(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    setName(value) {
        return this.#name = value
    }

    get name() {
        console.log('GET')
        return this.#name
    }

    set name(value) {
        return this.#name = value
    }
}

const alex = new User('Alex')

alex.name = 'New Name'

console.log(alex.name)

// alex.getName()
// alex.setName('New name')

