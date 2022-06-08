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
let i;
for (i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}