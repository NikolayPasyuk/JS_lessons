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

console.log(this)

console.log(this === window)

this.age = 23

console.log(window.age)