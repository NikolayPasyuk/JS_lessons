//Дана задача,что будет выведено  в консоль
const square = {
    side: 5,
    area() {
        return this.side * this.side
    },
    perimeter: () => 4 * this.side
};

console.log(square.area())
console.log(square.perimeter())