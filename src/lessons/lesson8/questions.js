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

var foo = function bar() {
    return 1
}
console.log(typeof bar())