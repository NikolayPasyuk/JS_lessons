//Task 38

/*
console.log('1' + 2)
console.log(2 + '1')
console.log(2 - '1')
console.log([1, 2, 3] + {})*/


//Task 39

/*
Object.prototype.toString = function () {
    return 'custom string representation'
}

const a = Object.create(null, {})
console.log(a + '')*/


//Task 40

/*
console.log(a)
{
    var a = 6
}
{
    let b = 6
}
console.log(b)*/


//Task 41

/*
test()
{
    function test() {
        console.log('test')
    }
}*/


//Task 42

/*
for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(() => console.log(j), 10)
    })(i)
}*/


//Task 43

/*
const test = {
    prefix: '_',
    tests: ['1', '2', '3'],
    addPrefixToTest() {
        this.tests = this.tests.map(function (testName) {
            return `${this.prefix}_${testName}`
        })
    }
}
test.addPrefixToTest()
console.log(test.tests)*/


//Task 44

/*
function User(name) {
    this.name = name
}

const user = new User('Alex')
console.log(user.isActive)

User.prototype = {
    isActive: true
}
console.log(user.isActive)*/


//Task 45

/*
function User(name) {
    this.name = name
}

const user = new User('Alex')
console.log(user.constructor === User)

User.prototype = {
    isActive: true
}
console.log(user.constructor === User)*/


//Task 46

/*
new Promise(() => {
    setTimeout(() => {
        return 'Hello'
    }, 1000)
})
    .then(res => `${res} World`)
    .then(res => `${res} |`)
    .then(console.log)*/


//Task 47

/*
let a = 5

Number.prototype.addOne = function () {
    const old = this.valueOf()
    return old + 1
}
a = a.addOne()
console.log(a)*/


//Task 48

/*
const foo = () => {
    console.log(bar)
    {
        var bar = 5
    }
}
foo()*/


//Task 49

/*
const foo = () => {
    console.log(bar)
    {
        let bar = 5
    }
}
foo()
*/


//Task 50

/*const foo = () => {
    bar()
    {
        function bar() {
            console.log('bar')
        }
    }
}
foo()*/


//Task 51

/*
function toString() {
    return 'Global'
}

const obj = {
    a: () => {
        console.log(
            this.toString()
        )
    },
    b() {
        console.log(
            this.toString()
        )
    },
    c() {
        (() => {
            console.log(
                this.toString()
            )
        })()
    }
}
obj.a()
obj.b()
obj.c()*/


//Task 52

/*
const foo = (x, y) => {
    console.log(y)

    return {
        bar: (z) => {
            foo(y, z)
        }
    }
}
const res = foo(1)
res.bar(5)
*/


//Task 53

/*
const a = {}
const b = {}
const c = {}
Object.setPrototypeOf(a, b)

console.log(b.__proto__ === c.__proto__)
console.log(a.__proto__ === b.__proto__)
console.log(a.__proto__ === b)*/


//Task 54

/*
const a = {
    name: 'a'
}

Object.defineProperty(a, 'getName', {
    value: function () {
        console.log(this.name)
    }
})

const b = Object.assign({}, a, {name: 'b'})

const c = Object.create(a, {
    name: {
        value: 'c'
    }
})
a.getName()
b.getName()
c.getName()*/


//Task 55

/*
let a = () => {
    console.log('a')
}
const execute = (f) => {
    setTimeout(f, 1000)
}
execute(a)

a = () => {
    console.log('b')
}
*/


//Task 56

function User() {
    this.showActive = () => {
        console.log(this.isActive)
    }
}

User.prototype = {
    isActive: false
}

const u = new User()

User.prototype = {
    isActive: true
}

const u1 = new User()
u.showActive()
u1.showActive()