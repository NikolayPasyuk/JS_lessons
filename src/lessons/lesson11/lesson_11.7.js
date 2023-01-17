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

const alex = {
    name: 'Alex'
}

const hanna = {
    name: 'Hanna'
}

function foo(a, b) {
    console.log(this)
}

foo.call(alex, 1, 2)
foo.apply(alex, [1, 2])