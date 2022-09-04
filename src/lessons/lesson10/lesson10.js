//descriptors, iterators, objects to primitives

//Object.getOwnPropertyDescriptor
//Object.getOwnPropertyDescriptors
//Object.create
//Object.defineProperty
//Object.defineProperties
//Object.preventExtensions

/*const user = {
    name: 'Alex',
    age: 23
}
console.log(Object.getOwnPropertyDescriptor(user, 'name'))
console.log(Object.getOwnPropertyDescriptor(user, 'age'))
console.log(Object.getOwnPropertyDescriptors(user))*/


// const user = {
//     name: 'Alex'
// }
//
// const user1 = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })
//
// const user2 = {}
//
// Object.defineProperty(user2, 'name', {
//     value: 'Alex',
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
//
// const user3 = {}
//
// Object.defineProperties(user3, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })


//WRITABLE

// 'use strict'
// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: false,
//         enumerable: true,
//         configurable: true
//     }
// })
// user.name = 'Hanna'
//
// console.log(user)


//ENUMERABLE
// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: false,
//         configurable: true
//     }
// })
//
// console.log(Object.keys(user))
//
// for (let k in user) {
//     console.log(k)
// }


//CONFIGURABLE


//1. Нельзя удалить свойство
// 'use strict'
// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: true,
//         configurable: false
//     }
// })
//
// delete user.name
// console.log(user)


//2. нельзя переопределять enumerable и configurable как с true -> false так и с false -> true
// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })
//
// Object.defineProperty(user, 'name', {
//     value: 'Alex',
//     writable: true,
//     enumerable: false,
//     configurable: false
// })

//3. Мы не можем менять writable false -> true
// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: false,
//         enumerable: true,
//         configurable: false
//     }
// })
//
// Object.defineProperty(user, 'name', {
//     value: 'Hanna',
//     writable: false,
//     enumerable: true,
//     configurable: false
// })
// console.log(user)


const user = {
    name: 'Alex'
}
Object.preventExtensions(user)

user.age = 23
console.log(user)