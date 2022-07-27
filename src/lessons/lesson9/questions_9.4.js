//В массиве найти минимальное число

/*const numbers = [150, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let minValue = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i]
    }
}
console.log(minValue)*/


//В массиве найти максимальное число

/*
const numbers = [1, 34, 45, -123, 1234, 23]
let maxValue = [0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i]
    }
}
console.log(maxValue)*/


//написать функцию factorial(n), которая возвращает n!, используя рекурсию

/*
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1
}

alert(factorial(5))*/

/*
function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}

alert(factorial(5))*/


//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

alert(fib(3))
alert(fib(7))