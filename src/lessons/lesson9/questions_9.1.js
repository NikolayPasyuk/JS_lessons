//Task 11
/*
console.log('1' + true)
console.log([1] + true)
console.log('2' * 3 + true)*/

//Task 12
/*
console.log(null == undefined)
console.log(null == null)
console.log({} + {})*/

//Task 13
/*
const a = {
    name: 'a'
}
let b = {
    name: 'b'
}
let c = {
    name: 'c'
}
c = b;
b = a;

c.name = 'new c'
b.name = 'new b'

console.log(a.name)
console.log(b.name)
console.log(c.name)*/

//Task 14
/*
const b = {
    name: 'b',
    getName: function () {
        return (() => this.name)()
    }
}
const c = {
    name: 'c'
}
Object.setPrototypeOf(c, b)
console.log(c.getName())*/

//Task 15
/*
const a = {
    age: 25
}
const b = {
    age: 23,
    hi: () => {
        console.log(this.age)
    },
    hi2() {
        (() => {
            console.log(this.age)
        }).call(a)
    }
}
b.hi()
b.hi2()*/

//Task 16
/*
Object.prototype.name = 'Object'

Object.prototype.showName = function () {
    console.log(this.name)
}
const a = {
    name: 'a'
}
const b = Object.create(a)
b.showName()

Object.setPrototypeOf(b, {})
b.showName()*/

//Task 17
/*
const arr = []
console.log(arr.constructor === Array)

const a = () => {
}
console.log(a.__proto__.__proto__.constructor === Object)

arr.__proto__ = []
console.log(arr.__proto__.__proto__ === Object.prototype)*/

//Task 18
/*
let i;
for (i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}*/

//Task 19
/*
console.log('a')
console.log('b')

setTimeout(() => {
    console.log('timer 10')
}, 10)

setTimeout(() => {
    console.log('timer 20')
}, 20)
Promise.resolve('Promise 1').then((res) => console.log(res))
Promise.resolve(setTimeout(() => (console.log('Promise 2')), 5))
Promise.resolve('Promise 3').then(console.log)

setTimeout(() => {
    console.log('timer 0')
}, 0)
console.log('d')
*/
//Task 20
/*
console.log('6' / '2')
console.log('6' * '2')
console.log('6' + '2')
console.log('6' + 2)
console.log('6' - '2')
console.log('2' + true)
console.log(null == undefined)
console.log(null == null)
console.log(undefined == undefined)*/

//Task 21
/*
const a = {}
const b = {}

a[b] = 'b'
console.log(a)*/

//Task 22
/*
const a = {}
const b = {
    toString() {
        return 'key of b'
    }
}

a[b] = 'b'
console.log(a)*/

//Task 23
/*
(() => {
    let a = b = 42
})()
console.log(typeof a === 'undefined')
console.log(typeof b === 'undefined')*/

//Task 24
/*
const a = {
    name: 'a',
    logName() {
        console.log(this.name)
    }
}
setTimeout(a.logName, 100)*/

//Task 25
/*
const a = {
    isMale: true,
    age: 23,

    getIsMale: () => {
        return this.isMale
    },
    getAge: function () {
        const age = 24
        return this.age
    }
}
console.log(a.getIsMale())
console.log(a.getAge())*/

//Task 26
Object.prototype.getName = function () {
    return this.name
}
const a = {name: 'a'}
const b = {name: 'b'}
const c = {name: 'c'}

console.log(
    a.getName
        .bind(b)
        .bind(c)()
)
console.log(
    a.getName
        .bind(c)
        .call(b)
)