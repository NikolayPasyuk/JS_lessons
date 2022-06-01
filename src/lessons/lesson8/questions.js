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
console.log(e)