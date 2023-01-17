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

function foo() {
    console.log(this)
}

foo()