//Task 1
//Дана задача,что будет выведено  в консоль
/*
const square = {
    side: 5,
    area() {
        return this.side * this.side
    },
    perimeter: () => 4 * this.side
};

console.log(square.area())
console.log(square.perimeter())*/

//Task 2
//Дана задача,что пройзойдет при вызове функции
/*
var a = 15;

function foo() {
    var a = 25;

    var result = function () {
        console.log(a)
    }
    result.a = 35;

    return result
}

var bar = foo().bind({a: 45})
bar()*/

//Task 3
//Дана задача,что будет выведено  в консоль

/*
var foo = function bar() {
    return 1
}
console.log(typeof bar())*/

//Task 4
/*
var a = 50;

function f() {
    a = 100
    let b = 150
}

if (true) {
    a = 175
    let c = 200
    var d = 300
    const e = 400
}
f()
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)*/

//Task 5
/*
let a = 5
{
    a = 10
}
console.log(a)

function f2() {
    console.log(a)
    a = 20
    var b = 20
}

console.log(b)
f2()
console.log(a)*/

//Task 6
/*
{
    let c = 100
    var family = 'it-incubator'

    function f() {
        console.log(c)
    }
}
let doc = false
if (!doc) {
    function c() {
        console.log(family)
    }
}
f()
c()
console.log(family)
console.log(c)*/

//Task 7
/*
let car1 = new Promise((_, reject) => setTimeout(reject, 2000, 'Car 1 crashed in'))
let car2 = new Promise(resolve => setTimeout(resolve, 1500, 'Car 2 completed'))
let car3 = new Promise(resolve => setTimeout(resolve, 3000, 'Car 3 completed'))

Promise.race([car1, car2, car3])
    .then(value => {
        let result = `${value} the race.`
        console.log(result)
    })
    .catch(err => console.log('Race  is cancelled.', err))*/

//Task 8
console.log('Start')
Promise.resolve('Success').then(console.log)
console.log('End')