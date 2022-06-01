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

//Дана задача,что пройзойдет при вызове функции
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
bar()