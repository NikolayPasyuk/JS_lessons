//Task 29

/*const foo = () => {
    const bar = () => {
        console.log('bar')
    }
    bar()
    baz()

    const baz = () => {
        console.log(bazlog)
    }
    const bazlog = 'baz'
}
foo()*/

//Task 30

/*
(() => {
    let a = b = 5
})()

const c = {
    showB() {
        console.log(b)
    }
}
c.showB()*/


//Task 31

/*const a = (x, y) => {

    console.log(y)

    return {
        a: (z) => {
            a(y, z)
        }
    }
}
const res = a(1)
res.a(2)*/


//Task 32

/*
const user = {

    _data: {
        name: 'Colin'
    },

    _methods: {
        _getName: function () {
            return this.name
        }
    },

    getName() {
        return this._methods._getName.call(this._data)
    }
}
console.log(user.getName())*/


//Task 33

/*
const getCatCreator = () => (
    class Cat {
        constructor(name) {
            this.name = name
        }
    }
)
const cat = new (getCatCreator())('Cat name!')
console.log(cat)*/


//Task 33

/*let animal = {
    eats: true
}

function Rabbit(name) {
    this.name = name
}

let rabbit = new Rabbit('White Rabbit')
Rabbit.prototype = animal
console.log(rabbit.eats)*/


//Task 34

/*
function Rabbit(name) {
    this.name = name
}

let rabbit = new Rabbit('White Rabbit')
let rabbit2 = new rabbit.constructor('Black Rabbit')

console.log(rabbit.__proto__ === rabbit2.__proto__)*/

//Task 35

/*
function Rabbit() {
}

Rabbit.prototype = {jumps: true}
let rabbit = new Rabbit()
console.log(rabbit.constructor === Rabbit)*/


//Task 36

/*
const a = {
    toString() {
        return 'key of a'
    },
    b: {
        name: 'b'
    }
}

const c = {}
c[a] = 'a'
c[a.b] = a.b.name
console.log(c)*/


//Task 37

/*
String.prototype.add = function (str) {
    return this + str
}

const arr = [1, 2, 3]

console.log(
    arr
        .join('a')
        .replaceAll('a', '0')
        .add('0')
        .split(',')
        .map(n => +n)
        .reduce((acc, n) => {
            acc[n] = n
            return acc
        }, {})
)*/
