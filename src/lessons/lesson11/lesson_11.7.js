//prototypes

// const alex = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const hanna = {
//     name: 'Hanna'
// }
//
// hanna.__proto__ = alex
// hanna.showName()


//this


//1. Global Scope ---> global object(window)

// console.log(this)
//
// console.log(this === window)
//
// this.age = 23
//
// console.log(window.age)


//2. Inside Functions (not arrow function) ---> как именно вызывается функция!!!

//--simple call ---> this === undefined (!use strict === window)

// function foo() {
//     console.log(this)
// }
//
// foo()

//-- called on behalf of an object ---> this = тому что слева от точки

// function foo() {
//     console.log(this)
// }
//
// const user = {
//     foo: foo
// }
//
// foo() //window
// user.foo() //user
//
// const alex = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const hanna = {
//     name: 'Hanna',
//     showName: alex.showName
// }
//
// alex.showName() //alex
// hanna.showName() //hanna


//-- using call bind apply methods

// const alex = {
//     name: 'Alex'
// }
//
// const hanna = {
//     name: 'Hanna'
// }
//
// function foo(a, b) {
//     console.log(this)
// }

// foo.call(alex, 1, 2)
// foo.apply(alex, [1, 2])
// foo.bind(alex)(1, 2)


// const alex = {
//     age: 23,
//     showAge() {
//         console.log(this.age)
//     }
// }
//
// function foo(cb) {
//     cb()
// }
//
// setTimeout(alex.showAge.bind(alex), 1000)
// setTimeout(() => {
//     alex.showAge()
// }, 1000)


//-- function called with new keyword

// function foo() {
//     console.log(this) //{}
// }
//
// new foo()


//3. Arrow functions ---> this берется из внешнего скоупа

// const foo = () => {
//     console.log(this)
// }
// foo()
//
// const user = {
//     age: 23,
//     showAge: () => {
//         console.log(this.age)
//     }
// }
// user.showAge()