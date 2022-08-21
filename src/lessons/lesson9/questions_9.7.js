//Task 71

/*
function foo() {
    bar()
    {
        function bar() {
            console.log('bar')
        }
    }
}

foo()*/


//Task 72

/*
let a = () => {
    console.log('a')
}

const run = (cb) => {
    setTimeout(cb, 1000)
}
run(a)
a = () => {
    console.log('new a')
}*/


//Task 73

/*
const a = {
    msg: 'Hello World',
    getMsg() {
        const msg = 'Hello getMsg';
        console.log(this.msg)
    }
}
a.getMsg()*/


//Task 74

/*
this.name = 'global'

const a = {
    name: 'a',
    logName: () => {
        console.log(this.name)
    }
}
setTimeout(a.logName, 100)*/


//Task 75

/*const a = {
    name: 'a',
    getName() {
        console.log(this.name)
    }
}

const b = {
    name: 'b'
}
const c = {
    name: 'c'
}
a.getName()
const foo = a.getName.bind(b)
a.getName()
a.getName.call(b)
foo.call(c)*/


//Task 76

/*
const a = {
    name: 'a'
}
const b = {
    name: 'b',

    hi() {
        (() => {
            console.log(this.name)
        }).call(a)
    }
}

const c = {
    name: 'c'
}

b.hi.call(c)*/


//Task 77

/*
const a = Object.create(null, {})
const b = {}
b[a] = 'a'
console.log(b)*/


//Task 78

/*Object.prototype.name = 'Object'

const a = {
    getName() {
        console.log(this.name)
    }
}

const b = {
    name: 'b'
}

a.getName()

b.__proto__ = a;
b.getName()

const c = Object.create(a, {
    name: {
        value: 'c'
    }
})
c.getName()*/


//Task 79

/*
const user = {
    sleep() {
        this.isSleeping = true
    }
}

const john = {}
john.__proto__ = user
john.sleep()
console.log(john.isSleeping)
*/


//Task 80

/*
console.log(Object.__proto__ === Function.prototype)

const arr = []
console.log(arr.constructor === Array)

const a = () => {
}
console.log(a.__proto__.__proto__.constructor === Object)

arr.__proto__ = []
console.log(arr.__proto__.__proto__ === Object.prototype)*/


//Task 81

/*
class BaseUser {
}

class User extends BaseUser {
    constructor(name) {
        super()
        this.name = name;
    }

    getName() {
        return this.name
    }
}

const user = new User('Alex')

console.log(user.__proto__ === User.prototype)

console.log(typeof User)
console.log(User === User.prototype.constructor)
console.log(User.__proto__ === Function.prototype)*/


//Task 82

class A {
    getName() {
        return this.name
    }
}

const b = Object.create(A, {
    name: {
        value: 'b'
    }
})
console.log(b.getName())

