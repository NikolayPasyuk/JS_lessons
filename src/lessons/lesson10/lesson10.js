//descriptors, iterators, objects to primitives

//Object.getOwnPropertyDescriptor
//Object.getOwnPropertyDescriptors
//Object.create

/*const user = {
    name: 'Alex',
    age: 23
}
console.log(Object.getOwnPropertyDescriptor(user, 'name'))
console.log(Object.getOwnPropertyDescriptor(user, 'age'))
console.log(Object.getOwnPropertyDescriptors(user))*/


const user = {
    name: 'Alex'
}

const user1 = Object.create(Object.prototype, {
    name: {
        value: 'Alex',
        writable: true,
        enumerable: true,
        configurable: true
    }
})