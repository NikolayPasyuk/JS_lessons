// this

//!'use strict' -> ?{}
// 'use strict' -> any type (null,undefined, string, number...)


//1 -> global env
//2 -> functions + arrow func + methods
//3 -> bind, call, apply
//4 -> constructors


//1 -> window, global
// console.log(this === window)
// this.b = 'b'
// console.log(window.b)


//2 -> functions + arrow func + methods

// function outer() {
//     //this -> ?
//
//     (() => {
//         const hi = () => {
//             console.log(this)
//         }
//         hi()
//     })()
// }


// this.name = 'window'
//
// const user = {
//     name: 'Alex',
//     hi: () => {
//         console.log(this.name)
//     }
// }
// user.hi()

// function hi() {
//     console.log(this)//undefined -> window
// }
//
// hi()
//
// const user = {
//     name: 'Alex',
//     hi() {
//         console.log(this.name)
//     }
// }
//
// const superUser = {
//     name: 'Super user',
//     hi: user.hi
// }
// user.hi()
// superUser.hi()


//3 -> bind, call, apply

// 'use strict'
//
// const user = {
//     name: 'Alex',
//     hi() {
//         console.log(this)
//     }
// }
//
// const superUser = {
//     name: 'Super user',
//     hi: user.hi
// }
// superUser.hi.call(5)

// superUser.hi(1, 2)
//
// superUser.hi.call(this, 1, 2)
// superUser.hi.apply(user, [1, 2])
//
// superUser.hi.bind(user, 1, 2)()
//
// const bindedSuperUser = superUser.hi.bind(user, 1, 2)
// bindedSuperUser()


//4 -> constructors

// function User(name) {
//     this.name = name
// }
//
// const user1 = new User('Alex')
// const user2 = new User('Hanna')


// const a = {
//     name: 'a',
//     logName() {
//         console.log(this.name)
//     }
// }
// setTimeout(a.logName, 100)


// const a = {
//     isMale: true,
//     age: 23,
//
//     getIsMale: () => {
//         return this.isMale
//     },
//     getAge: function () {
//         const age = 24;
//         return this.age
//     }
// }
// console.log(a.getIsMale())
// console.log(a.getAge())


// const a = {
//     name: 'a',
//     getName() {
//         return this.name
//     }
// }
// const b = {
//     name: 'b',
//     getName() {
//         return this.name
//     }
// }
// const c = {
//     name: 'c',
//     getName() {
//         return this.name
//     }
// }
//
// console.log(
//     a.getName
//         .bind(b)
//         .bind(c)()
// )
// console.log(
//     a.getName
//         .bind(c)
//         .call(b)
// )


// const watchBalanceWithLog = function (cb) {
//     let count = 0
//
//     return function () {
//         cb();
//         console.log(`Balance was watched ${++count} times`)
//     }
// }
//
// let wallet = {
//     money: 100,
//     currency: 'USD',
//     watchBalance() {
//         console.log(`${this.money} ${this.currency}`)
//     }
// }
//
// wallet.watchBalance = watchBalanceWithLog(wallet.watchBalance.bind(wallet))
//
// wallet.watchBalance()
// wallet.watchBalance()


// const a = {
//     name: 'a'
// }
//
// const b = {
//     name: 'b',
//     getName() {
//         (() => {
//             console.log(this.name)
//         }).call(a)
//     }
// }
// b.getName()


// const a = {
//     age: 25
// }
//
// const b = {
//     age: 23,
//
//     hi: () => {
//         console.log(this.age)
//     },
//     hi2() {
//         (() => {
//             console.log(this.age)
//         }).call(a)
//     }
// }
// b.hi()
// b.hi2()


// const group = {
//     name: 'Samurai',
//     users: ['Alex', 'Hanna'],
//
//     showUsersWithGroup() {
//         group.users.forEach(function (user) {
//             console.log(`${this.name}: ${user}`)
//         })
//     }
// }
// group.showUsersWithGroup()


// const a = {
//     name: 'a',
//     getName() {
//         console.log(this.name)
//     }
// }
//
// const b = {
//     name: 'b'
// }
// const c = {
//     name: 'c'
// }
// a.getName()
//
// const foo = a.getName.bind(b)
// a.getName()
//
// a.getName.call(b)
// foo.call(c)
