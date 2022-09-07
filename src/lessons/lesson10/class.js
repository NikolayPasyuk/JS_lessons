// class BaseUser {
//
//     constructor(name, age = 18) {
//         this.name = name
//         this.age = age
//     }
//
//     showName() {
//         console.log(this.name)
//     }
//
//     showAge() {
//         console.log(this.age)
//     }
// }
//
// const baseUser1 = new BaseUser('Alex', 25)
// const baseUser2 = new BaseUser('Hanna')


/*
class BaseUser {
    static MAX_USER_NAME_LENGTH = 12

    static validateUserName(name) {

    }
}

//Вызов статических методов свойств
BaseUser.MAX_USER_NAME_LENGTH
BaseUser.validateUserName()

const baseUser = new BaseUser()

//undefined
console.log(baseUser.MAX_USER_NAME_LENGTH)*/


// get set

// class BaseUser {
//
//     #name
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     get name() {
//         return this.#name
//     }
//
//     set name(value) {
//         this.#name = value
//     }
// }
//
// const baseUsr = new BaseUser('Alex')
// console.log(baseUsr.name)
//
// baseUsr.name = 'New name'
// console.log(baseUsr.name)



//extends

