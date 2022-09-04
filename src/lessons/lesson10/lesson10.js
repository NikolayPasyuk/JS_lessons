//descriptors, iterators, objects to primitives

//Object.getOwnPropertyDescriptor

const user = {
    name: 'Alex',
    age: 23
}
console.log(Object.getOwnPropertyDescriptor(user, 'name'))
