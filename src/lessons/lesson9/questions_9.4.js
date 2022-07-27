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

/*
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

alert(fib(3))
alert(fib(7))*/

// динамическое программирование снизу вверх

/*
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(3))*/


//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n

//С использованием цикла

/*
function sumTo(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

alert(sumTo(100))*/


//через рекурсию

/*
function sumTo(n) {
    if (n === 1) return 1
    return n + sumTo(n - 1)
}

alert(sumTo(100))*/


//С использованием формулы арифметической прогрессии

function sumTo(n) {
    return n * (n + 1) / 2
}

alert(sumTo(100))